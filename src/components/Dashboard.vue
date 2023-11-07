<template>
  <div class="w-full h-screen flex justify-start items-start overflow-hidden">
    <div
      class="w-[7vw] h-full bg-white flex flex-col gap-1 p-2.5 shadow-[1px_0px_25px_-5px_rgba(0,0,0,0.3)]"
    >
      <div
        class="w-full aspect-square bg-white shadow-[0px_0px_7px_0px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-center gap-1 items-center p-1"
      >
        <img src="../assets/Icon1.svg" class="w-[40%]" />
        <p class="text-gray-500 w-full text-[10px] text-center">Dashboard</p>
      </div>
      <div
        class="w-full aspect-square flex flex-col justify-center gap-1 items-center p-1"
      >
        <img src="../assets/icon2.svg" class="w-[40%]" />
        <p class="text-gray-500 w-full text-[10px] text-center">Analytics</p>
      </div>
      <div
        class="w-full aspect-square flex flex-col justify-center gap-1 items-center p-1"
      >
        <img src="../assets/icon3.svg" class="w-[40%]" />
        <p class="text-gray-500 w-full text-[10px] text-center">Trading</p>
      </div>
      <div
        class="w-full aspect-square flex flex-col justify-center gap-1 items-center p-1"
      >
        <img src="../assets/icon4.svg" class="w-[40%]" />
        <p class="text-gray-500 w-full text-[10px] text-center">
          Notifications
        </p>
      </div>
      <div class="flex-1 flex flex-col justify-end">
        <div

        @click="logout"

          class="w-full cursor-pointer aspect-square flex flex-col justify-center gap-1 items-center p-1"
        >
          <img src="../assets/logout.svg" class="w-[40%]" />
          <p class="text-gray-500 w-full text-[10px] text-center">Logout</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 h-full items-start px-12 py-12">
      <div class="w-full flex justify-between items-start">
        <div>
          <h2 class="text-4xl font-medium text-gray-900">Dashboard</h2>
          <span class="text-xs mt-2 text-gray-500">{{ user }}</span>
        </div>
        <div class="flex gap-3 items-center">
          <button
            class="pl-2 py-1 pr-3 bg-blue-500 text-white text-sm flex items-center rounded-md"
          >
            <span class="text-3xl -mt-1 mr-">+</span> Add Unit
          </button>
          <div class="flex items-center gap-1">
            <img
              src="../assets/icon4.svg"
              class="w-10 h-10 rounded-full border-2"
            />
            <span class="text-sm text-gray-500">{{ user }}</span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between items-center gap-2 mt-10">
        <div class="flex flex-col gap-3">
          <h3 class="uppercase text-gray-400 text-sm tracking-widest">
            Balance
          </h3>
          <h2 class="text-gray-900 text-3xl font-medium">$5900.00</h2>
        </div>
        <div class="w-[1px] h-[70px] bg-gray-300"></div>
        <div class="flex flex-col gap-3">
          <h3 class="uppercase text-gray-400 text-sm tracking-widest">
            Profits
          </h3>
          <div class="flex items-center gap-5">
            <h2 class="text-gray-900 text-3xl font-medium">$950.00</h2>
            <span class="text-blue-500 text-xs font-medium">+56%</span>
          </div>
        </div>
        <div class="w-[1px] h-[70px] bg-gray-300"></div>
        <div class="flex flex-col gap-3">
          <h3 class="uppercase text-gray-400 text-sm tracking-widest">
            Losses
          </h3>
          <div class="flex items-center gap-5">
            <h2 class="text-gray-900 text-3xl font-medium">$450.00</h2>
            <span class="text-orange-500 text-xs font-medium">+56%</span>
          </div>
        </div>
        <div class="w-[1px] h-[70px] bg-gray-300"></div>
        <div class="flex flex-col gap-3">
          <h3 class="uppercase text-gray-400 text-sm tracking-widest">
            Currencies
          </h3>
          <div class="flex justify-start gap-1 mt-2">
            <div class="h-8 w-8 bg-blue-100 rounded-full">
              <img src="../assets/bitcoin.svg" class="w-full h-full p-2" />
            </div>
            <div class="h-8 w-8 bg-blue-100 rounded-full">
              <img src="../assets/dollar.svg" class="w-full h-full p-2" />
            </div>
            <div class="h-8 w-8 bg-blue-100 rounded-full">
              <img src="../assets/euro.svg" class="w-full h-full p-2" />
            </div>
            <div class="h-8 w-8 bg-blue-100 rounded-full">
              <img src="../assets/yen.svg" class="w-full h-full p-2" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-white shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] mt-10 grid grid-cols-6 gap-2"
      >
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">Italy</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">475</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base font-medium">Icon</span>
        </div>
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">United States</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">431</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base">Icon</span>
        </div>
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">Canada</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">174</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base">Icon</span>
        </div>
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">Spain</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">475</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base">Icon</span>
        </div>
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">Japan</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">134</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base">Icon</span>
        </div>
        <div class="flex flex-col items-center py-10 gap-3">
          <span class="text-xs font-medium text-gray-500">South Africa</span>
          <p class="flex justify-center items-center gap-1 w-full">
            <span class="text-3xl font-semibold text-gray-900">471</span
            ><span class="text-xs">icon</span>
          </p>
          <span class="text-base">Icon</span>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-14 mt-10">
        <div class="w-full flex flex-col gap-3">
          <div class="w-full flex justify-between items-center mb-4">
            <h2 class="text-gray-900 text-2xl font-medium">Team Members</h2>
            <span class="text-sm text-blue-600 font-medium">View All</span>
          </div>
          <div
            class="flex justify-between items-center w-full shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] p-4 rounded-lg"
          >
            <div class="flex-1 flex justify-start items-center gap-4">
              <img
                src="../assets/icon4.svg"
                class="w-10 h-10 rounded-full border-2"
              />
              <span class="text-base font-medium text-gray-500">{{
                user
              }}</span>
            </div>
            <button
              class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
            >
              Top Trader
            </button>
          </div>
          <div
            class="flex justify-between items-center w-full shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] p-4 rounded-lg"
          >
            <div class="flex-1 flex justify-start items-center gap-4">
              <img
                src="../assets/icon4.svg"
                class="w-10 h-10 rounded-full border-2"
              />
              <span class="text-base font-medium text-gray-500"
                >Anna Atkinsons</span
              >
            </div>
            <button
              class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
            >
              Manager
            </button>
          </div>
          <div
            class="flex justify-between items-center w-full shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] p-4 rounded-lg"
          >
            <div class="flex-1 flex justify-start items-center gap-4">
              <img
                src="../assets/icon4.svg"
                class="w-10 h-10 rounded-full border-2"
              />
              <span class="text-base font-medium text-gray-500"
                >Mark Atkinsons</span
              >
            </div>
            <button
              class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
            >
              Top Trader
            </button>
          </div>
          <div
            class="flex justify-between items-center w-full shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] p-4 rounded-lg"
          >
            <div class="flex-1 flex justify-start items-center gap-4">
              <img
                src="../assets/icon4.svg"
                class="w-10 h-10 rounded-full border-2"
              />
              <span class="text-base font-medium text-gray-500"
                >Johanna Tairons</span
              >
            </div>
            <button
              class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
            >
              Manager
            </button>
          </div>
        </div>
        <div class="w-full flex flex-col gap-3">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-gray-900 text-2xl font-medium">Comparison</h2>
            <span class="text-sm text-blue-600 font-medium">View All</span>
          </div>
          <div
            class="p-7 shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)] w-full mt-4 gap-3"
          >
            <div class="w-full flex flex-col gap-2">
              <div class="flex justify-start items-center gap-3">
                <img src="../assets/usa.svg" />
                <span class="text-sm font-medium">United States</span>
              </div>
              <div class="w-full flex items-center gap-2">
                <div class="bg-blue-500 w-[93%] h-1.5 rounded-full"></div>
                <span class="text-sm font-medium">93%</span>
              </div>
              <div class="flex justify-start items-center gap-3 mt-8">
                <img src="../assets/italy.svg" />
                <span class="text-sm font-medium">Italy</span>
              </div>
              <div class="w-full flex items-center gap-2">
                <div class="bg-blue-500 w-[73%] h-1.5 rounded-full"></div>
                <span class="text-sm font-medium">73%</span>
              </div>
              <div class="flex justify-start items-center gap-3 mt-8">
                <img src="../assets/spain.svg" />
                <span class="text-sm font-medium">Spain</span>
              </div>
              <div class="w-full flex items-center gap-2">
                <div class="bg-blue-500 w-[13%] h-1.5 rounded-full"></div>
                <span class="text-sm font-medium">13%</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useAuthStore } from "../store/AuthStore";
const authStore = useAuthStore();
const router = useRouter()
const user = computed(() => {
  return authStore.user;
});

onMounted(async() => {
  const isUserPresent =await authStore.initializeUser()

  if(!isUserPresent){
    router.push('/login')
  }


})
const logout = ()=>{
  authStore.logout()
  router.push('/login')
}
</script>
