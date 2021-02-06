<template>
  <header>
    <a href="#">
      <div class="btn-top">
        <p>Register</p>
      </div>
    </a>
    <a href="#">
      <div class="btn-top">
        <p>Login</p>
      </div>
    </a>
  </header>
  <div class="start">
    <h1>Welcome!</h1>
    <router-link to="/shop" class="btn">
      <div class="link">
        <p>Start Shopping</p>
      </div>
    </router-link>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>

<style lang="sass" scoped>
header 
  display: flex 
  justify-content: space-between 
  text-align: center
  padding: 10px
  a 
    background-color: #99d3ff
    box-shadow: 0px 5px 5px 5px #eaeaea
    .btn-top 
      height: 50px
      width: 150px
      p 
        font-size: 20px
    &:hover 
      background-color: #87cbff
.start
  border: 2px solid
  margin: 330px auto
  width: 95%
  text-align: center
  padding-bottom: 20px
  box-shadow: 10px 10px 10px 10px #eaeaea
  h1 
    font-size: 40px
  .btn 
    display: grid
    text-align: center
    align-item: center
    text-decoration: none
    width: 150px
    margin: auto
    .link
      background-color: #87cbff
      border-radius: 8px
      p 
        font-size: 20px
        color: #000
      &:hover 
        background-color: #6dbefc
      

</style>