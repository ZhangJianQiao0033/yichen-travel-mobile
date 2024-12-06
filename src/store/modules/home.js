import { defineStore } from "pinia"
import { getHotSuggests } from "@/services/modules/home" 
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore