//register and name our component
//paste in data
//add data, methods, and computed properties associated with this component
//turn data into a function that returns the data object
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">

    <div class="product-image">
      <img v-bind:src="image" alt="">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>{{ sale }}</p>
      <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <h3>Colors:</h3>
      <div v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)">
      </div>

      <button v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }">Add to Cart
      </button>

      <button v-on:click="removeFromCart">Remove from Cart

      </button>

    </div>

  </div>
  `,
  data() {
   return {
     product: "Socks",
     brand: 'Vue Mastery',
     selectedVariant: 0,
     // image: "./assets/vmSocks-green.jpg",
     details: ["80% cotton", "20% polyester", "Gender-neutral"],
     variants: [
       {
         variantId: 2234,
         variantQuantity: 15,
         variantColor: "green",
         variantImage: "./assets/vmSocks-green.jpg"
       },
       {
         variantId: 2235,
         variantQuantity: 0,
         variantColor: "blue",
         variantImage: "./assets/vmSocks-blue.jpg"
       }
     ],
     onSale: true
   }
 },
 methods: {
   addToCart: function() {
     this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
   },
   updateProduct: function(index) {
     this.selectedVariant = index
   },
   removeFromCart: function() {
     this.$emit('remove-from-cart',
     this.variants[this.selectedVariant].variantId)
   }
  },
 computed: {
   title: function () {
     return this.brand + ' ' + this.product
   },
   image() {
     return this.variants[this.selectedVariant].variantImage
   },
   inStock() {
     if (this.variants[this.selectedVariant].variantQuantity > 0) {
       return true
     } else {
       return false
     }
   },
   shipping() {
     if (this.premium) {
       return "Free"
     }
       return 2.99
   }
   // sale() {
   //   if (this.onSale) {
   //     return this.brand + ' ' + this.product + ' are on sale!'
   //   }
   //     return  this.brand + ' ' + this.product + ' are not on sale'
   // }
  }
})

//register and name a new component
//pass in props so the component can access details data
//format data - required array
//create a template for component
//display details in a list by iterating over details in the array
Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})


// register and name a new component for product reviews
Vue.component('product-review', {
  template: `
    <input>
  `,
  data() {
    return {
      name: null
    }
  }
})


//Add a new boolean data property `onSale` and create a computed property that takes `brand`, `product` and `onSale` and prints out a string whenever `onSale` is true.

var app = new Vue({
    el: '#app',
    data: {
      premium: true,
      cart: []
    },
    methods: {
      updateCart(id) {
        this.cart.push(id)
      },
      removeItem(id) {
        for(let i = this.cart.length - 1; i >= 0; i--) {

            if(this.cart[i] === id) {
              this.cart.splice(i, 1);
            }
        }
      }
    }
  })
