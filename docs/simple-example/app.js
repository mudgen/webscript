import elementBuilders from "../webscript.js"

const { body, div, p, span, img } = elementBuilders;

let classes;

const app =
  body`flex items-center justify-center h-screen`(
    div`max-w-sm rounded overflow-hidden shadow-lg`(
      img`w-full`.src`img/card-top.jpg`.alt`Sunset in the mountains`,
      div`px-6 py-4`(
        div`font-bold text-xl mb-2`("The Coldest Sunset"),
        p`text-gray-700 text-base`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ...")),
      div`px-6 py-4 text-sm font-semibold text-gray-700`(
        span`${classes = "inline-block bg-gray-200 rounded-full px-3 py-1"} mr-2`("#photography"),
        span`${classes} mr-2`("#travel"),
        span`${classes}`("#winter"))));

document.body = app;