import elementBuilders from "../../webscript.js"

const { body, div, p, a, img } = elementBuilders();

const app =
  body`bg-indigo-100`(
    div`bg-indigo-100`(
      p("hello world"),
      img.src`https://cdn.pixabay.com/photo/2020/05/17/22/26/girl-5183752_960_720.jpg`
    ));

document.body = app;