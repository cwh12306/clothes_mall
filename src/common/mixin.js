import BackTop from "$components/content/backtop/BackTop";
export const backTopVue = {
  components: {
    BackTop
  },
  data() {
    return { isShow: false, isFixed: false, tabToOffsetTop: 0 };
  },
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  }
};
