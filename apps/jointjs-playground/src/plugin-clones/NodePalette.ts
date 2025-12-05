export class NodePalette {
  static isActive = false;
  static instance: NodePalette | null;
  parent: HTMLBodyElement = document.body as HTMLBodyElement;
  constructor() {
    this.initializeUi();
    this.loadPaletteData();
    this.initializeJointJsComponents();
  }
  initializeUi() {
    throw new Error("Method not implemented.");
  }
  loadPaletteData() {
    throw new Error("Method not implemented.");
  }
  initializeJointJsComponents() {
    throw new Error("Method not implemented.");
  }

  static activate() {
    if (this.isActive) return;
    NodePalette.instance = new NodePalette();
    this.isActive = true;
  }
}
