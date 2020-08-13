<template>
  <div>
    <!-- main_menu -->
    <div class="main_menu">
      <div class="bread d-none d-xl-block">
        <img src="images/5ded2c7349411.png" alt="bread" />
      </div>
      <div class="shawarma d-none d-md-block">
        <img src="images/5ded2dde5b588.png" alt="shurma" />
      </div>
      <div class="container">
        <h2>Food Menu</h2>

        <div class="main_menu_nav">
          <div class="row justify-content-center">
            <div
              v-for="(div, index) in foodTitles"
              :key="index"
              class="col-auto d-flex flex-column align-items-center"
            >
              <i :class="div.icon" id="navbarNav"></i>
              <p
                v-bind:class="{ main_menu_nav_active: div.exact }"
                @click="foodTitleActice(div)"
              >
                {{ div.title }}
              </p>
            </div>
          </div>
        </div>

        <div class="main_menu_main">
          <div class="row justify-content-around">
            <div class="col-12 col-md-6 col-lg-5">
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Ultimate organic fruit salad</h4>
                  <p>survived not only five centuries but the leap</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Plain pancakes</h4>
                  <p>Donec eget augue at diam euismod viverra</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Toasted jam</h4>
                  <p>Phasellus a ex accumsan, sollicitudin</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Toasted jam</h4>
                  <p>Phasellus a ex accumsan, sollicitudin</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5">
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Ultimate organic fruit salad</h4>
                  <p>survived not only five centuries but the leap</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Plain pancakes</h4>
                  <p>Donec eget augue at diam euismod viverra</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Toasted jam</h4>
                  <p>Phasellus a ex accumsan, sollicitudin</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
              <div class="main_menu_block">
                <div class="block_text">
                  <h4>Toasted jam</h4>
                  <p>Phasellus a ex accumsan, sollicitudin</p>
                </div>
                <span><i class="fa fa-dollar"></i>50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodTitles: [
        {
          title: "All",
          icon: "fa fa-book-open",
          exact: true,
        },
        {
          title: "Breakfast",
          icon: "fa fa-mug-hot",
          exact: false,
        },
        {
          title: "Lunch",
          icon: "fas fa-apple-alt",
          exact: false,
        },
        {
          title: "Snacks",
          icon: "fa fa-cookie",
          exact: false,
        },
        {
          title: "Dinner",
          icon: "fa fa-utensils",
          exact: false,
        },
        {
          title: "Pizza",
          icon: "fa fa-pizza-slice",
          exact: false,
        },
        {
          title: "Soups",
          icon: "fas fa-bread-slice",
          exact: false,
        },
      ],
    };
  },
  methods: {
    foodTitleActice(val) {
      for (let item of this.foodTitles) {
        item.exact = false;
      }
      val.exact = true;
    },
  },
};
</script>
