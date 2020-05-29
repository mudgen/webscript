import elementBuilders from "../src/webscript.js";
import createElement from "../src/createDOMElement.js";
import createObject from "../src/createObjectElement.js";

(() => {
  const { body, div, p, span, img } = elementBuilders(createElement);

  let classes;

  const app = body.class`flex items-center justify-center h-screen`(
    div.class`max-w-sm rounded overflow-hidden shadow-lg`.hasImages`${true}`(
      img.class`w-full`.src`img/card-top.jpg`.alt`Sunset in the mountains`,
      div.class`px-6 py-4`(
        div.class`font-bold text-xl mb-2`("The Coldest Sunset"),
        p.class`text-gray-700 text-base`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ..."
        )
      ),
      div.class`px-6 py-4 text-sm font-semibold text-gray-700`(
        span.class`${(classes =
          "inline-block bg-gray-200 rounded-full px-3 py-1")} mr-2`(
          "#photography"
        ),
        span.class`${classes} mr-2`("#travel"),
        span.class`${classes}`("#winter")
      )
    )
  );

  document.body = app;
})();

(() => {
  const { body, div, p, span, img } = elementBuilders(createObject);

  let classes;

  const app = body.class`flex items-center justify-center h-screen`(
    div.class`max-w-sm rounded overflow-hidden shadow-lg`.hasImages(true)(
      img.class`w-full`.src`img/card-top.jpg`.alt`Sunset in the mountains`,
      div.class`px-6 py-4`(
        div.class`font-bold text-xl mb-2`("The Coldest Sunset"),
        p.class`text-gray-700 text-base`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ..."
        )
      ),
      div.class`px-6 py-4 text-sm font-semibold text-gray-700`(
        span.class`${(classes =
          "inline-block bg-gray-200 rounded-full px-3 py-1")} mr-2`(
          "#photography"
        ),
        span.class`${classes} mr-2`("#travel"),
        span.class`${classes}`("#winter")
      )
    )
  );

  console.log(app);
})();
