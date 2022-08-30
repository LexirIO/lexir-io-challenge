import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(process.env.NEXT_PUBLIC_API_URL + url, {
      withCredentials: true,
    })
    .then((res) => res.data);

export default fetcher;
