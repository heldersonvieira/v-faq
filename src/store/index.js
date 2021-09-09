import { createStore } from 'vuex';

export default createStore({
    state: {
        categories: [],
        chosenCategory: [],
        chosenQuestion: [],
        currentComponent: 'Categories',
    },

    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data;
        },

        SET_CHOSEN_CATEGORY(state, data) {
            state.chosenCategory = data;
        },

        SET_CURRENT_COMPONENT(state, component) {
            state.currentComponent = component;
        },

        SET_CHOSEN_QUESTION(state, question) {
            state.chosenQuestion = question;
        }
    },

    actions: {
        setCurrentComponent(context, component) {
            context.commit('SET_CURRENT_COMPONENT', component);
        },

        fetchCategories(context, categories) {              
            context.commit('SET_CATEGORIES', categories)
        },

        setChosenCategory(context, category) {
            context.commit('SET_CHOSEN_CATEGORY', category);
        }, 
        
        setChosenQuestion(context, question) {
            context.commit('SET_CHOSEN_QUESTION', question)
        }
    },

    getters: {
        $categories(state) {
            return state.categories
        },

        $chosenCategory(state) {
            return state.chosenCategory;
        },

        $currentComponent(state) {
            return state.currentComponent;
        },

        $chosenQuestion(state) {
            return state.chosenQuestion;
        }
    }
})
