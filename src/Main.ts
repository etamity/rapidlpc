import {
  TabContainer,
  Node,
  OptionButton,
  RichTextLabel,
  float64,
  GArray,
  Callable,
  Button,
  FileDialog,
  FileAccess,
} from 'godot';
import DataLoader from './utils/DataLoader';
import { onready } from 'godot.annotations';
import PartPanel from './ui/PartPanel';
import { _convertToPartProps, _loadScene, sortByOrder } from './utils/Utils';
import Charactor from './components/Charactor';
import { BODY_TYPE } from './types/types';
import Store from './utils/Store';
import PartPreviewSlot from './components/PartPreviewSlot';
import { PARTS_ORDER } from './utils/Constants';
import {
  _randomPart,
  DecorativeElements,
  FunctionalGear,
  MandatoryBodyParts,
} from './utils/Generator';
import GlobalSettings from './utils/GlobalSettings';
export default class Main extends Node {
  @onready('TabContainer')
  private tabContainer!: TabContainer; // Assuming you have a container node in your scene

  @onready('CenterContainer/Charactor')
  private charactor!: Charactor;

  @onready('RichTextLabel')
  private debugGlobalStateText!: RichTextLabel;

  @onready('OptionButton')
  private optionButton!: OptionButton;

  @onready('Store')
  private store!: Store;

  @onready('SpritesheetsFileDialog')
  private spritesheetsFileDialog!: FileDialog;

  @onready('SaveLoadFileDialog')
  private saveLoadFileDialog!: FileDialog;

  @onready('ExportFileDialog')
  private exportFileDialog!: FileDialog;
  _ready(): void {
    this.store.on('selectedParts', (selectedParts: any) => {
      // this.debugGlobalStateText.text = JSON.stringify(selectedParts);
      this.charactor._drawCharactor(selectedParts);
    });

    this._loadTypes(BODY_TYPE.MALE);
    this.spritesheetsFileDialog.dir_selected.connect(
      Callable.create(this, (dir: string) => {
        GlobalSettings.spritesheetsPath = dir;
        this._loadTypes(BODY_TYPE.MALE);
      })
    );
    this.exportFileDialog.dir_selected.connect(
      Callable.create(this, (dir: string) => {
        GlobalSettings.exportPath = dir;
        const splitByAnimation =
          this.exportFileDialog.get_meta('split_animation');
        this.charactor._export_all(splitByAnimation);
      })
    );
    this.saveLoadFileDialog.file_selected.connect(
      Callable.create(this, (path) => {
        if (
          this.saveLoadFileDialog.file_mode ===
          FileDialog.FileMode.FILE_MODE_SAVE_FILE
        ) {
          const saveFile = FileAccess.open(path, FileAccess.ModeFlags.WRITE);
          const selectedParts = this.store.getState('selectedParts');
          saveFile?.store_string(JSON.stringify(selectedParts, null, 2));
        } else if (
          this.saveLoadFileDialog.file_mode ===
          FileDialog.FileMode.FILE_MODE_OPEN_FILE
        ) {
          const loadFile = FileAccess.open(path, FileAccess.ModeFlags.READ);
          if (loadFile) {
            const selectedParts = JSON.parse(loadFile.get_as_text());
            this.store.setState('selectedParts', selectedParts);
          }
        }
      })
    );
  }
  _on_save_character_pressed() {
    this.saveLoadFileDialog.file_mode = FileDialog.FileMode.FILE_MODE_SAVE_FILE;
    this.saveLoadFileDialog.filename_filter = '.json';
    this.saveLoadFileDialog.popup();
  }
  _on_load_character_pressed() {
    this.saveLoadFileDialog.file_mode = FileDialog.FileMode.FILE_MODE_OPEN_FILE;
    this.saveLoadFileDialog.filename_filter = '.json';
    this.saveLoadFileDialog.popup();
  }
  _on_export_button_pressed() {
    if (!GlobalSettings.exportPath) {
      this.exportFileDialog.set_meta('split_animation', true);
      this.exportFileDialog.popup();
    } else {
      this.charactor._export_all(true);
    }
    this.charactor._export_all(true);
  }
  _on_export_single_sprite_sheet_button_pressed() {
    if (!GlobalSettings.exportPath) {
      this.exportFileDialog.set_meta('split_animation', false);
      this.exportFileDialog.popup();
    } else {
      this.charactor._export_all(false);
    }
  }

  _get_selected_bodytype(): BODY_TYPE {
    const bodyTypeText = this.optionButton.get_item_text(
      this.optionButton.get_selected_id()
    );
    const selectedBodyType = bodyTypeText.toUpperCase() as BODY_TYPE;
    return selectedBodyType;
  }
  _on_tab_container_tab_changed(idx: number) {
    const selectedBodyType = this._get_selected_bodytype();
    const currentTab = this.tabContainer.get_tab_title(idx);
    this._updatePreviewSlots(currentTab, selectedBodyType);
  }
  _on_open_spritesheets_folder_pressed() {
    this.spritesheetsFileDialog.popup();
  }
  _updatePreviewSlots(currentTab: string, bodyType: BODY_TYPE) {
    const selectedParts = this.store.getState('selectedParts');
    const partPanel = this.tabContainer.find_child(
      currentTab,
      true,
      false
    ) as PartPanel;
    const allSlots =
      partPanel.partTypePanel.gridContainer.get_children() as GArray<PartPreviewSlot>;
    const allSlots1 =
      partPanel.partTypePanel.secondaryGridContainer.get_children() as GArray<PartPreviewSlot>;
    allSlots.append_array(allSlots1);
    for (let slot of allSlots) {
      slot._withProps(
        {
          ...slot.partProps,
          bodyType,
        },
        selectedParts
      );
    }
  }
  _on_option_button_item_selected(index: number) {
    const selectedBodyType = this._get_selected_bodytype();
    const currentTab = this.tabContainer.get_tab_title(
      this.tabContainer.current_tab
    );
    this._updatePreviewSlots(currentTab, selectedBodyType);
  }

  _tabContainer_clear(): void {
    // Clear the grid container
    while (this.tabContainer.get_child_count() > 0) {
      const child = this.tabContainer.get_child(0);
      this.tabContainer.remove_child(child!);
      child!.queue_free();
    }
  }

  _loadTypes(bodyType: BODY_TYPE): void {
    this._tabContainer_clear();
    Object.keys(DataLoader.instance.partsData)
      .sort(sortByOrder(PARTS_ORDER))
      .map((key) => [key, DataLoader.instance.partsData[key]])
      .forEach(([partType, partNamedData]) => {
        this._createPartPanel(bodyType, partType, partNamedData);
      });
  }

  _on_generate_button_pressed() {
    const selectedBodyType = this._get_selected_bodytype();
    const mandatoryBodyParts = Object.fromEntries(
      MandatoryBodyParts.map((partType) => {
        return [
          partType,
          _randomPart(
            selectedBodyType,
            partType,
            DataLoader.instance.partsData[partType]
          ),
        ];
      })
    );
    const decorativeElements = Object.fromEntries(
      DecorativeElements.filter(() => Math.random() > 0.9).map((partType) => {
        return [
          partType,
          _randomPart(
            selectedBodyType,
            partType,
            DataLoader.instance.partsData[partType]
          ),
        ];
      })
    );
    const functionalGear = Object.fromEntries(
      FunctionalGear.filter(() => Math.random() > 0.9).map((partType) => {
        return [
          partType,
          _randomPart(
            selectedBodyType,
            partType,
            DataLoader.instance.partsData[partType]
          ),
        ];
      })
    );
    this.store.setState('selectedParts', {
      ...mandatoryBodyParts,
      ...decorativeElements,
      ...functionalGear,
    });
  }
  _process(delta: float64): void {}

  _createPartPanel(
    bodyType: BODY_TYPE,
    partType: string,
    partNamedData: Record<string, any>
  ): void {
    const partPanel = _loadScene('res://src/ui/PartPanel.tscn') as PartPanel;
    partPanel.set_name(partType);
    this.tabContainer.add_child(partPanel);
    partPanel.onCreatePreviewSlot.connect(
      Callable.create(this, (partPreviewSlot: PartPreviewSlot) => {
        partPreviewSlot.pressed.connect(
          Callable.create(this, () => {
            const bodyTypeText = this.optionButton.get_item_text(
              this.optionButton.get_selected_id()
            );
            const selectedBodyType = bodyTypeText.toUpperCase() as BODY_TYPE;

            const { partProps } = partPreviewSlot;
            const { partName, partData, partType, variant, bodyType } =
              partProps;
            if (!partProps.variant) {
              this.store.setState('viewState', {
                partName: partProps.partName,
              });

              this.store.setState(`selectedParts.${partProps.partType}`, {
                partType,
                partName,
                bodyType,
                partData,
              });
              partPanel._loadPartVariants(
                selectedBodyType,
                partType,
                partName,
                partData
              );
              partPanel.partTypePanel._showVariantLayer();
            } else {
              this.store.setState('viewState', {
                partType: partProps.partType,
              });
              this.store.setState(`selectedParts.${partProps.partType}`, {
                partType,
                variant,
                partName,
                bodyType,
                partData,
              });
              partPanel.partTypePanel.title.text =
                partProps.partType +
                ' -> ' +
                partProps.partName +
                ' -> ' +
                partProps.variant;
            }
          })
        );
      })
    );

    partPanel._loadPartNamedData(bodyType, partType, partNamedData);
  }
}
