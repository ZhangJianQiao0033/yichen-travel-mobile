import YCRequest from "@/services/request/index"
export function getHotSuggests() {
  return YCRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getHomeCategories() {
  return YCRequest.get({
    url: "/home/categories"
  })
}