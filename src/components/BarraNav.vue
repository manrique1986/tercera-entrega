<template>
  <div>
    <b-nav tabs fill>
      <b-nav-item>
        <router-link to="/login">Login</router-link>
      </b-nav-item>
      <b-nav-item
        ><router-link to="/register">Register</router-link></b-nav-item
      >
      <b-nav-item><router-link to="/HomePage">main</router-link> </b-nav-item>
      <b-nav-item> </b-nav-item>

      <button @click="carrito" class="btn btn-outline-dark">Carrito {{cartItemCount}}</button>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "BarraNav",
  methods: {
    carrito(){
      this.$router.push('/carrito')
    }
  },
  computed: {
    cartItemCount (){
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>

<style scoped></style>