import request from "@/utils/request";

export function getTest() {
  return request("/api/test", "GET", { test: "test", test2: "test2" });
}
