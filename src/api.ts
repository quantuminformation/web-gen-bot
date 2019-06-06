import axios, { AxiosResponse } from "axios";

type SiteDefinition = {
  name: string;
  url: string;
};

export class Api {
  loadSites() {
    axios
      .get("./src/resources/news_sites.json")
      .then((response: AxiosResponse<SiteDefinition[]>) => {
        console.log(response.data[0]);
      })
      .catch(err => {});
  }
}
