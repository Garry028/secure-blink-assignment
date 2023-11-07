<script setup>
import About from '../components/AboutPage.vue';
import Contact from '../components/Contact.vue';
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Services from '../components/Services.vue';
import Technologies from '../components/Technologies.vue';
</script>

<template>
  <div style="backgroundImage:url('./src/assets/back.svg')" class="h-auto w-full bg-contain bg-no-repeat">
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Technologies/>
    <Contact/>
  </div>
</template>
