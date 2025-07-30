import {
  Control,
  Callable,
  Button,
  ButtonGroup,
  Vector2,
  Signal,
  NodePath,
} from 'godot';
import { onready, signal } from 'godot.annotations';
import { BODY_TYPE, PartProps } from '../types/types';
import {
  _creatSpritePartLayer,
  _loadScene,
  _convertToPartProps,
} from '../utils/Utils';
import SelectPanel from '../components/SelectPanel';
import PartPreviewSlot from '../components/PartPreviewSlot';
import Store from '../utils/Store';
export default class PartPanel extends Control {
  @onready('SelectPanel')
  public partTypePanel!: SelectPanel;

  @signal()
  onCreatePreviewSlot!: Signal<(previewSlot: PartPreviewSlot) => void>;

  _addEvents(): void {
    this.partTypePanel.backButton.toggled.connect(
      Callable.create(this, () => {
        this.partTypePanel._hideVariantLayer();
        this.partTypePanel.title.text =
          this.partTypePanel.title.text.split(' -> ')[0];
      })
    );
  }
  _getRootState(path: string): any {
    const state = this.get_tree()?.root?.get_node('Main/Store') as Store;
    return state?.getState(path);
  }
  _createPartPreviewSlot(
    bodyType: BODY_TYPE,
    partType: string,
    partName: string,
    variant: string,
    partData: Record<string, any>
  ): PartPreviewSlot {
    const selectedParts = this._getRootState('selectedParts');
    // Create a sprite for the selected variant
    const partPreviewSlot = _loadScene(
      'res://src/components/PartPreviewSlot.tscn'
    ) as PartPreviewSlot;
    const name = variant || partName;
    partPreviewSlot.set_name(name);
    const partProps: PartProps = _convertToPartProps(
      bodyType,
      partType,
      partName,
      variant,
      partData
    );
    partPreviewSlot.focus_mode = 0;
    partPreviewSlot._withProps(partProps, selectedParts);
    this.onCreatePreviewSlot.emit(partPreviewSlot);
    return partPreviewSlot;
  }
  _loadPartNamedData(
    bodyType: BODY_TYPE,
    partType: string,
    partNamedData: Record<string, any>
  ): void {
    this.partTypePanel.title.text = partType;
    const typeButtonGroup = new ButtonGroup();
    Object.entries(partNamedData).forEach(([partName, partData]) => {
      const variant = '';
      const partPreviewSlot = this._createPartPreviewSlot(
        bodyType,
        partType,
        partName,
        variant,
        partData
      );
      partPreviewSlot.focus_mode = 0;
      partPreviewSlot.button_group = typeButtonGroup;
      this.partTypePanel.gridContainer.add_child(partPreviewSlot);
    });
    this._addEvents();
  }

  _loadPartVariants(
    bodyType: BODY_TYPE,
    partType: string,
    partName: string,
    partData: Record<string, any>
  ): void {
    const selectedVariant = this._getRootState(
      `selectedParts.${partType}.variant`
    );
    if (partData) {
      // Remove all children from the gridContainer
      this.partTypePanel._secondaryGridContainer_clear();
      const variants = partData.variants || [];
      const variantTypeButtonGroup = new ButtonGroup();
      variants.forEach((variant: string, index: number) => {
        const partPreviewSlot = this._createPartPreviewSlot(
          bodyType,
          partType,
          partName,
          variant,
          partData
        );

        if (selectedVariant === variant) {
          partPreviewSlot.button_pressed = true; // Set the button as pressed if it matches the selected variant
        }
        partPreviewSlot.button_group = variantTypeButtonGroup;
        this.partTypePanel.secondaryGridContainer.add_child(partPreviewSlot);
      });
    }
  }
}
