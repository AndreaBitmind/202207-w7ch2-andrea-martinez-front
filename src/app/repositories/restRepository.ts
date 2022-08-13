import { RestRepository } from "./models/RestRepository";

export class restRepository<T extends Response> implements RestRepository<T> {
  constructor(public url: string) {}

  getAll() {
    return fetch(this.url)
      .then((response) => response.json())
      .catch((error) => error);
  }
}
