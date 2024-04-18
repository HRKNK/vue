import axios from "axios";
import { API_URL } from "@/consts/consts";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

export const instance = axios.create({ baseURL: API_URL, headers });
