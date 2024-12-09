import { frames, staggerFrames } from "./script.js"

class AnimatedImage{
    constructor(image,x,y,name,frames,line,w,h,canvas){
        this.x = x
        this.y = y
        this.name = name
        this.spriteFrames = frames
        this.line = line
        this.width = w
        this.height = h
        this.image = image
        this.ctxAnimations = canvas
    }
    
    animate(){
        
        const ctxAnimations = this.ctxAnimations
        const image = this.image

        let position = Math.floor(frames/staggerFrames)%this.spriteFrames
        let frameX = position*this.width
        let frameY = this.line*this.height
    
        ctxAnimations.drawImage(image,frameX,frameY, this.width,this.height, this.x, this.y, this.width, this.height) //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

}

export default AnimatedImage