import React from "react";
import { render } from "react-dom";
import App from "./App";
import Car from "./Car";
import Creator from "./Creator";
import Film from "./Film";
import image from "./assets/cat_eyes_256.png";
import poster_image from "./assets/The_shawshank.jpg";
import my_photo from "./assets/CVFoto.jpg";

const car = {
  model: "mercedes",
  year: 2018,
  price: 1890,
  image: image,
  description: "Well used"
};
const best_film = {
  name: "The Shawshank Redemption",
  director: "Frank Darabont",
  year_of_relize: 1994,
  filmcompany: "Warner Brothers",
  poster_image: poster_image
};
const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
    <Creator />
    <Car data={car} />
    <Film data={best_film}/>
  </React.StrictMode>,
  rootElement
);
