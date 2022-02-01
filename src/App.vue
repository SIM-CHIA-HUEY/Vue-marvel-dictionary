<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

#app {
  font-family: 'Shadows Into Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #AA0505;
  color: #FFFFFF;
  vertical-align: middle !important;

  padding :0px !important;
  margin :0px !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #FBCA03;
}

#nav a.router-link-exact-active {
  color: #FBCA03;
}

</style>
