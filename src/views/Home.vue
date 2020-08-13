<template>
    <div>
        <!-- header_main -->
        <div class="header_main">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators d-none d-md-flex">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container-fluid header_main_slider">
                            <div class="container text-center text-sm-left">
                                <h1>Teast your fav dish</h1>
                                <h2>from <span>luxury restaurent.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid header_main_slider" id="header_main_slider2">
                            <div class="container text-center text-sm-left">
                                <h1>Teast your fav dish</h1>
                                <h2>from <span>luxury restaurent.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid header_main_slider" id="header_main_slider3">
                            <div class="container text-center text-sm-left">
                                <h1>Teast your fav dish</h1>
                                <h2>from <span>luxury restaurent.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header_bottom -->
        <div class="header_bottom">
            <div class="container">
                <div class="row justify-content-md-end justify-content-center">
                    <div class="header_bottom_block">
                        <i class="fas fa-comments"></i>
                        <h4>Read <span>reviews</span></h4>
                        <router-link to="/about" tag="a" class="border-0"><i class="fas fa-chevron-circle-right"></i></router-link>
                    </div>
                    <div class="header_bottom_block">
                        <i class="fas fa-phone-alt"></i>
                        <h4>Call us Now for <span>Home Delivery</span></h4>
                    </div>
                    <div class="header_bottom_block">
                        <a href="tel:1-008 005 006">1-008 005 006</a>
                    </div>
                </div>
                <!-- header_bottom_sticker -->
                <div class="header_bottom_sticker d-none d-sm-block">
                    <router-link to="/menu" tag="a"><img src="@/assets/images/__explore foodmenu.png" alt="sticker"></router-link>
                </div>
            </div>
        </div>


    <!-- ==================== MAIN
    ================================ -->
    <main>
        <!-- main_about -->
        <div class="main_about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7 col-lg-6">
                        <div class="main_about_left">
                            <h2 class="text-center text-md-left">About Restaurent</h2>
                            <p class="text-justify text-md-left">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged...
                            </p>
                            <router-link to="/about" tag="a"><button class="d-block m-auto ml-md-0">READ MORE</button></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-6 d-none d-md-block">
                        <div class="main_about_right h-100">
                            <div class="row h-100">
                                <div
                                    class="col-12 col-lg-6 d-flex flex-column justify-content-center justify-content-lg-end">
                                    <img src="http://adeccomputacion.com/wp-content/uploads/2016/09/Restaurantes-1024x684.png"
                                        alt="">
                                    <img src="http://www.stargreenmedia.com/wp-content/uploads/2017/05/4.png" alt="">
                                </div>
                                <div class="col-6 d-none d-lg-block">
                                    <img src="https://im0-tub-ru.yandex.net/i?id=8fdc45b664017d6084958fab76d5c929&n=13"
                                        alt="">
                                    <img src="http://bloknot-volgograd.ru/thumb/960x0xcut/upload/iblock/66f/serving.png"
                                        alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <todaySpecial />

        <foodMenu />

        <!-- main_client -->
        <div class="main_client">
            <div class="container text-center">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h2>Happy Clients</h2>
                            <i class="fa fa-quote-left"></i>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose. </p>
                            <i class="fa fa-quote-right"></i>
                            <img src="https://static.arageek.com/wp-content/uploads/2019/03/papers.co-ho49-natalie-portman-girl-actress-film-1-wallpaper.jpg"
                                alt="clients">
                            <span>NATALI PORTMAN</span>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <h2>Happy Clients</h2>
                            <i class="fa fa-quote-left"></i>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose. </p>
                            <i class="fa fa-quote-right"></i>
                            <img src="https://im0-tub-ru.yandex.net/i?id=2771e96725576e04fd89f3b6980ac924&n=13"
                                alt="clients">
                            <span>DR.PRABAKARAN JHON</span>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <h2>Happy Clients</h2>
                            <i class="fa fa-quote-left"></i>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose. </p>
                            <i class="fa fa-quote-right"></i>
                            <img src="https://i.pinimg.com/originals/6c/f4/8a/6cf48acd17a2cec8caa6c64bc0d47cd9.jpg"
                                alt="clients">
                            <span>KATE BECKINSALE</span>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <a class="d-none d-md-flex carousel-control-prev" href="#carouselExampleControls" role="button"
                        data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="d-none d-md-flex carousel-control-next" href="#carouselExampleControls" role="button"
                        data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- main_reserve -->
        <div class="main_reserve">
            <div class="container">
                <h2>Reserve your table</h2>
                <div class="row">
                    <div class="col-xl-6  d-none d-xl-block">
                        <img src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9SZXNlcnZlZC1UYWJsZS1DYXJkLU1vY2t1cHMtUHJldmlldy0zLmpwZw&q=90&enlarge=true&h=1036&w=1600"
                            alt="table">
                    </div>
                    <div class="col-12 col-xl-6 ">
                        <div class="reserve_table h-100 d-flex flex-column justify-content-around">
                            <div class="row">
                                <div class="col-6">
                                    <div class="reserve_table_in">
                                        <input type="text" placeholder="Name*">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div class="reserve_table_in">
                                        <input type="time" placeholder="Time*">
                                        <i class="far fa-clock"></i>
                                    </div>
                                    <div class="reserve_table_in">
                                        <input type="text" placeholder="Guests*">
                                        <i class="fas fa-user-friends"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="reserve_table_in">
                                        <input type="date" placeholder="Date*">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div class="reserve_table_in">
                                        <input type="mail" placeholder="Email Address*">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="reserve_table_in">
                                        <input type="text" placeholder="Phone Number*">
                                        <i class="fas fa-mobile"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="reserve_bottom">
                                <a href="book_table.html"><button>MAKE RESERVATION</button></a>
                                <h5>YOU CAN ALSO CALL <span>FOR A RESERVATION</span></h5>
                                <a href="tel:1-008005006">1-007 000 005</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
import foodMenu from "@/components/foodMenu"
import todaySpecial from "@/components/todaySpecial"

export default {
    components: {foodMenu, todaySpecial}
}
</script>