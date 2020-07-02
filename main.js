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
      },
      {
        variantId: 2235,
        variantColor: "yellow",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
  },
});
