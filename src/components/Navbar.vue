<template>
    <nav class="bg-[#0e77ff] p-4 md:p-6 text-white">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-2xl font-semibold">Logo</span>
        </div>
        <div class="hidden md:flex items-center space-x-6">
          <ul class="flex space-x-4">
            <li class="cursor-pointer">About</li>
            <li class="cursor-pointer">Services</li>
            <li class="cursor-pointer">Case Studies</li>
            <li class="cursor-pointer">Testimonials</li>
            <li class="cursor-pointer">Contact</li>
          </ul>
          <router-link to="/login">
            <button class="block w-full mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md">
              Login
            </button>
          </router-link >
        </div>
        <!-- Mobile navigation button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu (hidden by default) -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4">
        <ul class="space-y-4">
          <li class="cursor-pointer">About</li>
          <li class="cursor-pointer">Services</li>
          <li class="cursor-pointer">Case Studies</li>
          <li class="cursor-pointer">Testimonials</li>
          <li class="cursor-pointer">Contact</li>
        </ul>
        <router-link to="/login">
          <button class="block w-full mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md">
            Login
          </button>
        </router-link >

    
      </div>
    </nav>
  </template>

  <script setup>
  import { ref } from 'vue';

  const isMobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  </script>
