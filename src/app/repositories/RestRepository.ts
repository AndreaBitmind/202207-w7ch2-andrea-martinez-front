import IRestRepository from "./models/RestRepository";

class RestRepository<T extends Response> implements IRestRepository<T> {
  constructor(public url: string) {}

  getAll() {
    return fetch(this.url, { mode: "cors" })
      .then((response) => response.json())
      .catch((error) => error);
  }
}

export default RestRepository;
