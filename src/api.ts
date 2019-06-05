import axios from "axios";
export class Api {
  loadSites() {
    axios
      .get("./resources/news_sites.json")
      .then((response: object) => {
        console.log(response);
      })
      .catch(err => {});
  }
}
