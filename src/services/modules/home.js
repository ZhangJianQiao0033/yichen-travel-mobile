import YCRequest from "@/services/request/index"
export function getHotSuggests() {
  return YCRequest.get({
    url: "/home/hotSuggests"
  })
}