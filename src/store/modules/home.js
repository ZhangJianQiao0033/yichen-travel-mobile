import { defineStore } from "pinia"
import { getHomeCategories, getHomeHouseList, getHotSuggests } from "@/services/modules/home" 
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houselist: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },

    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore