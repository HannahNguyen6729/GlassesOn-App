export class GlassesList {
  constructor() {
    this.gList = [];
  }
  addGlasses(glasses) {
    this.gList.push(glasses);
  }
  renderGlassesList() {
    let content = this.gList.reduce((total, currentObject, index, arr) => {
      total += `
            <div class= "col-4" id="imag">
                <img class = "img-fluid" src= "${currentObject.src}" onclick = "tryOnGlasses(event)" data-img = "${currentObject.virtualImg}" data-index="${currentObject.id}">
            </div>
        `;
      return total;
    }, "");
    return content;
  }
}
