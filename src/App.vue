<template>
 <NavBar/>
  <router-view/>
<FooterComp/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
components:{
 NavBar,FooterComp
}
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(https://i.postimg.cc/CxkY42bK/pexels-anni-roenkae-3109816.jpg);
  height: 100vh;
  background-repeat: no-repeat;
background-size: cover;
overflow-y: hidden;
overflow-x: hidden;


}

nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  font-size: x-large;
}

nav a.router-link-exact-active {
  color: rgb(185, 26, 180);
}
</style>
