const troopsSpriteCoordinates = []

const positionAdjust = {
    s5: { x: 96, y: 128  },
    r5: { x: 64, y: 128  },
    r6: { x: 64, y: 128  },
    d18:{ x: 64, y: 120  },
    k1: { x: 64, y: 64 },
    k2: { x: 64, y: 64 },
    k3: { x: 64, y: 64 },
    k4: { x: 64, y: 64 },
    k5: { x: 64, y: 64 },
    k6: { x: 64, y: 64 },
    k7: { x: 64, y: 64 },
    k8: { x: 64, y: 64 },
    g1: { x: 64, y: 64 },
    g2: { x: 64, y: 64 },
    g3: { x: 64, y: 64 },
    r3: { x: 32, y: 32 },
    r4: { x: 32, y: 32 },
    s1: { x: 128, y: 192 },
    s2: { x: 32, y: 128 },
    s3: { x: 32, y: 160 },
    s4: { x: 32, y: 128 },
    d16: { x: 0, y: 64 },
    d17: { x: 0, y: 64 },
    r1: { x: 64, y: 64 },
    r2: { x: 64, y: 64 },
    d18: { x: 64, y: 128 }

}


const ImagesInfo = [

    {
        name: "s5", //tower
        frames: 4,
        line: 0,
        width: 256,
        height: 192,
        image: "../assets/images/factions/goblins/Buildings/Wood_Tower/Wood_Tower_Red.png"
    },
    {

        name: "k1", //arquer idle
        frames: 6,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Archer/Blue/Archer_Blue.png"
    },
    {

        name: "k3", //bulding paw
        frames: 6,
        line: 2,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Pawn/Blue/Pawn_Blue.png"

    },
    {

        name: "k4", //chop
        frames: 6,
        line: 3,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Pawn/Blue/Pawn_Blue.png"
    },
    {

        name: "k5", //paw idle
        frames: 6,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Pawn/Blue/Pawn_Blue.png"
    },
    {

        name: "k2", //arquer shoot
        frames: 8,
        line: 4,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Archer/Blue/Archer_Blue.png"
    },
    {

        name: "k7", //atk1 knight
        frames: 6,
        line: 3,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Warrior/Blue/Warrior_Blue.png"
    },
    {

        name: "k6", //atk2 knight
        frames: 6,
        line: 2,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Warrior/Blue/Warrior_Blue.png"
    },
    {

        name: "k8", //knight idle
        frames: 6,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/factions/knights/Troops/Warrior/Blue/Warrior_Blue.png"
    },
    {

        name: "g1", //bomber
        frames: 6,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/factions/goblins/Troops/TNT/Red/TNT_Red.png"
    },
    {

        name: "g2", //fire attack
        frames: 6,
        line: 2,
        width: 192,
        height: 192,
        image: "../assets/images/factions/goblins/Troops/Torch/Red/Torch_Red.png"
    },
    {

        name: "g3", //fire idle
        frames: 7,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/factions/goblins/Troops/Torch/Red/Torch_Red.png"        
    },
    {

        name: "r6", //tree
        frames: 4,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/resources/Trees/Tree.png"
    },
    {

        name: "r3", //sheep
        frames: 8,
        line: 0,
        width: 128,
        height: 128,
        image: "../assets/images/resources/Sheep/HappySheep_Idle.png"
    },
    {
        name: "r4", //sheep jump
        frames: 6,
        line: 0,
        width: 128,
        height: 128,
        image: "../assets/images/resources/Sheep/HappySheep_Bouncing.png"
    },
    {
        name: "s1", 
        frames: 1,
        line: 0,
        width: 320,
        height: 256,
        image: "../assets/images/factions/knights/Buildings/Castle/Castle_Blue.png"
    },
    {
        name: "s2", 
        frames: 1,
        line: 0,
        width: 128,
        height: 192,
        image: "../assets/images/factions/knights/Buildings/House/House_Blue.png"
    },
    {
        name: "s3", 
        frames: 1,
        line: 0,
        width: 128,
        height: 256,
        image: "../assets/images/factions/knights/Buildings/Tower/Tower_Blue.png"
    },
    {
        name: "s4", 
        frames: 1,
        line: 0,
        width: 128,
        height: 192,
        image: "../assets/images/factions/goblins/Buildings/Wood_House/Goblin_House.png"
    },
    {
        name: "d16", 
        frames: 1,
        line: 0,
        width: 64,
        height: 128,
        image: "../assets/images/decorations/16.png"
    },
    {
        name: "d17", 
        frames: 1,
        line: 0,
        width: 64,
        height: 128,
        image: "../assets/images/decorations/17.png"
    },
    {
        name: "d18", 
        frames: 1,
        line: 0,
        width: 192,
        height: 192,
        image: "../assets/images/decorations/18.png"
    },
    {
        name: "r1", 
        frames: 1,
        line: 0,
        width: 192,
        height: 128,
        image: "../assets/images/resources/GoldMine/GoldMine_Active.png"
    },
    {
        name: "r2", 
        frames: 1,
        line: 0,
        width: 192,
        height: 128,
        image: "../assets/images/resources/GoldMine/GoldMine_Inactive.png"
    }
]


ImagesInfo.forEach((content,index) => {
    
    const {width,height,line,image, frames: nFrames,name} = ImagesInfo[index]
    let frames = {
        location: []
    }
    for(let i = 0; i < ImagesInfo[index].frames; i++)
    {
        let positionX = i*width
        let positionY = line*height
        frames.location.push({
            x: positionX, 
            y: positionY, 
            w: width, 
            h: height, 
            line: line,
            id: name,
            frames: nFrames,
            image: image})
    }
    troopsSpriteCoordinates[content.name] = frames
})

//console.log(troopsSpriteCoordinates)
export {troopsSpriteCoordinates,positionAdjust}