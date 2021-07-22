import {instance} from '../config';
import { ICars } from '~/interfaces/cars';

export const GetAllProducts = async (): Promise<ICars[]>=> {
 
    const response = await instance.get(`/all`);
    const data = response.data as ICars[];
    return data;
}