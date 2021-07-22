import { COUNT_ADD, CARTLIST_PUSH } from "./mutations-types";
const mutations = {
  [COUNT_ADD](state, payload) {
    payload.count++;
  },
  [CARTLIST_PUSH](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  }
};

export default mutations;
