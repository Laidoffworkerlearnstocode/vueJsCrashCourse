import { defineStore } from "pinia";

const useCounterStore = defineStore({
    id: "counter",
    state(){
        return {
            count: 0,
        }
    },
    actions: {
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        },
    },
    getters: {
        oddOrEven(){
            if (this.count % 2 === 0) {
                return "This is a even number"
            } else {
                return "This is a odd number"
            }
        },
    },
})

export {useCounterStore};

