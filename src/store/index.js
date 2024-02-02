import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        counter: 0,
        colorCode: ''
    },
    mutations: {
        increaseCounter: (state, randomNumber) => {
            state.counter += randomNumber
        },
        decreaseCounter: (state, randomNumber) => {
            if (state.counter - randomNumber < 0) {
                state.counter = 0
            } else {
                state.counter -= randomNumber
            }
        },
        clearCounter: (state) => {
            state.counter = 0
        },
        updateColorCode: (state, colorCode) => {
            state.colorCode = colorCode
        }
    },
    actions: {
        increaseCounter: ({ commit }) => {
            axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response => {
            const randomNumber = response.data   
            commit('increaseCounter', randomNumber)
            })
        },
        decreaseCounter: ({ commit }) => {
            axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response => {
            const randomNumber = response.data   
            commit('decreaseCounter', randomNumber)
            })
        },
        clearCounter: ({ commit }) => {
            commit('clearCounter');
        },
        updateColorCode: ({ commit }, newColor) => {
            commit('updateColorCode', newColor);
        }
    },
    getters: {
        counterSquared: state => {
            return state.counter * state.counter
        }
    },
})