import $ from 'jquery';
import './style.scss';

let seconds = 0;
const printFunction = () => {
  $('#main').html(`You have been on this page for ${seconds} seconds.`);
  seconds += 1;
};

setInterval(printFunction, 1000);
