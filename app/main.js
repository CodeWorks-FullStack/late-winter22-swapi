import { SwapiController } from "./Controllers/SwapiController.js";

class App {

  swapiController = new SwapiController()
}

window["app"] = new App();
