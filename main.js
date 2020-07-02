let app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    brand: "Nike",
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./sock.jpg",
        variantQty: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./blue.jpg",
        variantQty: 0,
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQty;
    },
  },
});
