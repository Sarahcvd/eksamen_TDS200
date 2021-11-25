import axios from "axios";
import { Character } from "../types/Character";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const getCharacter = async (characterId: number) => {
  try {
    const response = await axios.get<Character>(`character/${characterId}`);
    return response.data;
  } catch (error) {
    console.log("Feil ved henting av: " + error);
  }
};

const getLocation = async (locationId: number) => {
  try {
    const response = await axios.get(`location/${locationId}`);
    return response.data;
  } catch (error) {
    console.log("Feil ved henting av: " + error);
  }
};

const getEpisode = async (episodeId: number) => {
  try {
    const response = await axios.get(`episode/${episodeId}`);
    return response.data;
  } catch (error) {
    console.log("Feil ved henting av: " + error);
  }
};

export default { getCharacter, getLocation, getEpisode };
