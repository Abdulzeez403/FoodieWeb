export interface ICart {
  _id: string;
  name: string;
  price: string;
  images: IImage[];
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
