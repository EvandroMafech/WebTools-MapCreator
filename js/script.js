import {positionAdjust, troopsSpriteCoordinates } from "./AnimateInfo.js";
import AnimatedImage from "./AnimatedImage.js";
import Tile from "./Tile.js";

const canvas = document.querySelector(".tileset")
const ctx = canvas.getContext("2d")
const animationCanvas = document.querySelector(".animations")
const ctxAnimations = animationCanvas.getContext("2d")
const button = document.querySelectorAll(".dropdown")

canvas.width = 1500
canvas.height = 800

animationCanvas.width = 1500
animationCanvas.height = 800

ctx.imageSmoothingEnabled = false
ctxAnimations.imageSmoothingEnabled = false

let staticImageActive = false
let animatedImageActive = false
const tilesWithImages = []
const tileArray = []
const animatedImagesArray = []
const allSetIdsArray = []
const tileSize = 64
const lines = 12
const columns = 23
let activeImage = " "
let activeImageId = " "
let activeAnimationId = " "
const staggerFrames = 6
let frames = 4
const AnimatedImagesIds = ["s5", "r5", "r6", "d18", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "g1", "g2", "g3", "r3", "r4","s1","s2","s3","s4","d16","d17","d18","r1","r2"]

export {staggerFrames,frames}



function createTileId(event){
    const rect = canvas.getBoundingClientRect();
    const {clientX , clientY} = event
    const positionX = clientX - rect.left
    const positionY = clientY - rect.top
    const id = `l${Math.floor(positionX/tileSize)}` + `c${Math.floor(positionY/tileSize)}`
    return id
}


function createGrid(){
       
    for(let c = 0; c < lines; c++){
        for(let l = 0; l <columns ; l++){
            let x = tileSize*l
            let y = tileSize*c
            let id = `l${x/tileSize}` + `c${y/tileSize}`
            const tile = new Tile(x,y,tileSize,tileSize,ctx,id)
            tileArray.push(tile)

        }
    }
}

function createImage(selectedImageUrl){
    const image = new Image()
    image.src = selectedImageUrl
    activeImage = image
}

function setStaticImage(TileId){

    tileArray.forEach(tile => {
    
       if(tile.id == TileId){
       tile.activeImage = activeImage
       tile.image(activeImageId)
       allSetIdsArray.push(activeImageId)
       
    }
    })
}

function drawBaseTiles(){
    tileArray.forEach(tile => tile.draw())
}

function createAnimatedImage(TileId){
    const {w, line, h, image, frames, id} = troopsSpriteCoordinates[activeAnimationId].location[0]
    let adjustX 
    let adjustY 
    tileArray.forEach(tile => {
         if(tile.id == TileId){
            
            if(positionAdjust[id] == undefined)
                {
                     adjustX = 0
                     adjustY = 64*((w)/64 -1)
                }else{
                const {x: x, y: y} = positionAdjust[id]
                adjustX = x
                adjustY = y
                }

            const x = tile.x
            const y = tile.y
            const sheetImage = new Image
            sheetImage.src = image
            const animatedImage = new AnimatedImage(sheetImage,x - adjustX,y - adjustY,activeAnimationId,frames,line,w,h,ctxAnimations)
            animatedImagesArray.push(animatedImage)
            allSetIdsArray.push(activeAnimationId)

        }
     })
    
}

function animationLoop(){
      
    ctxAnimations.clearRect(0,0, canvas.width,canvas.height)

    animatedImagesArray.forEach(image => {image.animate()})
     
    frames++
    window.requestAnimationFrame(animationLoop)
}

function undoImages(event){
    const key = event.key.toLowerCase() 

    if(event.ctrlKey && key == "z"){

       let LastTileId = tilesWithImages.pop()
       let LastImageId = allSetIdsArray.pop()
     
       tileArray.forEach(tile => {
     
        if(tile.id == LastTileId){

            if(AnimatedImagesIds.includes(LastImageId)){

               animatedImagesArray.pop()

            }else{   
           
                const image = new Image()
                image.src = "../assets/Water.png"
                tile.activeImage = image
                tile.image(LastTileId)
                tile.activeImage = " "
           
            }
            }
         })

        
    }
}

function manageImages(event){

    const TileId = createTileId(event)    
    tilesWithImages.push(TileId)
 
    if(staticImageActive){
        
        setStaticImage(TileId)
      
    }else if(animatedImageActive){
           
            createAnimatedImage(TileId)
       }
}

createGrid()
drawBaseTiles()
animationLoop()


canvas.addEventListener("mousedown", (event) => {manageImages(event)})

animationCanvas.addEventListener("mousedown", (event) => {manageImages(event)})

window.addEventListener("keydown", (event) => {undoImages(event)})

button.forEach(element => {

    element.addEventListener("click", (event) => {
        const selectedImageStyle = window.getComputedStyle(event.target);
        const selectedImageUrl = './' + selectedImageStyle.backgroundImage.slice(27, -2)

        console.log(selectedImageUrl)
        activeImageId = event.target.id
              
        if(troopsSpriteCoordinates[activeImageId] == undefined){
            createImage(selectedImageUrl)
            staticImageActive = true
            animatedImageActive = false
        }else{ 
            activeAnimationId = event.target.id
            animatedImageActive = true
            staticImageActive = false
        }
   })

})



