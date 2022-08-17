export interface ProtoUser {
  userName: string;
  password: string;
  image?: string;
}

export interface User {
  id: string;
  token: string;
  userName: string;
  image?: string;
}
