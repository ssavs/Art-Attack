<template>
  <div class="home">
    <div class="container text-start">
      <div class="row">
        <div class="col">
          <div class="words">
            <h1>WELCOME TO OUR ART GALLERY !</h1>
            <p>
              Art Attack gallery creates a curated exhibition program of our
              represented artists with whom we have a collaboration, supporting
              and monitoring their careers, selling their artworks, and
              promoting them to grow their careers, as well as helping them
              create the artworks in our studio.
            </p>
            <p>
              Art Attack sells and promotes two different types of artwork such
              as : NFTS and Canvas Art Pieces.
            </p>
            <p>
              NFT art is digital art that is tokenized in the blockchain. The
              artwork is entirely digital, meaning that investors ultimately
              buy, sell and trade in the Metaverse. Just like there is only one
              original with physical art, NFT art only has one original.
            </p>
            <a class="btn btn-dark shop" href="#" role="button"
              ><router-link to="/products">Get Your Art Today !</router-link></a
            >
          </div>
        </div>
        <div class="col">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img
                  src="https://i.postimg.cc/xCbdNQJq/a04ebf-dfbafdf79720453391ec53c00cf6eec1-mv2.webp"
                  class="d-block rounded mx-auto d-block w-75"
                  alt=""
                  width="300"
                  height="300"
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://i.postimg.cc/65BNcwQY/nfts-640x388.jpg"
                  class="d-block rounded mx-auto d-block w-75"
                  alt=""
                  width="300"
                  height="300"
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://i.postimg.cc/kGbvzDvz/blessing-ngobeni-opressed-and-shall-rise.jpg"
                  class="d-block rounded mx-auto d-block w-75"
                  alt=""
                  width="300"
                  height="300"
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://i.postimg.cc/mDFdfdbm/vente-art-nft-ester-barend-ravishing-big-scaled-e1641745893579.jpg"
                  class="d-block rounded mx-auto d-block w-75"
                  alt=""
                  width="300"
                  height="300"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   name: 'HomeView',
  //   components: {HomeView
  //   }
};
</script>
<style scoped>
.home {
  background-color: #f7f7f2;
  height: 100vh;
  overflow-y: hidden;
  padding-top: 10rem;
  background: linear-gradient(-45deg, #b13095, #c49ac4);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.shop a {
  color: white;
  text-decoration: none;
}
.words {
  color: #E9EDC9;
  font-size: large;

  height: 100%;
  align-items: center;
  justify-content: center;
}
#carouselExampleInterval {
  margin-top: 30px;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .home {
    padding-top: 20rem;
    height: 180vh;
  }
}

</style>

<!-- 
body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} -->
