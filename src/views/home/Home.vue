<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
  </div>
</template>
<script>
import NavBar from "$components/common/navbar/NavBar";
import { getHomeMultiData } from "$network/home";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultiData().then(result => {
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    });
  }
};
</script>
<style>
.home-nav {
  background-color: #ff8198;
  color: white;
}
</style>
