<template>
        <div class="container">
            <transition mode="out-in">
                <component :is="$currentComponent" /> 
            </transition>
        </div>
</template>

<script>
import Categories from './components/Categories.vue';
import Questions from './components/Questions.vue';
import Answer from './components/Answer.vue';

export default {
    components: { Categories, Questions, Answer },

    computed: {
        $currentComponent() {
            return this.$store.getters.$currentComponent;
        },
    }
}
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: opacity ease-in-out 0.2s;
}
</style>

