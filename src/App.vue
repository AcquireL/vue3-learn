<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import AiEditor from "./views/AiEditor.vue"
// import AxiosTest from "./test/AxiosTest.vue"
// import Animation from "./components/Animation.vue";
// import DefineData from "./base/DefineData.vue";


// import Button from "./components/antdesign/Button.vue";
import Raffle from "./views/raffle/RaffleView.vue"
</script>

<template>
  <div>
    <!--    <a href="https://vite.dev" target="_blank">-->
    <!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
    <!--    </a>-->
    <!--    <a href="https://vuejs.org/" target="_blank">-->
    <!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
    <!--    </a>-->
    <!--  </div>-->
    <!--  <HelloWorld msg="Vite + Vue" />-->

    <!--    <nav>-->
    <!--      <router-link to="/">Home             </router-link>-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </nav>-->
    <!--    <router-view></router-view> &lt;!&ndash; 显示路由匹配的组件 &ndash;&gt;-->
    <Raffle />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
