import { defineStore } from "pinia"
import { getHomeCategories, getHotSuggests } from "@/services/modules/home" 
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },

    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
})

export default useHomeStore