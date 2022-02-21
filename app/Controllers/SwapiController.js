import { ProxyState } from "../AppState.js";
import { swapiService } from "../Services/swapiService.js";
import { Pop } from "../Utils/Pop.js";


function _drawPeople(){
  let template = ''
  ProxyState.people.forEach(p => template += `<li>${p.name}</li>`)
  document.getElementById('people').innerHTML = template
}

function _drawStarShips(){
  console.log('drawing starships');
  let template = ''
  ProxyState.starShips.forEach(s => template += `<li>${s.name}</li>`)
  document.getElementById('starShips').innerHTML = template
}


export class SwapiController{
  constructor(){
    console.log("swapi controller loaded");
    ProxyState.on('people', _drawPeople)
    ProxyState.on('starShips', _drawStarShips)
    // NOTE These just call it on loading of the controller (on creation)
    this.getPeople()
    this.getStarShips()
  }

// NOTE ALL controller methods should include a try catch now
// Don't forget async and await!
  async getPeople(){
    try {
      console.log('started get people')
      await swapiService.getPeople()
      console.log('finished getting people')
    } catch (error) {
      console.log('MIck there are not RCTs left')
      console.error(error)
      Pop.toast(error.message, 'error')
      
    }
  }

  async getStarShips(){
    try {
      await swapiService.getStarShips()
    } catch (error) {
      // NOTE your catches should always have these to things BARE MINIMUM
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}