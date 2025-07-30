import { Button, Vector2 } from 'godot';
import { PartProps } from '../types/types';
import { _creatSpritePartLayer, _getAssetPath } from '../utils/Utils';
import Store from '../utils/Store';

export default class PartPreviewSlot extends Button {
  // Called when the node enters the scene tree for the first time.
  public partProps!: PartProps;
  _withProps(partProps: PartProps, selectedParts: any) {
    this.partProps = partProps;
    this._drawPreview(selectedParts);
    return this;
  }
  _clear(): void {
    // Clear the grid container
    while (this.get_child_count() > 0) {
      const child = this.get_child(0);
      this.remove_child(child!);
      child!.queue_free();
    }
  }
  _getRootState(path: string): any {
    const store = this.get_tree()?.root?.get_node('Main/Store') as Store;
    return store?.getState(path);
  }

  _drawPreview(selectedParts: any) {
    this._clear();
    const { partData, variant, partName, bodyType, partType } = this.partProps;
    Object.entries(partData)
      .filter(([key, value]) => {
        if (key.includes('layer')) {
          const basePath = value[bodyType.toLowerCase()];
          const { custom_animation } = value;
          const assetPath = _getAssetPath(
            basePath,
            '',
            variant,
            partData,
            selectedParts,
            Boolean(custom_animation)
          );
          return !assetPath.includes('undefined');
        }

        return false;
      })
      .forEach(([key, value]) => {
        const typedValue = value as Record<string, any>;
        const basePath = value[bodyType.toLowerCase()];
        const { custom_animation } = value;
        if (basePath) {
          const zPos = typedValue['zPos'] || 0;
          const assetPath = _getAssetPath(
            basePath,
            '',
            variant,
            partData,
            selectedParts,
            Boolean(custom_animation)
          );

          const partLayer = _creatSpritePartLayer(assetPath, zPos, partData);

          partLayer.scale = new Vector2(1, 1); // Adjust scale as needed
          partLayer.visible = true;
          if (partName.toLowerCase() === key) {
            partLayer.visible = true;
          }

          this.add_child(partLayer);
        }
      });
    this.visible = this.get_child_count() > 0 ? true : false;
  }

  _ready(): void {
    this.focus_mode = 0;
  }

  // Called every frame. 'delta' is the elapsed time since the previous frame.
  _process(delta: number): void {}
}
