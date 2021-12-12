<template>
    <Header/>
    <div>    
        Ow ! Got caught by a villain because of wrong typing in the URL.
        <br>
        DO NOT WORRY
        <br>
        Click on MARVELTERS and get back to the Marvel heroes ;)
    </div>
    <Footer />

</template>

<script> 
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'PageNotFound',
    
    components: {
    Header,
    Footer
    },
}
</script>

<style scoped>
div{
    padding-top:200px;
    text-align: center;
    font-size: x-large;

}
</style>