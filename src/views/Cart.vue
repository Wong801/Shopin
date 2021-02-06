<template>
    <Header />
    <h3>This is a cart page</h3>
    <router-link to="/shop">Back to shop page</router-link>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Cart',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>