<template>
  <Header />
  <h3>This is a wishlist page</h3>
  <router-link to="/shop">Back to shop page</router-link>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Wishlist',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>