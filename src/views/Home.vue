<template>
  <div class="home">
    <Header/>
    
    <Characters />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Characters from '@/components/Characters.vue'
export default {
  name: 'Home',
  components: {
    Characters,
    Header, 
    Footer
  }
  
}
</script>