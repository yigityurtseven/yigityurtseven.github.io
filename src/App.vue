<script setup>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Work from './components/Work.vue';
import About from './components/About.vue'
import SelectedProjects from './components/SelectedProjects.vue'
import Contact from './components/Contact.vue';
import { onMounted } from 'vue';
import ThemeToggle from './components/ThemeToggle.vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
</script>

<template>
  <div class="bg-stone-100 dark:bg-slate-900 tracking-tight pb-20">
    <Navbar></Navbar>
    <ThemeToggle></ThemeToggle>
    <Header id="home"></Header>
    <Work id="work"></Work>
    <About id="about"></About>
    <SelectedProjects class="mt-20" id="projects"></SelectedProjects>
    <Contact class="mt-20" id="contact"></Contact>
  </div>
</template>

<style>
* {
  font-family: 'Helvetica';
  scroll-behavior: smooth;
}
</style>
