<template>
  <div class="header">
      <div class="nav">
          <router-link class="button" tag="button" to="/">
          Home
          </router-link>
          <router-link class="button" tag="button" to="/favorites">
          Favorites
          </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    display: flex;
   justify-content: center;
   margin: 25px 0px 25px 0px;
   height: 50px;
}

.nav{
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    align-items: center;
    background-color: #808080
}

.button{
    height: 25px;
    color: #ABABAB;
    display: flex;
    padding: 15px;
    align-items: center;
    border: none;
    cursor: pointer;
}
</style>