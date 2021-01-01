<script>
  // Importing modules
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  // Importing components
  import Icon from "../../Icons/index.svelte";
</script>

<svelte:window on:mousemove={(e) => {
  let el = document.getElementById("background");

  el.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
  el.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
}} />

<!-- Main Container -->
<main class="w-full h-screen relative flex">
  <!-- Authorize -->
  <section class="relative w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
    <!-- Background -->
    <div id="background" style="z-index: 1; background-image: url('./background/1.svg');" class="absolute inset-0 w-full h-full"></div>

    <!-- Header -->
    <div style="z-index: 2;" class="absolute top-0 w-full px-6 py-4 flex items-center justify-between">
      <!-- Logotype -->
      <div class="flex items-center">
        <img style="height: 1.5rem;" src="./logotype/small-white.svg" alt="Lococovu Logotype">
        
        <!-- Divider -->
        <div style="width: 1.2px; height: 1.35rem;" class="mx-2 rounded-md bg-white"></div>

        <p class="text-md text-white">Авторизация</p>
      </div>

      <!-- Links -->
      <div class="flex items-center">
        <a class="text-xs text-white mx-4 opacity-50" href="/">Главная</a>
        <a class="border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/">Авторизация</a>
      </div>
    </div>

    <!-- Content -->
    <div style="z-index: 2;" class="w-2/3 flex flex-col items-center justify-center">
      <!-- Text -->
      <div class="text-center">
        <h1 class="text-2xl text-white">Авторизация</h1>
        <p class="text-xs text-gray-100">Для того, что бы начать пользоваться нашимы сервисами, Вам нужно авторизоваться.</p>
      </div>

      <!-- Buttons -->
      <div class="mt-4 px-4">
        <button class="w-full my-4 p-3 rounded-md bg-icon-button flex items-center opacity-80">
          <!-- Logotype -->
          <img style="height: 1.5rem; width: 1.5rem;" src="./logotype/google-white.svg" alt="Google Logotype">

          <!-- Texts -->
          <div class="ml-3 text-left">
            <h1 class="text-base text-white">Использовать Google</h1>
            <p class="text-xs text-gray-100">Для авторизации будет использован ваш личный аккаунт Google</p>
          </div>
        </button>

        <button class="w-full my-4 p-3 border border-dashed border-gray-700 rounded-md flex items-center opacity-50 cursor-not-allowed">
          <!-- Logo -->
          <Icon name="list" attrs={{ width: "1.5rem", height: "1.5rem", class: "text-white" }} />

          <!-- Texts -->
          <div class="ml-3 text-left">
            <h1 class="text-base text-white">Другие методы авторизации</h1>
            <p class="text-xs text-gray-100">Другие методы авторизации нахоядтся в разработке. Скоро всё будет, не переживайте!</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Disclamer -->
    <div style="z-index: 2;" class="absolute bottom-0 w-full flex justify-center items-center py-4">
      <p class="text-xs text-gray-100 opacity-75 w-2/3 text-center">Продолжая, вы соглашаетесь с <span class="border-b border-dotted border-gray-100">Правилами использования сервиса unfull.authed</span> и с <span class="border-b border-dotted border-gray-100">Правилами использования сервиса lococovu.me</span> <br />Там нет ничего странного и необычного, да ага!</p>
    </div>
  </section>

  <!-- Images (or Text) -->
  <section class="hidden lg:flex relative w-1/2 h-full bg-gray-200">
    
  </section>
</main>