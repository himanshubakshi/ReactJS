class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
    }

    drive(miles){
        console.log(`Driving ${this.model} at ${miles} per hour`);
    }
}


var merc = new Car('Mercedes', 'White')
merc.drive(20)
merc.drive()
