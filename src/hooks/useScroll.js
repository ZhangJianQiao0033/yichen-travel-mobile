import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";
export default function useScroll(elRef) {
let el = window
const isReachBottom = ref(false)
const clientHeight = ref(0)
const scrollTop = ref(0)
const scrollHeight = ref(0)
const scrollListenerHandler = throttle(() => {
  if(el === window) {
    console.log("el1",el);
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
  } else {
    
    clientHeight.value = el.clientHeight
    scrollTop.value = el.scrollTop
    scrollHeight.value = el.scrollHeight
  }
  

  if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
    console.log("el2",el);
    isReachBottom.value = true
    
  }
},100)

onMounted(() => {
  if(elRef) {
    el = elRef.value
  }
  console.log("el",el);
  el.addEventListener("scroll", scrollListenerHandler)
})
onUnmounted(() => {
  if(elRef) {
    el = elRef.value
  }
  if(el) {
    el.removeEventListener("scroll", scrollListenerHandler)
  }
  
})
return {
  isReachBottom,
  clientHeight,
  scrollTop,
  scrollHeight
}
}