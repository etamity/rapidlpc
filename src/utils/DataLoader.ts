import { FileAccess, PackedStringArray, DirAccess } from 'godot';
const PARTS_DATA = 'res://assets/sheet_definitions';
export default class DataLoader {
  public parts: Record<string, any> = {};
  public partsData: Record<string, any> = {};
  static readonly instance = new DataLoader();
  constructor() {
    this._gather_data();
  }

  _load_data(filePath: string): Record<string, any> {
    try {
      const fileContent = FileAccess.open(filePath, FileAccess.ModeFlags.READ);
      return fileContent ? JSON.parse(fileContent.get_as_text()) : {};
    } catch (err: any) {
      console.error(`Failed to open or parse file: ${filePath}`, err.message);
      return {};
    }
  }

  _gather_data(): Record<string, any> {
    // Gather all quest resources and add to parts_data array
    const parts_files: PackedStringArray = DirAccess.get_files_at(PARTS_DATA);

    for (let i = 0; i < parts_files.size(); ++i) {
      const filePath = parts_files.get(i);
      const part = this._load_data(PARTS_DATA + '/' + filePath);
      this.parts[filePath] = part;
      const name = part['name'].split(' ').join('_');
      if (!name.includes('PLACEHOLDER')) {
        const type_name = part['type_name'];
        this.partsData[type_name] = {
          ...this.partsData[type_name],
          [name]: part,
        };
      }
    }
    // const selectedPartsData = this._init_selected_parts_data(this.partsData);
    // const saveFile = FileAccess.open(
    //   'res://assets/selected_parts_data.json',
    //   FileAccess.ModeFlags.READ_WRITE
    // );
    // saveFile?.store_string(JSON.stringify(selectedPartsData, null, 2));
    // console.log(JSON.stringify(selectedPartsData))
    return this.parts;
  }
}
