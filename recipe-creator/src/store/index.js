import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'Katsu Curry',
        title: 'Katsu Curry',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 tablespoon olive oil',
          '1 tablespoon olive oil'
        ],
        methods: [
          'jefijewijdkd',
          'ejwdewdje',
          'wehewkjnwoidonoq'
        ]
      },

      {
        slug: 'Ramen',
        title: 'Ramen',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 tablespoon olive oil',
          '1 tablespoon olive oil'
        ],
        methods: [
          'jefijewijdkd',
          'ejwdewdje',
          'wehewkjnwoidonoq'
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})
