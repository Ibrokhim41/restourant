<template>
    <div>

        <!-- header_book -->
        <div class="header_book">
            <div class="container">
                <h1>Reservation</h1>
            </div>
        </div>

        <!-- ==================== MAIN
    ================================ -->
    <main>
        <!-- main_book -->
        <div class="main_book">
            <div class="container">
                <h2>Book a Table</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. </p>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="book_input">
                            <div>
                                <input type="text" placeholder="Name*">
                                <i class="fa fa-user"></i>
                            </div>
                            <div>
                                <input type="date" placeholder="Date*">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="book_input">
                            <div>
                                <input type="mail" placeholder="Email Address*">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <input type="time" placeholder="Time*">
                                <i class="far fa-clock"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="book_input">
                            <div>
                                <input type="text" placeholder="Phone Number*">
                                <i class="fas fa-mobile"></i>
                            </div>
                            <div>
                                <input type="text" placeholder="Guests*">
                                <i class="fas fa-user-friends"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="book_input">
                            <textarea name="special_requirenemts" id="" cols="30" rows="6"
                                placeholder="Special Requirements*"></textarea>
                            <i class="fas fa-comments"></i>
                        </div>
                    </div>
                </div>
                <button>Make reservation</button>
            </div>
        </div>

        <!-- main_book_reservation -->
        <div class="main_book_reservation">
            <div class="container">
                <h2>Special Reservations</h2>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6">
                        <div class="main_book_reservation_card">
                            <img src="https://im0-tub-ru.yandex.net/i?id=24695a4b9d442506dc09713fd0489b3c&n=13"
                                alt="card_img">
                            <h4>Private Dinning</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="bg_dotted">
                            <div class="main_book_reservation_card_center p-5 p-sm-0">
                                <i class="fa fa-phone-alt"></i>
                                <a href="tel:1-0070000005">1-007 000 005</a>
                                <p>Call us for a Special reservation</p>
                                <i class="fa fa-envelope"></i>
                                <a href="mail:info@luxory.com">info@luxory.com</a>
                                <p>mail us for a Special reservation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mt-md-5 mt-lg-0">
                        <div class="main_book_reservation_card">
                            <img src="https://im0-tub-ru.yandex.net/i?id=4720ed0e0edc531c46012c507d8d619f&n=13"
                                alt="card_img">
                            <h4>Couple Dinning</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- main_footer -->
        <div class="main_footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <h2>Opening Hours</h2>
                    </div>
                    <div class="col-12 col-md-5">
                        <h5>Monday to Friday <span>10am - 10pm</span></h5>
                        <h5>Saturday to Sunday <span>9am - 11pm</span></h5>
                    </div>
                </div>
            </div>
        </div>
    </main>

    </div>
</template>