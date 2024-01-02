export interface ISingelOrder {
  _id: string;
  description: string;
  price: string;
  images: Images[];
  name: string;
  quantity: string;
  totalAmount: number;
  status: string;
  created: string;
}

export interface Images {
  type: string;
  name: string;
  uri: string;
}

export interface ICart {}
