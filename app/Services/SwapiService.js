import { ProxyState } from "../AppState.js";
import { Person } from "../Models/Person.js";


class SwapiService{
  async getPeople() {
    // @ts-ignore
    // SECTION new part
    const response = await axios.get('https://swapi.dev/api/people/')
    // NOTE LOG THE RES!! always check where the data you want is ALWAYS.
    console.log('response data',response.data);
    // NOTE casting array of plain objects into classed person objects
    let people = response.data.results.map(p => new Person(p))
    // ------------
    // SECTION exactly the same as last week
    ProxyState.people = people
  }
  async getStarShips() {
    // @ts-ignore
    const res = await axios.get('https://swapi.dev/api/starships/')
    console.log('get starships', res.data);
    ProxyState.starShips = res.data.results
  }

}

export const swapiService = new SwapiService()