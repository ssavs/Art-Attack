<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <img
        src="https://i.postimg.cc/XqV0g2BD/Screenshot-2023-03-13-120218-removebg-preview.png"
        alt="Logo"
        width="150"
        height="100"
        class="d-inline-block align-text-top"
      />
      <button
        class="navbar-toggler btn m-0 p-1 pt-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon toggle"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex justify-content-between w-100">
            <div class="left d-flex flex-column flex-lg-row">
                <a class="nav-link active" aria-current="page"><router-link to ='/'>HOME</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/about'>ABOUT</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/products'>ART</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/admin'>ADMIN</router-link></a>
                <a class="nav-link active" aria-current="page"><router-link to ='/contact'>CONTACT</router-link></a>
            </div>


<div class="right d-flex flex-column flex-lg-row">
    <div class="icons d-flex flex-column flex-lg-row">
      <a href="" class="me-lg-3">
        <i class="fa-solid fa-cart-shopping shopping"></i>
      </a>
      <a href="" class="me-lg-3">
        <i class="fa-solid fa-heart heart"></i>
      </a>

    </div>
        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle dropdown1 me-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-user me-3"></i>        
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
    background-color:rgb(81,81,81);
}

.btn {
    color: aliceblue;
    background-color:rgb(185, 26, 180) ;
}

/* .btn span{
  color: #000;
  background-color: #00000078;
} */

.navbar :hover {
    color: rgb(185, 26, 180);
}

.drop{
    background-color: black;
}

.dropdown1 {
    color: aliceblue;
    background-color:rgba(0, 0, 0, 0.208);
    border-radius: 10%;
}

.icons{
    font-size: x-large;
    color: white;
}

.heart{
  padding-top: 0.75rem;
}

.shopping{
  padding-top: 0.75rem;
}

</style>
