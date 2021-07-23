import {ICars} from "./cars"
export type Tcurrency = "mx" | "us";
export interface IInitialState {
cart: ICars[];
cartcount:number;
currency:Tcurrency;
}