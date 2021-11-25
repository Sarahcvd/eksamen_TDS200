import axios from "axios";
import { Character } from "../types/Character";
import { Episodes } from "../types/Episodes";
import { Location } from "../types/Location";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const getCharacter = async (characterId: number) => {
  try {
    const response = await axios.get<Character>(`character/${characterId}`);
    if (characterId === 4) throw "";
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getLocation = async (locationId: number) => {
  try {
    const response = await axios.get<Location>(`location/${locationId}`);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getEpisode = async (episodeId: number) => {
  try {
    const response = await axios.get<Episodes>(`episode/${episodeId}`);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

export default { getCharacter, getLocation, getEpisode };
