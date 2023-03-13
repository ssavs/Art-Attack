<template>
        <div class="container mb-4">
  <div class="row"> 
      <div class="col">
          <h2>Contact Our Team !</h2>
          <form
          action="https://formspree.io/f/xnqyzzkq"
          method="POST"
          >
          <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email" >Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="5" name="message" required></textarea>
            </div>
            <button type="submit" class="btn btn-dark m-3" style="background-color: #b13095;">Send</button>
        </form>
    </div>
    <div class="col info">
      <h4><i class="fa-solid fa-location-dot"></i> 319 Kloof Street</h4>
      <h5>Cape Town ,South Africa</h5>
      <h4><i class="fa-solid fa-phone"></i> 021 365 9816</h4>
      <h4><i class="fa-solid fa-envelope"></i> ArtAttack2023@gmail.com</h4>
    </div>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    height: 90vh;
    background-color: #f7f7f296;
    padding-top:10rem;
    font-size: large;
  }
    
    .info{
        margin-top: 10%;
    }
</style>


