import * as tf from "@tensorflow/tfjs";
import { Api } from "./api";

class App {
  htmlExamples: string[];
  api = new Api();

  constructor() {
    this.init();
  }
  async init() {
    this.htmlExamples = await this.api.loadExamples();
  }
}

const app = new App();
