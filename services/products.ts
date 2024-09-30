import {AxiosInstance} from "../services/instance";
import {Product} from ".prisma/client";
import {ApiRoutes} from "../services/constans";

export const search = async (query: string):Promise<Product[]> => {
    return (await AxiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {params: {query}})).data;
}
