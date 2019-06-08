import axios, { AxiosResponse } from "axios";

type SiteDefinition = {
  name: string;
  url: string;
};

export class Api {
  sites: SiteDefinition[] = null;
  htmlExamples: string[] = null;
  loadExamples() {
    axios
      .get("http://localhost:3000/getExampleContents")
      .then((response: AxiosResponse) => {
        this.htmlExamples = response.data;
      })
      .catch(err => {});
  }
  loadSites() {
    axios
      .get("./src/resources/news_sites.json")
      .then((response: AxiosResponse<SiteDefinition[]>) => {
        this.sites = response.data;

        (document.querySelector(
          "#theFrame"
        ) as HTMLIFrameElement).src = this.sites[0].url;
        /*        axios
          .get(this.sites[0].url)
          .then(response => {
            if (response.status === 200) {
              console.log(response.data);
            }
          })
          .catch(err => {
            throw new Error(err);
          })*/

        /*        this.sites.forEach(site => {
          axios
            .get(site.url)
            .then(response => {
              if (response.status === 200) {
                console.log(response.data);
              }
            })
            .catch(err => {
              throw new Error(err);
            });
        })*/
      })
      .catch(err => {});
  }
}
