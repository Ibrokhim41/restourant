<template>
  <div id="app">
    <header class="header_res">
      <!-- header_top -->
      <div class="header_top header_top_res">
        <div class="container">
          <div class="row justify-content-xl-between justify-content-around">
            <!-- header_logo -->
            <div
              class="header_top_logo col-auto col-lg-12 col-xl-auto mb-lg-3 mb-xl-0 d-flex align-items-center justify-content-center"
            >
              <router-link to="/"
                ><img src="./assets/images/logo.png" alt="Logo"
              /></router-link>
            </div>
            <!-- header_nav -->
            <div class="header_top_nav d-flex align-items-center">
              <div class="mob">
                <nav>
                  <ul class="d-flex">
                    <li v-for="link in navigation" :key="link.name">
                      <router-link tag="a" :to="link.link">{{
                        link.name
                      }}</router-link>
                    </li>
                  </ul>
                </nav>
                <div class="close d-none" id="close">
                  <i class="fa fa-times"></i>
                </div>
              </div>
            </div>
            <!-- header_right -->
            <div class="header_top_right d-flex align-items-center">
              <router-link tag="a" to="/reservation"
                ><button class="d-none d-md-block">
                  <i class="fa fa-concierge-bell"></i>BOOK YOUR TABLE
                </button></router-link
              >
              <div class="top_nav_bars d-flex d-lg-none align-items-center">
                <a href="#!" id="navbars"><i class="fa fa-bars"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <router-view />

    <!-- ==================== FOOTER
    ================================ -->
    <footer>
      <div class="container">
        <div class="row justify-content-center justify-content-md-between">
          <!-- footer_nav -->
          <div class="footer_nav d-none d-lg-block">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About us</a></li>
              <li><a href="#!">Menu</a></li>
              <li><a href="#!">Reservation</a></li>
              <li><a href="#!">Recipe</a></li>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Contact Us</a></li>
            </ul>
          </div>

          <!-- footer_news -->
          <div class="footer_news">
            <h3 class="d-none d-md-block">News letter</h3>
            <p>Enter your email address and subscribe daily newsletter</p>
            <div class="subscribe">
              <input type="email" placeholder="Email Address" />
              <i class=" far fa-envelope"></i>
              <button>SUBSCRIBE</button>
            </div>
            <div class="footer_social d-flex justify-content-center">
              <a href="#!"><i class="fab fa-facebook-f"></i></a>
              <a href="#!"><i class="fab fa-twitter"></i></a>
              <a href="#!"><i class="fab fa-google-plus-g"></i></a>
            </div>
          </div>

          <!-- footer_app -->
          <div class="footer_app m-5 mb-0 m-md-0">
            <h3 class="d-none d-md-block">Our app avilable</h3>
            <a href="#!">
              <div class="app d-flex">
                <img src="./assets/images/icon_apple.png" alt="apple" />
                <h4><span>Avilable on the</span>App Store</h4>
              </div>
            </a>
            <a href="#!">
              <div class="app d-flex">
                <img
                  src="./assets/images/icon_Google Play.png"
                  alt="google_play"
                />
                <h4><span>Get it on</span>GOOOGLE PLAY</h4>
              </div>
            </a>
          </div>
        </div>
        <div class="footer_rights">
          <p>
            <span>2016 ©</span> Luxury RestaurAnt,
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      navigation: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "about",
        },
        {
          name: "Menu",
          link: "menu",
        },
        {
          name: "Recipe",
          link: "recipe",
        },
        {
          name: "Contact",
          link: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
