import IRestRepository from "./models/RestRepository";

class RestRepository<T extends Response> implements IRestRepository<T> {
  constructor(public url: string) {}

  getAll() {
    return fetch(`${this.url}robots`)
      .then((response) => response.json())
      .catch((error) => error);
  }
}

export default RestRepository;
/* getAll() {
    let robots: Promise<Array<T>>
    (async () => {
      const response = await fetch(`${this.url}robots`);
      robots = await response.json();
    })();
    return { robots };
  } */
