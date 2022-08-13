export interface RestRepository<T extends Response> {
  getAll: () => Promise<Array<T>>;
}
