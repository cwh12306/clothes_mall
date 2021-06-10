<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
  </div>
</template>
<script>
import NavBar from "$components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style>
.home-nav {
  background-color: #ff8198;
  color: white;
}
</style>
