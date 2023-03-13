<template>
    <div>
     <h1>filter</h1>   
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>



<!-- <template>
    <div>
      <input type="text" v-model="search" placeholder="Search...">
      <select v-model="category">
        <option value="">All categories</option>
        <option value="Art">Art Pieces</option>
        <option value="NFT">NFTs</option>
      </select>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        category: '',
        search: ''
      }
    },
    computed: {
      filteredProducts() {
        let filtered = this.products;
  
        if (this.category) {
          filtered = filtered.filter(product => product.category === this.category);
        }
  
        if (this.search) {
          filtered = filtered.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()));
        }
  
        return filtered;
      }
    },
    mounted() {
      axios.get('https://art-attack.onrender.com/products')
        .then(response => {
          this.products = response.data;
        });
    }
  }
  </script> -->