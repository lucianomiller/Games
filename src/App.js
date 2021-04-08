import "./styles.css";

import { useEffect, useState, Link } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import { useHistory, useParams } from "react-router-dom";
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

  let history = useHistory();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        //console.error(error);
      });
  }, []);
  const [searchVal, setSearchVal] = useState("");

  const search = (e) => {
    e.preventDefault();
    //console.log(searchVal);
    axios
      .get(`https://api.rawg.io/api/games?search=${searchVal}`)

      .then(function (response) {
        setData(response.data.results);

        //console.log(response.data);
      })
      .then(() => history.push("/"))
      .then(() => setSearchVal(""));
  };
  return (
    <>
      <Switch>
        <div className="">
          <Route path="/">
            <div>
              <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
                <div class="container-fluid">
                  <a href="/" class="navbar-brand">
                    Games
                  </a>
                  <form class="d-flex" onSubmit={search}>
                    <input
                      onChange={(e) => setSearchVal(e.target.value)}
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchVal}
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </Route>
          <Route exact path="/">
            <div className=" page-content App">
              {data &&
                data.map((arr) => {
                  return (
                    <Card
                      name={arr.name}
                      background_image={arr.background_image}
                      released={arr.released}
                      id={arr.id}
                    />
                  );
                })}
            </div>
          </Route>

          <Route path="/:id" children={<Details />} />
        </div>
      </Switch>
    </>
  );
}

import "./main.css";
function Details() {
  const [data, setData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${id}`)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        //console.error(error);
      });
  }, []);

  return (
    <section
      className="u-clearfix u-palette-5-base u-valign-middle u-section-1"
      id="carousel_3eaf"
      style={{ height: "100%" }}
    >
      <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-left-cell u-size-28-xl u-size-32-lg u-size-32-md u-size-32-sm u-size-32-xs u-white u-layout-cell-1">
              <div className="u-container-layout u-valign-middle u-container-layout-1">
                <h1 className="u-text u-text-1">
                  {data.name}
                  <span style={{ fontWeight: "700px" }}></span>
                  <br />
                </h1>
                <p className="u-text u-text-2" style={{ fontWeight: "700px" }}>
                  {data.description_raw}
                  <a
                    href="https://nicepage.com/c/industrial-website-templates"
                    className="u-active-none u-border-1 u-border-black u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
                  ></a>
                </p>
                <span className="u-icon u-icon-circle u-text-black u-icon-1">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                  >
                    {/* <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-6507">
                    </use> */}
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 512 512"
                    x="0px"
                    y="0px"
                    id="svg-6507"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    "></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div
              className="u-container-style u-image u-layout-cell u-right-cell u-size-28-lg u-size-28-md u-size-28-sm u-size-28-xs u-size-32-xl u-image-1"
              style={{
                backgroundImage: `url(${data.background_image})`
              }}
            >
              <div className="u-container-layout u-container-layout-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
