<template>
  <div class="profile">
    <h1>About Author</h1>
    <img src="../assets/about.jpg" alt="">
    <h3>Name: <i>Catur Satrio Wicaksono</i> </h3>
    <div class="link">
      <router-link to="/">Back to home</router-link>
      <router-link to="/shop">Back to shop</router-link>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Footer
  }
}
</script>

<style lang="sass" scoped>
.profile 
  text-align: center
  img 
    width: 65vw
  .link 
    display: flex 
    justify-content: space-evenly
    margin: 20px 
    font-size: 15px
</style>
