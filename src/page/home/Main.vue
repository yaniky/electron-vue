<template>
  <div>
    <div>count: {{ count }}</div>
    <div>double: {{ doubleCount }}</div>
    <button @click="incrementIfOddOnRootSum">
      plus
    </button>
    <br>
    <router-link :to="{name: 'Total'}">
      to total
    </router-link>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "Home",
    setup() {
        const store = useStore();
        const count = computed(() => store.state.config.count);
        const doubleCount = computed(() => store.getters["config/doubleCount"]);

        return {
            count,
            doubleCount,
            incrementIfOddOnRootSum: () => store.dispatch("config/incrementIfOddOnRootSum")
        };
    }
};
</script>