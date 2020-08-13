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
        <h2 @click="foodMenu">Food Menu</h2>

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
              
              <div 
                v-for="(div, index) in foodMenu()" :key="index">
                  <div class="main_menu_block">
                <div class="block_text">
                  <h4>{{ div.name }}</h4>
                  <p>{{ div.description }}</p>
                </div>
                <span><i class="fa fa-dollar"></i>{{ div.price }}</span>
              </div>
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
        curentMenu: "breakfast",
      foodTitles: [
        {
          title: "Breakfast",
          icon: "fa fa-mug-hot",
          exact: true,
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
        {
          title: "All",
          icon: "fa fa-book-open",
          exact: false,
        }
      ],
      breakfast: [
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          },
          {
              name: "Plain pancakes",
              description: "Donec eget augue at diam euismod viverra",
              price: 50 
          },
          {
              name: "Toasted jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          }
          ,
          {
              name: "Toasted jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          },
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          }
      ],
      lunch: [
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 20 
          },
          {
              name: "Toasted jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 20 
          },
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 20 
          }
      ],
      snacks: [
          {
              name: "organic fruit salad",
              description: "only five centuries but the leap",
              price: 10 
          },
          {
              name: "pancakes",
              description: "augue at diam euismod viverra",
              price: 70 
          },
          {
              name: "Jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 70 
          }
      ],
      dinner: [
          {
              name: "Fruit salad",
              description: "survived not only five centuries but the leap",
              price: 40 
          },
          {
              name: "Plain",
              description: "Donec eget augue at diam euismod viverra",
              price: 50 
          },
          {
              name: "Toasted",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          }
          ,
          {
              name: "Toasted jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          },
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          }
      ],
      pizza: [
          {
              name: "pizza fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          },
          {
              name: "Plain Pizza",
              description: "Donec eget augue at diam euismod viverra",
              price: 50 
          },
          {
              name: "Toasted Pizza",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          }
          ,
          {
              name: "Pizza jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          },
          {
              name: "Pizza Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          }
      ],
      soups: [
          {
              name: "Ultimate organic fruit",
              description: "survived not only five centuries but the leap",
              price: 50 
          },
          {
              name: "Toasted soup",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          }
          ,
          {
              name: "soup jam",
              description: "Phasellus a ex accumsan, sollicitudin",
              price: 50 
          },
          {
              name: "Ultimate organic fruit salad",
              description: "survived not only five centuries but the leap",
              price: 50 
          }
      ],
      all: []
    };
  },
  methods: {
    foodTitleActice(val) {
      for (let item of this.foodTitles) {
        item.exact = false;
      }
      val.exact = true;
      this.curentMenu = val.title.toLowerCase()
    },
    foodMenu() {
        let food = []
        for(let i of this[this.curentMenu]) {
            food.push(i)
        }
        return food
    },
    allFood() {
        this.all = this.breakfast.concat(this.lunch, this.snacks, this.dinner, this.pizza, this.soups)    
    } 
  },
  created() {
      this.allFood()
  }
};
</script>
