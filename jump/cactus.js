import {
  setCustomProperty,
  incrementCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty.js"

const SPEED = 0.05
const CACTUS_INTERVAL_MIN = 1000
const CACTUS_INTERVAL_MAX = 2000
const worldElem = document.querySelector("[data-world]")

const FOOD_IMAGES = [
  "imgs/food-1.png",
  "imgs/food-2.png",
  "imgs/food-3.png",
  "imgs/food-4.png",
  "imgs/food-5.png",
  "imgs/food-6.png",
  "imgs/food-7.png",
  "imgs/food-8.png",
  "imgs/food-9.png", 
  "imgs/food-10.png", 
  "imgs/food-11.png",
  "imgs/food-12.png",
  "imgs/food-13.png",
  "imgs/food-14.png",
  "imgs/food-15.png",
  "imgs/food-16.png",
  "imgs/food-17.png",

  // Add more cactus image paths as needed
];  


const loaderElem = document.querySelector("[data-loader]")
let loadedImages = 0;
const imagesElem = document.querySelector("[data-images]")

function imageLoaded() {
  loadedImages++;
  if (loadedImages === FOOD_IMAGES.length) {
    loaderElem.style.display = "none";
    worldElem.style.display = "block";
    imagesElem.remove()
  }
}

export function waitForImagesToLoad(){
  FOOD_IMAGES.forEach(imageName => {
    const img = new Image();
    img.onload = imageLoaded;
    img.src = imageName;
    imagesElem.appendChild(img); // Add images to the content (hidden initially)
  });
}


let nextCactusTime
export function setupCactus() {
  nextCactusTime = CACTUS_INTERVAL_MIN
  document.querySelectorAll("[data-cactus]").forEach(cactus => {
    cactus.remove()
  })
}

export function updateCactus(delta, speedScale) {
  document.querySelectorAll("[data-cactus]").forEach(cactus => {
    incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1)
    if (getCustomProperty(cactus, "--left") <= -100) {
      cactus.remove()
    }
  })

  if (nextCactusTime <= 0) {
    createCactus()
    nextCactusTime =
      randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) / speedScale
  }
  nextCactusTime -= delta
}

export function getCactusRects() {
  return [...document.querySelectorAll("[data-cactus]")].map(cactus => {
    return cactus.getBoundingClientRect()
  })
}

function createCactus() {
  const cactus = document.createElement("img")
  cactus.dataset.cactus = true
  // cactus.src = "imgs/cactus.png"
  cactus.src = getRandomFoodImage(); // Select a random cactus image path
  cactus.classList.add("cactus")
  setCustomProperty(cactus, "--left", 100)
  worldElem.append(cactus)
}
function getRandomFoodImage() {
  const randomIndex = Math.floor(Math.random() * FOOD_IMAGES.length);
  return FOOD_IMAGES[randomIndex];
}
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}





/* 
const CACTUS_IMAGES = [
  "imgs/cactus1.png",
  "imgs/cactus2.png",
  // Add more cactus image paths as needed
];

function createCactus() {
  const cactus = document.createElement("img");
  cactus.dataset.cactus = true;
  cactus.src = getRandomCactusImage(); // Select a random cactus image path
  cactus.classList.add("cactus");
  setCustomProperty(cactus, "--left", 100);
  worldElem.append(cactus);
}

function getRandomCactusImage() {
  const randomIndex = Math.floor(Math.random() * CACTUS_IMAGES.length);
  return CACTUS_IMAGES[randomIndex];
}


*/
