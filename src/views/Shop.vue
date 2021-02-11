<template>
  <Header />
  <div class="wraper">
    <div class="item" 
    v-for="item in items"
    v-bind:item="item"
    v-bind:key="item._id" 
    >
      <img :src="item.imgURL" :alt="item.title">
      <a href="#">
        <div class="detail">
          <h3>{{item.title}}</h3>
        </div>
      </a>
      <p>Rp.{{item.price}}</p>
      <div class="btn-submit">
        <button type="submit"> <span class="fa fa-shopping-cart"></span> Add to cart</button>
        <button type="submit"> <span class="fa fa-heart"></span> Add to wishlist</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ItemService from '../ItemService'

export default {
  name: 'Shop',
  components: {
    Header,
    Footer
  }, 
  data() {
    return {
      items: [],
      error: '',
      title: '',
      price: ''
    }
  },
  async created() {
    try {
      this.items = await ItemService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
}
</script>

<style lang="sass" scoped>
.wraper 
  margin: 30px 0
  display: flex 
  justify-content: space-evenly
  flex-wrap: wrap
  .item 
    border: 1px solid #eaeaea
    box-shadow: 5px 5px 10px 2px #eaeaea
    width: 25vw
    margin: 20px 0
    border-radius: 10px
    padding: 20px
    img 
      border: 1px solid
    .btn-submit
      display: flex
      justify-content: space-around
      padding-top: 5px
      button 
        justify-content: space-between
        border: none
        border-radius: 8px
        height: 50px
        max-width: 50%
        background-color: #99d3ff
        &:hover 
          cursor: pointer 
          background-color: #87cbff
</style>