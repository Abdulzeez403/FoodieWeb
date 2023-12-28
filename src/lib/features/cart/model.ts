export interface ICart {
  _id: string;
  name: string;
  price: string;
  image: IImage[];
}
export interface IImage {
  uri: string;
  type: string;
}

export interface ICart2 {
  _id: any;
  userId: string;
  quantity: number;
}
