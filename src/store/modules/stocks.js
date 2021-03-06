import stocks from '../../data/stocks'
const state = {
  stocks: []
}
const mutations = {
  'SET_STOCKS' (state, stock) {
    state.stocks = stock
  },
  'RND_STOCK' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}
const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStock: ({commit}) => {
    commit('RND_STOCK')
  }
}

const getters = {
  stock: state => {
    return state.stocks
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
