import axios, { AxiosPromise } from "axios";

export const getPaginateData = async (offset: number): Promise<AxiosPromise> =>
axios.get(`https://api.spacexdata.com/v3/launches/?limit=${8}&offset=${offset}`);
