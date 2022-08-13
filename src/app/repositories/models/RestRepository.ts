interface IRestRepository<T extends Response> {
  getAll: () => Promise<Array<T>>;
}

export default IRestRepository;
