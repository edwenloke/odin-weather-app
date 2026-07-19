import "./style.css";

import searchIcon from './assets/search.svg';

import { searchLocationEvent, loadWeather } from "./ui/event.js";

const img = document.querySelector('#search-icon');
img.src = searchIcon;

searchLocationEvent();

loadWeather();
