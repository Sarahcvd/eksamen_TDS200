import axios from "axios";
import { Episodes } from "../types/Episodes";

const getEpisode = async (episodeUrl: string) => {
  try {
    const response = await axios.get(episodeUrl);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw "Feil ved henting av: " + error;
  }
};

export default { getEpisode };

/* import axios from "axios";
import { Component } from "react";

class test extends Component {
  state = {
    characters: [],
    count: 0,
    next: "",
    previous: "",
    page: "characters",
    characterId: 0,
  };

  loadCharacters = (url: string) => {
    axios
      .get(url)
      .then((res) =>
        this.setState({
          characters: res.data.results,
          next: res.data.info.next,
          previous: res.data.info.prev,
          count: res.data.info.count,
        })
      )
      .catch(console.log);
  };

  componentWillMount() {
    this.loadCharacters("character");
  }

  next = (e: any) => {
    e.preventDefault();
    this.loadCharacters(this.state.next);
  };

  previous = (e: any) => {
    e.preventDefault();
    this.loadCharacters(this.state.previous);
  };
}
 */
