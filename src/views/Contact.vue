<template>
  <div>
    <!-- header_book -->
    <div class="header_book header_contact_us">
      <div class="container">
        <h1>Contact Us</h1>
      </div>
    </div>

    <!-- ==================== MAIN
    ================================ -->
    <main class="bgcolor_grey">
      <!-- main_map -->
      <div class="main_map">
        <iframe
          src="https://yandex.uz/map-widget/v1/-/CGhwNPNH"
          width="100%"
          height="650px"
          frameborder="1"
          allowfullscreen="true"
        ></iframe>
      </div>

      <!-- main_address -->
      <div class="container">
        <div class="main_address shadow">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="main_address_left">
                <h3>Get in touch</h3>
                <div>
                  <i class="fa fa-user"></i>
                  <input type="text" placeholder="Name*" />
                </div>
                <div>
                  <i class="fas fa-envelope"></i>
                  <input type="mail" placeholder="Email Address*" />
                </div>
                <div>
                  <div>
                    <i class="fas fa-comments"></i>
                    <textarea
                      name="special_requirenemts"
                      id=""
                      cols="30"
                      rows="6"
                      placeholder="Message*"
                    ></textarea>
                  </div>
                </div>
                <button>SEND NOW</button>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="main_address_right">
                <h3>Our Address</h3>
                <p>ADDRESS</p>
                <h4>
                  Address Luxury Restaurent California Second Street 2nd floor
                </h4>
                <p>PHONE</p>
                <h4><a href="tel:91855955856559">+91 8559 5585 6559</a></h4>
                <p>EMAIL</p>
                <h4>
                  <a href="mail-to:info@luxuryrestaurent.com"
                    >info@luxuryrestaurent.com</a
                  >
                </h4>
                <p>FOLLOW US</p>
                <div class="footer_social d-flex justify-content-center">
                  <a href="#!"><i class="fab fa-facebook-f"></i></a>
                  <a href="#!"><i class="fab fa-twitter"></i></a>
                  <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
