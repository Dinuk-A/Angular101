export class wishItem {

    //constructor is a TS feature,this will auto create properties for this class
     //false is isDone's default value
    constructor(public wishText: string, public isDone: boolean = false) {

    }
   

}

// this class then will be imported in app.ts