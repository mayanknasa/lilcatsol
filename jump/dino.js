import {
  incrementCustomProperty,
  setCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty.js";

const dinoElem = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0013;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;
let sound = new Audio('imgs/mew.mp3');
export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinoElem, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
  document.removeEventListener("touchstart", onTouch);
  document.addEventListener("touchstart", onTouch);
  // document.addEventListener("touchstart", onTouch);
}


export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

export function getDinoRect() {
  return dinoElem.getBoundingClientRect();
}

export function setDinoLose() {
  dinoElem.src = "profile/lilcat-stationary.png";
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElem.src = "profile/lilcat-stationary.png";
    return;
  }

  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT
    dinoElem.src = `profile/lilcat-${dinoFrame}.png`
    currentFrameTime -= FRAME_TIME
  }
  currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
  if (!isJumping) return;

  incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);

  if (getCustomProperty(dinoElem, "--bottom") <= 0) {
    setCustomProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
}

function onJump(e) {
  if (e.code !== "Space" || isJumping ) return;
sound.play();

  yVelocity = JUMP_SPEED;
  isJumping = true;
}
function onTouch() {
  if (!isJumping) {
    sound.play();
    yVelocity = JUMP_SPEED;
    isJumping = true;
  }

}
