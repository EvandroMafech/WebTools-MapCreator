import { positionAdjust } from "./AnimateInfo.js"

class Tile{
    constructor(x,y,height,width,ctx,id){
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.ctx = ctx
        this.id = id
        this.color = "#47aba9"
        this.activeImage = " "
    }

        image(id){
            const image = this.activeImage
            const ctx = this.ctx
            let adjustX
            let adjustY
        
            if(positionAdjust[id] == undefined)
            {
                 adjustX = 0
                 adjustY = 64*((image.height)/64 -1)
            }else{
            const {x: x, y: y} = positionAdjust[id]
            adjustX = x
            adjustY = y
            }
           
            if(image != " "){
                ctx.drawImage(image,this.x-adjustX,this.y-adjustY,image.width,image.height )
            }
            
        }

        draw(){
           const ctx = this.ctx
           const color = this.color
           if(this.activeImage == " "){
           ctx.fillStyle = color
           ctx.fillRect(this.x,this.y,this.height,this.width) // (x, y, largura, altura)
           ctx.strokeStyle = "#4da1a0"
           ctx.strokeRect(this.x,this.y,this.height,this.width) // (x, y, largura, altura)
           }
        }
}

export default Tile