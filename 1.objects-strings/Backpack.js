// Creating class
/*
    Class Declaration:  Class Name {}
    Class Expression :  const Name = class {}
*/
class BackPack {
    // Defining class constructor
    constructor(
        // Defining constructor parameters:
        name,
        volume,
        color,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquire
    ) {
        // Defining properties:
        this.name       = name;
        this.volume     = volume;
        this.color      = color;
        this.strapLength= {
            left : strapLengthL,
            right: strapLengthR

        },
        this.lidOpen    = lidOpen;
        this.dateAcquire= dateAcquire;
    }
    
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft, lengthRight){
        this.strapLength.left   = lengthLeft;
        this.strapLength.right  = lengthRight;
    }

    backpackAge(){
        let now         = new Date();
        let acquired    = new Date(this.dateAcquire);
        let elapsed     = now - acquired; // elapsed time in milliseconds
                        // First    we divide   by 1000 to convert milliseconds into seconds 
                        // Then     we divide   by 3600 to convert seconds      into hours
                        // Then     we divide   by 24   to convert hours        into days
        let age         = Math.floor(elapsed/( 1000 * 3600 * 24)); 

        return age;
    }

}

export default BackPack;