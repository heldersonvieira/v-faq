<template>
    <div>
        <header class="header__faq">
            <img class="faq__image" src="@/assets/images/astronaut-faq.svg" alt="Astronalta em uma lua de perguntas">
            <h1 class="faq__title">Perguntas frequentes</h1>
            <p class="faq__subtitle">Escolha a categoria desejada</p>
        </header>

        <section class="categories">
            <ul>
                <li 
                    class="category" 
                    v-for="category in $faqCategories" 
                    :key="category.id"
                    @click="goToQuestionsChosenCategory(category)" 
                >
                    <img class="category__icon icon" :src="pathIcon(category.icon)" :alt="`Icone do ${category.title}`">
                    <p class="category__title">{{ category.title }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Categories',

    computed: {
        $faqCategories() {
            return this.$store.getters.$categories;
        },
    },

    async created() {
        const categories = await this.$api.get('faqCategories');

        this.$store.dispatch('fetchCategories', categories);
    },

    methods: {
        pathIcon(icon) {
            return require(`@/assets/images/${icon}`)
        },

        async goToQuestionsChosenCategory(category) {
            this.$store.dispatch('setCurrentComponent', 'Questions');            
            this.$store.dispatch('setChosenCategory', category);
        },
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header__faq {
    padding: 0.8rem 1.5rem;
}

.faq__title {
    font-size: 20px;
    margin: 0.5rem 0;
}

.faq__subtitle {
    font-size: 13px;
}

.category {
    height: 50px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 1.5rem;
    border-radius: 3px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
}

.category:hover {
    background: var(--gray);
}
</style>
