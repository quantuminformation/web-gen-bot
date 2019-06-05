import axios from "axios";
export class Api {
  loadSites() {
    axios
      .get("resources.json")
      .then((response: object) => {
        console.log(response);
      })
      .catch(err => {});
  }
}
