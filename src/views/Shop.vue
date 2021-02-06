<template>
  <Header />
  <div class="wraper">
    <div class="item" v-bind:key="item.id" v-for="item in shop">
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

export default {
  name: 'Shop',
  components: {
    Header,
    Footer
  }, 
  data() {
    return {
      shop: [
        {
          id: 1,
          imgURL: '',
          title: 'Produk 1',
          price: 100000
        },
        {
          id: 2,
          imgURL: '',
          title: 'Produk 2',
          price: 200000
        },
        {
          id: 3,
          imgURL: '',
          title: 'Produk 3',
          price: 1000000
        },
        {
          id: 4,
          imgURL: '',
          title: 'Produk 4',
          price: 500000
        },
        {
          id: 5,
          imgURL: '',
          title: 'Produk 5',
          price: 675000
        },
        {
          id: 6,
          imgURL: '',
          title: 'Produk 6',
          price: 1500000
        },
      ]
    }
  }
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
    width: 30vw
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