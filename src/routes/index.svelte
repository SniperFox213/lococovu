<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import profile from "../stores/profile.js";

  // Importing components
  import PageTransition from "../components/Loader/PageTransition.svelte";
  import Icon from "../Icons/index.svelte";
</script>

<svelte:window on:mousemove={(e) => {
  let el = document.getElementById("background");

  el.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
  el.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
}} />

<!-- Page Transition Component -->
<PageTransition />

<!-- Page's Layout -->
<div id="background" style="background-image: url('./background/1.svg');" class="absolute inset-0 w-full h-full"></div>

<main class="relative">
  <!-- Header -->
  <header class="w-full fixed top-0 py-6 px-8 flex items-center justify-center lg:justify-between">
    <!-- Logotype/Links -->
    <div class="flex items-center">
      <img style="height: 1.5rem;" src="./logotype/small-white.svg" alt="">

      <!-- Links -->
      <div class="ml-2 hidden lg:flex items-center">
        <a class="border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/">Главная</a>
        <a class="text-xs text-white mx-4 opacity-50 cursor-not-allowed" href="/">Библиотека</a>
        <a class="text-xs text-white mx-4 opacity-50 cursor-not-allowed" href="/">Команда</a>
        <a class="text-xs text-white mx-4 opacity-50 cursor-not-allowed" href="/">Поддержка</a>
      </div>
    </div>
    
    <!-- Join Discord -->
    <div class="flex items-center">
      <button on:click={(e) => {
        window.location.href = "https://discord.gg/36c2k7PFNj";
      }} class="px-4 py-2 rounded-md hidden lg:flex items-center bg-icon-button mx-3">
        <!-- Icon -->
        <img style="height: 1rem; width: 1rem;" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">
      
        <!-- Text -->
        <p class="text-sm text-white ml-2">Наш Дискорд</p>
      </button>

      { #if $profile.id != null }
        <!-- Go to App -->
        <button on:click={(e) => {
          goto('/app');
        }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="mx-3 px-4 py-2 rounded-md hidden lg:flex items-center">
          <!-- Icon -->
          <Icon name="airplay" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

          <!-- Text -->
          <p class="text-sm text-white ml-2">Перейти в Приложение</p>
        </button>

        <!-- Profile -->
        <div class="mx-3 flex items-center">
          <!-- Avatar -->
          <div style="background: url('{ $profile.internalAvatar }'); background-size: cover;" class="w-12 h-12 rounded-md"></div>

          <!-- Nickname -->
          <!-- <div class="mx-3 relative px-3">
            <h1 class="text-base text-white">{ $profile.nickname == null ? $profile.displayName : $profile.nickname }</h1>
            <p class="text-xs text-gray-100 opacity-80">{ $profile.level.number } Уровень</p>
          </div> -->

          <!-- Chevron Down -->
          <!-- <button class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
            <Icon name="chevron-down" attrs={{ width: "1.1rem", height: "1.1rem", color: "#fff" }} />
          </button> -->
        </div>
      { :else }
        <button on:click={(e) => {
          goto('/authorize');
        }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="mx-3 px-4 py-2 rounded-md hidden lg:flex items-center">
          <!-- Icon -->
          <Icon name="log-in" attrs={{ width: "1.25rem", height: "1.25rem", color: "#fff" }} />

          <!-- Text -->
          <p class="text-base text-white ml-2">Авторизоваться</p>
        </button>
      { /if }
    </div>
  </header>

  <!-- Hero Section -->
  <section class="w-full h-screen flex justify-center items-center">
    <!-- Texts -->
    <div class="w-full md:w-1/2 md:pl-24 px-4 md:px-0">
      <h1 class="text-3xl md:text-8xl text-white font-medium">Всё ещё в разработке</h1>

      <p class="mt-2 md:mt-8 text-base text-gray-100">Весь этот проект находится в глубочайшей стадии разработки. Тем не менее, если вы постараетесь, то вы сможете кое-как найти текущую и рабочую версию сервиса, которая довольно-таки часто обновляется. Тем не менее, проект - в разработке. Вы можете присоединится к нашему <a href="https://discord.gg/36c2k7PFNj" class="border-b border-dotted border-gray-100">Дискорд серверу</a> для того, что бы поговорить с разработчиками ну или обычными игроками.</p>
    </div>

    <div class="hidden w-1/2 md:flex justify-center items-center"></div>
  </section>

  <!-- Sad Cat emoji -->
  <div class="absolute bottom-0 right-0 w-full flex justify-end">
    <img class="w-1/4" src="./icons/Sad_Cat_Thumbs_Up.png" alt="Sad Cat">
  </div>
</main>