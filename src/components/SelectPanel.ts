import { Control, GridContainer, Label, Button, ScrollContainer } from 'godot';
import { onready } from 'godot.annotations';
import { _creatSpritePartLayer, _loadScene } from '../utils/Utils';

export default class SelectPanel extends Control {
  @onready('VBoxContainer/HBoxContainer/Label')
  public title!: Label; // Assuming you have a label to display the selected body type
  @onready('VBoxContainer/ScrollContainer/GridContainer')
  public gridContainer!: GridContainer; // Assuming you have a container to hold the sprites
  @onready('VBoxContainer/ScrollContainer2/SecondaryGridContainer')
  public secondaryGridContainer!: GridContainer; // Assuming you have a container to hold the sprites
  // Called when the node enters the scene tree for the first time.
  @onready('VBoxContainer/HBoxContainer/BackButton')
  public backButton!: Button; // Assuming you have a button to change the variant

  _gridContainer_clear(): void {
    // Clear the grid container
    while (this.gridContainer.get_child_count() > 0) {
      const child = this.gridContainer.get_child(0);
      this.gridContainer.remove_child(child!);
      child!.queue_free();
    }
  }
  _secondaryGridContainer_clear(): void {
    // Clear the grid container
    while (this.secondaryGridContainer.get_child_count() > 0) {
      const child = this.secondaryGridContainer.get_child(0);
      this.secondaryGridContainer.remove_child(child!);
      child!.queue_free();
    }
  }

  _showVariantLayer(): void {
    const scrollContainer = this.get_node('VBoxContainer/ScrollContainer') as ScrollContainer;
    const scrollContainer2 = this.get_node('VBoxContainer/ScrollContainer2') as ScrollContainer;
    scrollContainer.visible = false; // Show the grid container
    // Logic to show the part layer
    scrollContainer2.visible = true; // Show the secondary grid container
    this.backButton.visible = true; // Show the back button
  }

  _hideVariantLayer(): void {
    const scrollContainer = this.get_node('VBoxContainer/ScrollContainer') as ScrollContainer;
    const scrollContainer2 = this.get_node('VBoxContainer/ScrollContainer2') as ScrollContainer;
    scrollContainer.visible = true; // Show the grid container
    scrollContainer2.visible = false; // Hide the secondary grid container
    this.backButton.visible = false; // Hide the back button
  }
}
