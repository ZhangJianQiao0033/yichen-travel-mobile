import YCRequest from "@/services/request"

export function getCityAll() {
  return YCRequest.get({
    url: "/city/all"
  })
}