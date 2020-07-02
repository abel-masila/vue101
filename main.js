let app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./sock.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./sock.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./blue.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
