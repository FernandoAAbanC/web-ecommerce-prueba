

export interface ICars {
  _id: string;
  name: string;
  maker: string;
  car_type: string;
  price_mxn: number;
  price_usd: number;
  description_es: string;
  description_en:string;
  models: string[];
  cantidad?:number;
  modeloSelect?:string;
}

