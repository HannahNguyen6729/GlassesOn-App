/*
step 1: show glasses List on UI 
 calss Glasses
class GlassesList
step 2: function tryOnGlasses
step 3: function removeGlasses
*/

let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";
let glassesList = new GlassesList();

const getEle = (id) => {
  let element = document.getElementById(id);
  return element;
};

const showGlasses = () => {
  dataGlasses.map((object, index, array) => {
    //create a new object
    let newGlasses = new Glasses(
      object.id,
      object.src,
      object.virtualImg,
      object.brand,
      object.name,
      object.color,
      object.price,
      object.description
    );
    glassesList.addGlasses(newGlasses);
  });
  let glassesRow = getEle("vglassesList");
  glassesRow.innerHTML = glassesList.renderGlassesList();
};
showGlasses();

const tryOnGlasses = (e) => {
  //console.log(e); pointer event
  let avatar = getEle("avatar");
  let infor = getEle("glassesInfo");
  let avaImage = e.target.getAttribute("data-img");

  // let m = e.target.virtualImg; result: undefined due to not identify which object
  //let m= e.target;  reesult:  IMG tag which is created by `<img>`
  avatar.innerHTML = `
          <div>
          <img src="${avaImage}"  id="glassesImg">
          </div>
          `;
  let dataIndex = e.target.getAttribute("data-index");
  let object = {};
  for (let value of glassesList.gList) {
    if (value.id == dataIndex) {
      object = value;
    }
  }
  infor.innerHTML = `
          <div>
            <p class="card-text text-success">${object.name} - ${object.brand} - ${object.color}</p>
            <p class="btn btn-danger"> $ ${object.price}</p>
            <p>${object.description}</p>
          </div>
  `;
  infor.style.display = "block";
};
window.tryOnGlasses = tryOnGlasses;

const removeGlasses = (flag) => {
  let glassesImg = getEle("glassesImg");
  if (flag) {
    glassesImg.style.display = "block";
  } else {
    glassesImg.style.display = "none";
  }
};
//removeGlasses(flag);
window.removeGlasses = removeGlasses;
