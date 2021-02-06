<template>
  <header>
    <a href="#" class="profile">
      <div class="btn-top">
        <p>Profile</p>
      </div>
    </a>
    <form action="#">
        <input type="text" placeholder="Search..." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <div class="menu">
        <router-link to="/cart" class="item">
            <p class="fa fa-shopping-cart"></p>
        </router-link>
        <router-link to="/wishlist" class="item">
            <p class="fa fa-heart"></p>
        </router-link>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="sass" scoped>
header 
    background-color: #99d3ff
    display: flex
    top: 0
    justify-content: space-between
    .profile
        background-color: #91cfff
        text-align: center
        .btn-top
            height: 100% 
            width: 150px
        p 
            font-size: 20px
        &:hover 
            background-color: #87cbff
    form 
        padding-top: 10px
        input
            border: none
            border-radius: 8px 0 0 8px
            height: 80%
            width: 30vw
        button 
            background-color: #eaeaea
            border: none 
            border-radius: 0 8px 8px 0
            height: 83%
    .menu 
        padding-top: 5px
        font-size: 20px
        .item 
            margin-right: 3rem
            p 
                color: #fcfcfc
</style>