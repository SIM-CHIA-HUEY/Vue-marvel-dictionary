<template>
    <div class="header sticky-top">
        <router-link style="text-decoration: none;" :to="{ name: 'Home' }">
            <h1>MARVELTERS</h1>
        </router-link>
    </div>
</template>

<style scoped>
h1{
    color:#FBCA03;
}

.header{
    background-color:#171717;
    padding-top : 3vh;
    padding-bottom : 2vh;
    margin-bottom : 5vh;
    box-shadow: 1px 1px 10px rgba(106,12,11,0.7);

}

</style>