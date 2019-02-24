var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    brand: 'Vue Master',
    // image: './assets/vmSocks-green.jpg',
    //changing this b/c we may want to change more than just image
    //set it to 0 b/c for this one, we will be setting it based on the index we hover on
    selectedVariant: 0,
    // inStock: false,
    // inventory: 8
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0,
    onSale: true
  },
  methods: {
    addToCart () {
      this.cart += 1
    },
    updateProduct (index) {
      this.selectedVariant = index
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if(this.onSale) {
        return this.brand + ' ' this.product + 'are ON SALE NOW!'
      }
        return this.brand + ' ' this.product + 'are not currently on sale'
    }
  }

})
