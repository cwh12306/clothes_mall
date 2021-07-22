import { COUNT_ADD, CARTLIST_PUSH } from "./mutations-types";
const actions = {
  addToCartList(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.product.iid
      );
      if (oldProduct) {
        context.commit(COUNT_ADD, oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.product.count = 1;
        context.commit(CARTLIST_PUSH, payload.product);
        resolve("添加到购物车成功");
      }
    });
  }
};

export default actions;
