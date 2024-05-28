import { updateGround, setupGround } from "./ground.js"
import { updateDino, setupDino, getDinoRect, setDinoLose } from "./dino.js"
import { updateCactus, setupCactus, getCactusRects, waitForImagesToLoad } from "./cactus.js"

waitForImagesToLoad()

let musicPlayed = true; // Prevent music from being played again
const playMusic = () => {
  if (!musicPlayed) {
      backgroundMusic.play().catch(e => console.error("Audio play failed:", e));
  }

};
window.onload = () => {

  let backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.volume = 0.1; // Set volume to 10%
  musicPlayed = false; // Flag to check if music has started

  

  playMusic();
}

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001

const loaderElem = document.querySelector("[data-loader]")
const worldElem = document.querySelector("[data-world]")
const scoreElem = document.querySelector("[data-score]")
const startScreenElem = document.querySelector("[data-start-screen]")
let highscore= 0;

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })
document.addEventListener("touchstart", handleStart, { once: true })

let lastTime
let speedScale
let score
function update(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  updateGround(delta, speedScale)
  updateDino(delta, speedScale)
  updateCactus(delta, speedScale)
  updateSpeedScale(delta)
  updateScore(delta)
  if (checkLose()) return handleLose()

  lastTime = time
  window.requestAnimationFrame(update)
}

function checkLose() {
  const dinoRect = getDinoRect()
  return getCactusRects().some(rect => isCollision(rect, dinoRect))
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  )
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
  score += delta * 0.01
  scoreElem.textContent = Math.floor(score)
}

function handleStart() {
  lastTime = null
  speedScale = 1
  score = 0
  setupGround()
  setupDino()
  setupCactus()
  startScreenElem.classList.add("hide")
  window.requestAnimationFrame(update)
  musicPlayed = false; // Reset musicPlayed to false
  playMusic();
}

function handleLose() {
  setDinoLose()
  setTimeout(() => {
    document.addEventListener("keydown", handleStart, { once: true })
    document.addEventListener("touchstart", handleStart, { once: true })
    startScreenElem.classList.remove("hide")
  }, 100)
  if(score > highscore){
    highscore = score;
    document.querySelector('.highscore-num').textContent = Math.floor(highscore);
  }
}

function setPixelToWorldScale() {
  let worldToPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.minWidth = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.minHeight = `${WORLD_HEIGHT * worldToPixelScale}px`
}
