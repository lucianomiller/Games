import "./styles.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const options = {
  method: "GET",
  url:
    "https://rawg-video-games-database.p.rapidapi.com/games?key=ebe7b974bc3d419088c69b3e8d7bb200",
  headers: {
    "x-rapidapi-key": "6e54472f72msh08b9457788389c1p1037bfjsn68d4058a1dd6",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  }
};

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
        //console.log(response.data);
      })
      .catch(function (error) {
        //console.error(error);
      });
  }, []);
  const [searchVal, setSearchVal] = useState("");
  const search = (e) => {
    e.preventDefault();
    console.log(searchVal);
    axios
      .get(`https://api.rawg.io/api/games?search=${searchVal}`)

      .then(function (response) {
        setData(response.data.results);
        //console.log(response.data);
      });
  };
  return (
    <div className="">
      <div>
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">Games</a>
            <form class="d-flex" onSubmit={search}>
              <input
                onChange={(e) => setSearchVal(e.target.value)}
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <div className=" page-content App">
        {data &&
          data.map((arr) => {
            return (
              <Card name={arr.name} background_image={arr.background_image} />
            );
          })}
      </div>
    </div>
  );
}
