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
    <div class="is-preload">
      <header id="header">
        <img src={data.background_image} alt="" />
        <h1>
          <strong>{data.name}</strong> <br />
          <br />
          <a href={data.website}>Oficial Page</a>.
        </h1>
        {/* <div class="inner">
      <a href="#" class="image avatar"><img src={data.background_image} alt="" /></a>
      <h1><strong>I am Strata</strong>, a super simple<br />
      responsive site template freebie<br />
      crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
    </div> */}
      </header>

      <div id="main">
        <section id="one">
          <header class="major">
            <h2>
              Ipsum lorem dolor aliquam ante commodo
              <br />
              magna sed accumsan arcu neque.
            </h2>
          </header>
          <p>{data.description_raw}</p>
          <ul class="actions">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>
          <div class="row">
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/01.jpg" class="image fit thumb">
                <img src="images/thumbs/01.jpg" alt="" />
              </a>
              <h3>Magna sed consequat tempus</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/02.jpg" class="image fit thumb">
                <img src="images/thumbs/02.jpg" alt="" />
              </a>
              <h3>Ultricies lacinia interdum</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/03.jpg" class="image fit thumb">
                <img src="images/thumbs/03.jpg" alt="" />
              </a>
              <h3>Tortor metus commodo</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/04.jpg" class="image fit thumb">
                <img src="images/thumbs/04.jpg" alt="" />
              </a>
              <h3>Quam neque phasellus</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/05.jpg" class="image fit thumb">
                <img src="images/thumbs/05.jpg" alt="" />
              </a>
              <h3>Nunc enim commodo aliquet</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/06.jpg" class="image fit thumb">
                <img src="images/thumbs/06.jpg" alt="" />
              </a>
              <h3>Risus ornare lacinia</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
          </div>
          <ul class="actions">
            <li>
              <a href="#" class="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        {/* <section id="three">
        <h2>Get In Touch</h2>
        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
        <div class="row">
          <div class="col-8 col-12-small">
            <form method="post" action="#">
              <div class="row gtr-uniform gtr-50">
                <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
              </div>
            </form>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </div>
          <div class="col-4 col-12-small">
            <ul class="labeled-icons">
              <li>
                <h3 class="icon solid fa-home"><span class="label">Address</span></h3>
                1234 Somewhere Rd.<br />
                Nashville, TN 00000<br />
                United States
              </li>
              <li>
                <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
                000-000-0000
              </li>
              <li>
                <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
                <a href="#">hello@untitled.tld</a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
        {/* <footer id="footer">
				<div class="inner">
					<ul class="icons">
						<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
						<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
						<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer> */}

        {/* <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script> */}
      </div>
    </div>
  );
}
