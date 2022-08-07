<template>

  <div>
    <h3>carrito</h3>
    <ul>
      <li v-for="(item, $index ) in cartItems" :key="item.id">
        {{ item.titulo }}  {{ item.precio }}
        <button @click="eliminar($index )">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CarritoVue",

  data(){
    return {
      products: [],
      cart: [],
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.productsOnCart;
    },
  },
  methods:{
    eliminar(index){
      this.$store.dispatch("deleteProductFromCart", index)   }
  }
};
</script>

<style scoped></style>
