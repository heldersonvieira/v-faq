<template>
    <div>
        <header class="header__questions">
            <img 
                title="Voltar para categorias"
                class="comeBack icon" 
                src="@/assets/images/arrow-left.svg" 
                alt="Voltar para pagina principal da FAQ"
                @click="goToCategories"
            >
            <div class="box__title">
                <h1 class="questions__title">{{ $chosenCategory.title }}</h1>
                <p class="questions__subtitle">Selectione uma pergunta</p>
            </div>
            <img 
                class="icon" 
                alt="Astronalta em uma lua de perguntas" 
                :src="pathIcon($chosenCategory.icon)"
            >
        </header>
        <section class="questions">
            <ul>
                <li
                class="question"
                v-for="question in $chosenCategory.questions"
                :key="question.id"
                @click="goToChosenQuestion(question)"
                >
                    <p>{{ question.title }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Questions',

    computed: {
        $chosenCategory() {
            return this.$store.getters.$chosenCategory;
        }
    },

    methods: {
        pathIcon(icon) {
            return require(`@/assets/images/${icon}`);
        },

        goToCategories() {
            this.$store.dispatch('setCurrentComponent', 'Categories');
        },

        goToChosenQuestion(question) {
            this.$store.dispatch('setCurrentComponent', 'Answer');
            this.$store.dispatch('setChosenQuestion', question);
        }
    }
}
</script>

<style scoped>
.header__questions {
    height: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 2px solid var(--gray);
}

.comeBack {
    width: 30px;
    padding: 0.4rem 0.4rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.comeBack:hover {
    background: var(--black);
}

.questions__title {
    font-size: 20px;
    padding-bottom: 0.5rem;
}

.questions__subtitle {
    font-size: 13px;
}

.question {
    height: 50px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 1.5rem;
    border-radius: 3px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
}

.question:hover {
    background: var(--gray);
}
</style>