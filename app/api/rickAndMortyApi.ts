import axios from "axios";
import { AllLocations } from "../types/AllLocations";
import { Character } from "../types/Character";
import { Episodes } from "../types/Episodes";
import { Location } from "../types/Location";

const baseURL = "https://rickandmortyapi.com/api/";

const getAllCharacters = async () => {
  let numberArray = [];
  for (let i = 1; i < 827; i++) {
    numberArray.push(i);
  }
  try {
    const response = await axios.get<Character>(
      `https://rickandmortyapi.com/api/character/${numberArray}`
    );
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

/* const filterSearch: (text: string) => void = async (text: string) => {
  try {
    const response = await axios.get<Character>(
      `https://rickandmortyapi.com/api/character/?name=${text.toLocaleLowerCase()}`
    );
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
}; */

const getCharacter = async (characterId: number) => {
  try {
    const response = await axios.get<Character>(
      `${baseURL}character/${characterId}`
    );
    if (characterId === 4) throw "";
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getAllLocations = async () => {
  try {
    const response = await axios.get<AllLocations>(`${baseURL}location/`);
    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

const getLocation = async (locationId: number) => {
  try {
    const response = await axios.get<Location>(
      `${baseURL}location/${locationId}`
    );
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
const getResidents = async (residentUrl: string) => {
  try {
    const response = await axios.get<Character>(residentUrl);
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
  getResidents,
  //filterCharacters: filterSearch,
};
