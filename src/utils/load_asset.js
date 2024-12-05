export const getAssetURL = (imgUrl) => {
  return new URL(`../assets/img/${imgUrl}`, import.meta.url).href
}