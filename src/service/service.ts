import axios from "axios";
import { apiDTO } from "../DTO";

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});

export async function getApi() {
  try {
    const result2 = await api.get("/launches");
    const result: apiDTO[] = result2.data;
    return result;
  } catch (error) {
    console.log(error);
  }
  // const result : apiDTO[] = await api.get("/launches");
  // return result;
}
