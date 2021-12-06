import axios from "axios";
import { AllCharacters } from "../types/AllCharacters";
import { AllLocations } from "../types/AllLocations";
import { Character } from "../types/Character";
import { Episodes } from "../types/Episodes";
import { Location } from "../types/Location";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const getAllCharacters = async () => {
  try {
    const response = await axios.get<AllCharacters>(`character/`);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getCharacter = async (characterId: number) => {
  try {
    const response = await axios.get<Character>(`character/${characterId}`);
    if (characterId === 4) throw "";
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getAllLocations = async () => {
  try {
    const response = await axios.get<AllLocations>("location/");
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

const getEpisode = async (episodeUrl: string) => {
  try {
    const response = await axios.get<Episodes>(episodeUrl);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

export default {
  getCharacter,
  getLocation,
  getEpisode,
  getAllCharacters,
  getAllLocations,
};
