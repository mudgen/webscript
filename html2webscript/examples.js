
const examples = {};
export default examples;
examples["bulma-card"] =
  `<!-- Bulma Card | https://bulma.io -->
<div>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>`
examples["bootstrap-carousel"] =
  `<!-- Bootstrap Carousel Example Captions | https://getbootstrap.com/ -->
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`

//examples[1] =

examples["form-example"] =
  `<!-- Form Example -->
<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>`
examples["materialize-collection"] =
  `<!-- Materialize Avatar Collection | https://materializecss.com -->
<ul class="collection">
  <li class="collection-item avatar">
    <img src="images/yuna.jpg" class="circle" />
    <span class="title">Title</span>
    <p>First Line <br />
      Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle">folder</i>
    <span class="title">Title</span>
    <p>First Line <br />
      Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle green">insert_chart</i>
    <span class="title">Title</span>
    <p>First Line <br />
      Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle red">play_arrow</i>
    <span class="title">Title</span>
    <p>First Line <br />
      Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
</ul>`

examples["materialize-card"] =
  `<!-- Materialize Card | https://materializecss.com -->
<div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src="images/sample-1.jpg" />
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div>`;


examples["tailwindcss-featured-section"] =
  `<!-- Tailwindcss Featured Section | https://tailwindcss.com -->
<div class="py-12 bg-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        A better way to send money
      </h3>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        <li>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h5 class="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Mobile notifications</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
`
examples["list"] =
  `<!-- HTML list -->
<main>
  <ol class="gradient-list">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
    <li>Curabitur in orci vel risus facilisis accumsan.</li>
    <li>Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.</li>
    <li>Aenean viverra dui quis leo lacinia fringilla.</li>
    <li>Sed varius lectus ac condimentum egestas.</li>
    <li>Maecenas faucibus lorem nec lorem posuere, a rhoncus velit porttitor.</li>
    <li>Proin porta arcu ac elit malesuada pulvinar.</li>
    <li>Phasellus vitae felis sit amet mi gravida volutpat.</li>
    <li>Curabitur vulputate urna non efficitur interdum.</li>
    <li>Curabitur dapibus enim in consectetur imperdiet.</li>
    <li>Suspendisse consectetur nibh non condimentum porta.</li>
    <li>Ut placerat diam in cursus aliquet.</li>
    <li>Praesent vitae quam id tortor malesuada viverra ut at elit.</li>
    <li>Vivamus feugiat justo id volutpat rutrum.</li>
    <li>Nulla volutpat erat non mauris condimentum, nec consequat elit posuere.</li>
    <li>Vestibulum eu risus efficitur, porta lacus a, mollis metus.</li>
    <li>Maecenas finibus arcu vel urna commodo, ac bibendum massa vestibulum.</li>
    <li>Praesent eleifend leo eget consectetur interdum.</li>
    <li>Suspendisse et lectus gravida, interdum mauris aliquet, mattis purus.</li>
    <li>In nec nisl feugiat, blandit odio non, vulputate neque.</li>
    <li>Sed id felis mollis, bibendum orci a, condimentum augue.</li>
    <li>Etiam eleifend ipsum nec nibh aliquam, non commodo risus eleifend.</li>
    <li>Curabitur in ipsum eget lacus blandit maximus in at sem.</li>
    <li>Curabitur sagittis ante nec libero maximus, ut imperdiet elit egestas.</li>
    <li>Proin congue felis sed ultrices elementum.</li>
    <li>Duis sit amet velit et lectus eleifend interdum non quis ex.</li>
    <li>Praesent congue lectus a felis pharetra malesuada.</li>
    <li>Sed vel mauris condimentum, egestas dolor eu, porttitor nisl.</li>
    <li>Donec sed elit tincidunt, accumsan magna sed, facilisis libero.</li>
    <li>Curabitur vel purus quis justo placerat euismod mollis ac arcu.</li>
    <li>Sed eget mi et justo luctus mollis ut non augue.</li>
    <li>Suspendisse sit amet lectus et magna euismod tempor.</li>
    <li>Vestibulum accumsan velit et ipsum pellentesque, vitae ultricies erat blandit.</li>
    <li>Pellentesque vel dolor ac risus efficitur convallis.</li>
    <li>Maecenas feugiat quam at facilisis dapibus.</li>
    <li>Cras commodo leo sit amet lacus lacinia, eget rutrum sem sodales.</li>
    <li>Ut sit amet risus finibus, iaculis lectus sit amet, varius lectus.</li>
    <li>Duis dignissim elit eget erat maximus luctus.</li>
  </ol>
</main>`
examples["foundation-blog"] =
  `<!-- Foundation Blog Layout | https://get.foundation -->
<!-- Start Top Bar -->
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="menu">
      <li class="menu-text">Blog</li>
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
</div>
<!-- End Top Bar -->
<div class="callout large primary">
  <div class="row column text-center">
    <h1>Our Blog</h1>
    <h2 class="subheader">Such a Simple Blog Layout</h2>
  </div>
</div>
<!-- We can now combine rows and columns when there's only one column in that row -->
<div class="row medium-8 large-7 columns">
  <div class="blog-post">
    <h3>Awesome blog post title 3/6/2015</h3>
    <img class="thumbnail" src="https://placehold.it/850x350" />
    <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
    <div class="callout">
      <ul class="menu simple">
        <li><a href="#">Author: Mike Mikers</a></li>
        <li><a href="#">Comments: 3</a></li>
      </ul>
    </div>
  </div>
  <div class="blog-post">
    <h3>Awesome blog post title 3/6/2015</h3>
    <img class="thumbnail" src="https://placehold.it/850x350" />
    <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
    <div class="callout">
      <ul class="menu simple">
        <li><a href="#">Author: Mike Mikers</a></li>
        <li><a href="#">Comments: 3</a></li>
      </ul>
    </div>
  </div>
  <div class="blog-post">
    <h3>Awesome blog post title 3/6/2015</h3>
    <img class="thumbnail" src="https://placehold.it/850x350" />
    <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
    <div class="callout">
      <ul class="menu simple">
        <li><a href="#">Author: Mike Mikers</a></li>
        <li><a href="#">Comments: 3</a></li>
      </ul>
    </div>
  </div>
  <div class="blog-post">
    <h3>Awesome blog post title 3/6/2015</h3>
    <img class="thumbnail" src="https://placehold.it/850x350" />
    <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
    <div class="callout">
      <ul class="menu simple">
        <li><a href="#">Author: Mike Mikers</a></li>
        <li><a href="#">Comments: 3</a></li>
      </ul>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
<script>
  $(document).foundation();
</script>`

examples["uikit-blog-layout"] =
  `<!-- uikit Blog Layout | https://getuikit.com -->
<div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
    <nav class="uk-navbar uk-margin-large-bottom">
        <a class="uk-navbar-brand uk-hidden-small" href="layouts_frontpage.html">Brand</a>
        <ul class="uk-navbar-nav uk-hidden-small">
            <li>
                <a href="layouts_frontpage.html">Frontpage</a>
            </li>
            <li>
                <a href="layouts_portfolio.html">Portfolio</a>
            </li>
            <li class="uk-active">
                <a href="layouts_blog.html">Blog</a>
            </li>
            <li>
                <a href="layouts_documentation.html">Documentation</a>
            </li>
            <li>
                <a href="layouts_contact.html">Contact</a>
            </li>
            <li>
                <a href="layouts_login.html">Login</a>
            </li>
        </ul>
        <a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
        <div class="uk-navbar-brand uk-navbar-center uk-visible-small">Brand</div>
    </nav>
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-medium-3-4">
            <article class="uk-article">
                <h1 class="uk-article-title">
                    <a href="layouts_post.html">Article Heading</a>
                </h1>
                <p class="uk-article-meta">Written by Author on 12 April 2013. Posted in <a href="#">Blog</a></p>
                <p>
                    <a href="layouts_post.html"><img width="900" height="300" src="data:image/svg+xml;base64,PD94bWwgdmbmNvZGdmc+DQo=" /></a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2>Subheading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>
                    <a class="uk-button uk-button-primary" href="layouts_post.html">Continue Reading</a>
                    <a class="uk-button" href="layouts_post.html">4 Comments</a>
                </p>
            </article>
            <article class="uk-article">
                <h1 class="uk-article-title">
                    <a href="layouts_post.html">Article Heading</a>
                </h1>
                <p class="uk-article-meta">Written by Author on 12 April 2013. Posted in <a href="#">Blog</a></p>
                <p>
                    <a href="layouts_post.html"><img width="900" height="300" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0c+DQo=" /></a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2>Subheading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>
                    <a class="uk-button uk-button-primary" href="layouts_post.html">Continue Reading</a>
                    <a class="uk-button" href="layouts_post.html">4 Comments</a>
                </p>
            </article>
            <ul class="uk-pagination">
                <li class="uk-disabled"><span><i class="uk-icon-angle-double-left"></i></span></li>
                <li class="uk-active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><span>...</span></li>
                <li><a href="#">20</a></li>
                <li><a href="#"><i class="uk-icon-angle-double-right"></i></a></li>
            </ul>
        </div>
        <div class="uk-width-medium-1-4">
            <div class="uk-panel uk-panel-box uk-text-center">
                <img class="uk-border-circle" width="120" height="120" src="data:image/svg+xml;base64,PD9ZnPg0K" />
                <h3>Author Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut.</p>
            </div>
            <div class="uk-panel">
                <h3 class="uk-panel-title">Archives</h3>
                <ul class="uk-list uk-list-line">
                    <li><a href="#">January 2014</a></li>
                    <li><a href="#">December 2013</a></li>
                    <li><a href="#">November 2013</a></li>
                    <li><a href="#">October 2013</a></li>
                    <li><a href="#">September 2013</a></li>
                </ul>
            </div>
            <div class="uk-panel">
                <h3 class="uk-panel-title">Social Links</h3>
                <ul class="uk-list">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div id="offcanvas" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-offcanvas">
            <li>
                <a href="layouts_frontpage.html">Frontpage</a>
            </li>
            <li>
                <a href="layouts_portfolio.html">Portfolio</a>
            </li>
            <li class="uk-active">
                <a href="layouts_blog.html">Blog</a>
            </li>
            <li>
                <a href="layouts_documentation.html">Documentation</a>
            </li>
            <li>
                <a href="layouts_contact.html">Contact</a>
            </li>
            <li>
                <a href="layouts_login.html">Login</a>
            </li>
        </ul>
    </div>
</div>
`
examples["picnicss-navigation"] =
  `<!-- Picnic CSS Navigation | https://picnicss.com -->
<div>
  <label class="stack">
    <input name="stack" type="radio" />
    <span class="button toggle">
      <span class="icon-picture"></span> Home
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio" />
    <span class="button toggle">
      <span class="icon-puzzle"></span> Plugins
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio" />
    <span class="button toggle">
      <span class="icon-file-code"></span> Documentation
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio" />
    <span class="button toggle">
      <span class="icon-help-circled"></span> Test
    </span>
  </label>
</div>`