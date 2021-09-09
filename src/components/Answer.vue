<template>
    <div>
        <header class="header__question">
            <img
                title="Voltar para as perguntas"
                class="comeBack icon" 
                src="@/assets/images/arrow-left.svg" 
                alt="Voltar para pagina principal da FAQ"
                @click="goToQuestions"
            >
            
            <h2 class="answer__title">{{ $chosenQuestion.title }}</h2>

            <img
                title="Voltar para as categorias"
                class="goToHome icon" 
                alt="Astronalta em uma lua de perguntas" 
                src="@/assets/images/home.svg"
                @click="goToHome"
            >
        </header>
        <section class="answer">
            <p v-html="$chosenQuestion.content" class="answer__content">
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Answer',

    computed: {
        $chosenQuestion() {
            return this.$store.getters.$chosenQuestion;
        }
    },

    methods: {
        goToQuestions() {
            this.$store.dispatch('setCurrentComponent', 'Questions');
        },

        goToHome() {
            this.$store.dispatch('setCurrentComponent', 'Categories');
        }
    }
}
</script>

<style scoped>
.header__question {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid var(--gray);
}

.comeBack, .goToHome {
    width: 30px;
    padding: 0.4rem;
    border-radius: 5px;
    transition: all 0.3s;
}

.goToHome {
    margin: 0;
    padding: 0.1rem;
}

.comeBack:hover, .goToHome:hover {
    background: var(--black);
}

.answer__title {
    font-size: 15px;
    padding: 0.3rem 0.5rem;
}

.answer {
    padding: 1rem;
}

.answer__content {
    text-align: left;
    font-size: 0.813rem;
    line-height: 1.25rem;
}

</style>