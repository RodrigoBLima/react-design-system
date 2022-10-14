import axios from "axios";

export default async (params: { email: string; password: string }) => {
  await axios.post("auth", params);
};
