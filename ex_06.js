function Car(brand, model, color) {
    this.brand = brand; 
    this.model = model;
    this.color = color;
}
function Agent(name, code, age, car) {
    this.name = name; 
    this.code = code;
    this.age = age;
    this.car = car; 
    this.isMatching = function(key, value) {
        return this.car[key] === value;
    };
}
}
function searchCars(agents, key, value) {
    return agents
        .filter(agent => agent.car && agent.isMatching(key, value))
        .map(agent => agent.car);
}
const agents = [
    new Agent('James Bond', '007', 57, new Car('Aston Martin', 'DB5', 'silver')),
    new Agent('Will Smith', '002', 12, new Car('Tesla', 'S', 'black')),
    new Agent('Tom Cruise', '004', 40, new Car('Ferrari', 'F8', 'red'))
];
const results = searchCars(agents, 'brand', 'Aston Martin');
console.log(results);
