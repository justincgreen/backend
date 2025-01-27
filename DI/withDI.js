// With Dependency Injection Example
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(engine) { // Engine is injected from outside
    this.engine = engine;
  }

  start() {
    this.engine.start();
  }
}

const engine = new Engine();
const myCar = new Car(engine); // Injecting Engine into Car as a dependency 
myCar.start();