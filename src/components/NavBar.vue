<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <img
        src="https://i.postimg.cc/fTh11ZSY/Screenshot-2023-03-07-092424-removebg-preview.png"
        alt="Logo"
        width="200"
        height="150"
        class="d-inline-block align-text-top"
      />
      <button
        class="navbar-toggler btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon toggle"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex justify-content-between w-100">
            <div class="left d-flex">
                <a class="nav-link active" aria-current="page"><router-link to ='/'>HOME</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/about'>ABOUT</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/products'>ART</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/admin'>ADMIN</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/contact'>CONTACT</router-link></a>
            </div>


<div class="right d-flex">
    <div class="icons">
      <i class="fa-solid fa-cart-shopping"></i>
     <i class="fa-solid fa-heart"> <router-link to='/wishlist'></router-link></i>
     <i class="fa-solid fa-user"></i>
    </div>
        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle dropdown1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        USER
      </a>
      <ul class="dropdown-menu drop" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item"><router-link to='/login'>Login</router-link></a></li>
        <li><a class="dropdown-item"><router-link to='/register'>Register</router-link></a></li>
      </ul>
</li>
</div>



        </div>
      </div>
</div>
</nav>
          </template>
<script>
export default {};
</script>
<style scoped>
.container{
    font-size: x-large;
}
 
.navbar{
    background-color: rgba(248, 130, 207, 0.488);
}

.btn {
    color: aliceblue;
    background-color: rgb(137, 12, 133);
}


.navbar :hover {
    color: rgb(137, 12, 133);
}

.drop{
    background-color: black;
}

.dropdown1 {
    color: aliceblue;
    background-color:rgba(0, 0, 0, 0.208);
}

.icons{
    font-size: x-large;
    gap: 3rem;
}

</style>
