import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://the-lazy-media-api.vercel.app/' })
  })
  export default useAxios