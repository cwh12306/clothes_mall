import { request } from "$network/request";

export function getHomeMultiData() {
  return request({ url: "/home/multidata" });
}
export function getHomeData(type, page) {
  return request({ url: "/home/data", params: { page, type } });
}
