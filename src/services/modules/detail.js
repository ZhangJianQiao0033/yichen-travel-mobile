import YCRequest from "@/services/request/index"

export function getDetailInfosbyId(houseId) {
  return YCRequest.request({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}