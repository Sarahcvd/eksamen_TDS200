import axios from "axios";
import { Episodes } from "../types/Episodes";

const getEpisode = async (episodeUrl: string) => {
  try {
    const response = await axios.get<Episodes>(episodeUrl);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

export default { getEpisode };
