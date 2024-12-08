
import { defineStore } from "pinia"


const startDate = new Date()
const newDate = new Date()
newDate.setDate(newDate.getDate() + 1)
const endDate = newDate

const useMainStore = defineStore("main", {
  state: () => {
    return {
      startDate: startDate,
      endDate: endDate,
      isLoading: false
    }
  }
})

export default useMainStore