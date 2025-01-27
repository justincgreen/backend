// Without Dependency Injection Example
class Engine {
  start() {
    console.log("Engine Started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // Car creates its own Engine;
  }

  start() {
    this.engine.start();
  }
}

const myCar = new Car();
myCar.start();