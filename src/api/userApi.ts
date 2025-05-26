import axios from "axios";
import { API_KEY, API_URL } from "../configs/config";

export function getRandomUser() {
  return axios.get(API_URL, { headers: { "X-Api-Key": API_KEY } });
}