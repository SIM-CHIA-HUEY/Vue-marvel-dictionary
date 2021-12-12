<template>
    <div class="header fixed-top">
        <router-link style="text-decoration: none;" :to="{ name: 'Home' }">
            <h1>MARVELTERS</h1>
        </router-link>
    </div>
</template>

<script>



</script>

<style scoped>
h1{
    color:#FBCA03;
    text-align: center !important;
}

.header{
    background-color:#171717;
    padding-top : 3vh;
    padding-bottom : 2vh;
    box-shadow: 1px 1px 10px rgba(106,12,11,0.7);

}

</style>