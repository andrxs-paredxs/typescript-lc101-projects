import { Payload } from "./Payload";
import {Cargo} from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name:string;
    totalCapacityKg:number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor( name: string, totalCapacibilityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacibilityKg;
    }

    sumMass (items: Payload[] ): number {
        //Returns the sum of all items using each item's massKg property
        let totalMass = 0;
        items.forEach(item => totalMass += item.massKg);
        return totalMass;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean{

        /*
        Uses this.canAdd() to see if another item can be added.
        If true, adds cargo to this.cargoItems and returns true.
        If false, returns false.
        */

        if( this.canAdd( cargo ) ){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if( this.canAdd( astronaut ) ){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}