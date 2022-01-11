class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Ninja's name is " + this.name)
        return this;
    }
    showStats(){
        console.log("Ninja's name is " + this.name)
        console.log("Ninja's strength is " + this.strength)
        console.log("Ninja's speed is " + this.speed)
        console.log("Ninja's health is " + this.health)
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(this.name + "'s health is " + this.health)
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();