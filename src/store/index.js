import { createStore } from 'vuex';

export default createStore({
    state: {
        faq: [],
        chosenCategory: [],
        chosenQuestion: [],
        currentComponent: 'Categories',
    },

    mutations: {
        SET_FAQ(state, data) {
            state.faq = data;
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

        fetchFaq(context, faq) {              
            context.commit('SET_FAQ', faq)
        },

        setChosenCategory(context, category) {
            context.commit('SET_CHOSEN_CATEGORY', category);
        }, 
        
        setChosenQuestion(context, question) {
            context.commit('SET_CHOSEN_QUESTION', question)
        }
    },

    getters: {
        $faqData(state) {
            return state.faq
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
