import {AxiosInstance} from "../services/instance";

import {ApiRoutes} from "../services/constans";
import {Ingredient} from ".prisma/client";

export const getAll = async ():Promise<Ingredient[]> => {
    return (await AxiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
}
