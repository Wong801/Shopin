<template>
  <footer>
    <p>&#169; Wong801</p>
    <router-link to="/about">
    <p>About</p>
    </router-link>
    <div class="link">
        <a href="https://github.com/Wong801" target="_blank" class="fa fa-github"></a>
        <a href="https://www.instagram.com/Wong801/" target="_blank" class="fa fa-instagram"></a>
        <a href="https://t.me/Wong801" target="_blank" class="fa fa-telegram"></a>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass" scoped>
footer 
    border-top: 1px solid #a3a0a0
    display: flex 
    justify-content: space-evenly
    font-size: 16px
    bottom: 0
    p 
        color: #a3a0a0
    .link 
        display: flex
        padding-top: 18px
        justify-content: space-between
        width: 100px
        a 
            color: #a3a0a0

</style>