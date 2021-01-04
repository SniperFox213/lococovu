<script>
  // Importing modules
  import { goto } from "@sapper/app";
  
  import profile from "../stores/profile.js";
  import accounts from "../stores/accounts.js";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  // Importing components
  import PageTransition from "../components/Loader/PageTransition.svelte";
  import Icon from "../Icons/index.svelte";

  let menuOpened = false;
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
  <!-- Mobile: Menu -->
  { #if menuOpened }
    <div style="z-index: 997;" class="fixed bg-container inset-0 w-full h-screen lg:hidden px-2 flex flex-col">
      <!-- Mini-Header -->
      <div class="w-full my-6 flex items-center justify-between px-6">
        <!-- Logotype -->
        <img style="height: 1.5rem;" src="./logotype/small-white.svg" alt="Lococovu Logotype">
      
        <!-- Close Menu Button -->
        <button on:click={(e) => {
          menuOpened = false;
        }} class="w-8 h-8 cursor-pointer rounded-md bg-input flex lg:hidden justify-center items-center">
          <Icon name="x" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
        </button>
      </div>

      <!-- Pages -->
      <div style="overflow: hidden; overflow-y: auto;" class="relative w-full flex-grow">
        <div class="absolute inset-0 w-full h-full">

          <!-- Site Services -->
          <div class="w-full">
            <!-- Texts -->
            <div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
              <h1 class="text-xl text-white opacity-75 font-bold">Главное</h1>
              <p class="text-sm text-white opacity-50">Всё самое базовое и главное. То, что Вам уж точно пригодится</p>
            </div>

            <!-- List -->
            <div class="relative flex flex-wrap mt-4">
              <!-- Account -->
              <div class="w-full p-2">
                <div class="pt-40% w-full relative">
                  <div on:click={(e) => {
                    if ($profile.id == null) {
                      goto('/authorize');
                    };
                  }} class="absolute { $profile.id == null ? "cursor-pointer" : "" } inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-start justify-center px-4 opacity-80">
                    
                    {#if $profile.id != null}
                      <!-- Icon -->
                      <div class="flex items-center">
                        <div style="background: url({ $profile.internalAvatar }); background-size: cover;" class="w-12 h-12 rounded-md"></div>

                        <!-- Texts -->
                        <div class="ml-2">
                          <h1 class="text-md text-white font-medium">{ $profile.nickname == null ? $profile.displayName : $profile.nickname }</h1>

                          <div class="flex mt-1">
                            <img style="height: 1.2rem; width: 1.2rem;" src="./icons/desktop-computer.png" alt="">
                            <p class="text-sm text-gray-100 ml-1">Сидит на сайте</p>
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="w-full mt-4 flex pr-2">
                        <!-- Settings -->
                        <button class="w-full px-4 py-2 mr-3 rounded-md bg-input flex justify-center items-center opacity-80">
                          <!-- Icon -->
                          <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

                          <!-- Text -->
                          <p class="text-sm ml-1 text-white">Настройки</p>
                        </button>

                        <!-- Change Account -->
                        <button on:click={(e) => {
                          goto('/authorize');
                        }} class="w-full px-4 py-2 rounded-md bg-input flex justify-center items-center opacity-80 relative">
                          <!-- Icon -->
                          <Icon name="list" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

                          <!-- Text -->
                          <p class="text-sm ml-1 text-white">Аккаунты</p>

                          { #if $accounts.profiles.length > 0 }
                            <div class="absolute top-0 right-0 pr-5 pt-1">
                              <div class="w-4 h-4 bg-indigo-400 rounded-full opacity-80 flex justify-center items-center text-xs text-white">
                                { $accounts.profiles.length }
                              </div>
                            </div>
                          { /if }
                        </button>
                      </div>

                      <!-- Badge -->
                      <div class="absolute right-0 h-full w-2 bg-indigo-400 rounded-r-md"></div>
                    { :else }
                      <div class="flex items-center">
                        <!-- Icon -->
                        <img class="h-3/6" src="./icons/man-dancing.png" alt="Dancing Man">

                        <!-- Texts -->
                        <div class="text-left ml-4">
                          <h1 class="text-xl text-white font-medium">Аккаунт</h1>
                          <p class="text-sm text-gray-100">Сначала вам нужно войти в Ваш аккаунт. Нажмите сюда, что бы войти</p>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>

              <!-- Game Library -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                    <!-- Icon -->
                    <img class="w-4/12" src="./icons/video-game.png" alt="">

                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Библиотека</h1>
                      <p class="text-xs text-gray-100">Библиотека всех игр, в которые вы уже можете поиграть!</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Marketplace -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                    <!-- Icon -->
                    <img class="w-4/12" src="./icons/shopping-trolley.png" alt="">

                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Магазин</h1>
                      <p class="text-xs text-gray-100">Всё то, что вы можете купить зя <span class="border-b border-dotted border-gray-100">Лямбы</span> (игровая валюта)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Discord -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                    <!-- Icon -->
                    <img class="w-4/12" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">

                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Наш Дискорд</h1>
                      <p class="text-xs text-gray-100">Тут вы сможете пообщаться с игроками и разработчиками проекта!</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Studio -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-50">
                    <!-- Icon -->
                    <img class="w-4/12" src="./icons/man-superhero.png" alt="">

                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Студия</h1>
                      <p class="text-xs text-gray-100">Создавайте свои игры даже без навыков программирования!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other -->
          <div class="w-full mt-8">
            <!-- Texts -->
            <div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
              <h1 class="text-xl text-white opacity-75 font-bold">Другое</h1>
              <p class="text-sm text-white opacity-50">Всё остальное</p>
            </div>

            <!-- List -->
            <div class="relative flex flex-wrap mt-4">
              <!-- Team -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Команда</h1>
                      <p class="text-xs text-gray-100">Команда, которая стоит за разработкой и поддержкой всего проекта</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FAQ -->
              <div class="w-1/2 p-2">
                <div class="pt-100% w-full relative">
                  <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                    <!-- Texts -->
                    <div class="text-left mt-2">
                      <h1 class="text-md text-white font-medium">Помощь</h1>
                      <p class="text-xs text-gray-100">Есть какие-то вопросы ну или же нужна помощь? Тогда Вам уж точно сюда!</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Donate -->
              <div class="w-full p-2">
                <div class="pt-40% w-full relative">
                  <div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full rounded-md flex items-center justify-center px-4 opacity-80">
                    <!-- Icon -->
                    <img class="h-2/6" src="./icons/hugging-face.png" alt="Dancing Man">

                    <!-- Texts -->
                    <div class="text-left ml-3">
                      <h1 class="text-md text-white font-medium">Поддержать проект</h1>
                      <p class="text-xs text-gray-100">Мы живём только на донаты наших игроков. Мы не показываем рекламу. Только донаты. Помогите нам выжить, пожалуйста {"<"}3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  { /if }

  <!-- Header -->
  <header class="w-full fixed top-0 h-24 px-8 flex items-center justify-between">
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
    
    <!-- Some Buttons -->
    <div class="flex items-center">
      <!-- Mobile: account -->
      { #if $profile.id != null }
        <button on:click={(e) => {
          menuOpened = true;
        }} style="background: url({ $profile.internalAvatar }); background-size: cover;" class="mr-3 w-8 h-8 cursor-pointer rounded-md block lg:hidden"></button>
      { /if }

      <!-- Mobile: Account List -->
      { #if $accounts.profiles.length > 0 }
        <button on:click={(e) => {
          goto('/authorize')
        }} class="w-8 h-8 mr-3 cursor-pointer rounded-md bg-input flex lg:hidden justify-center items-center relative">
          <Icon name="list" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

          <div style="top: -.3rem; right: -.3rem;" class="absolute">
            <div class="w-4 h-4 bg-indigo-400 rounded-full opacity-80 flex justify-center items-center text-xs text-white">
              { $accounts.profiles.length }
            </div>
          </div>
        </button>      
      { /if }

      <!-- Mobile: open menu -->
      <button on:click={(e) => {
        menuOpened = true;
      }} class="w-8 h-8 cursor-pointer rounded-md bg-input flex lg:hidden justify-center items-center">
        <Icon name="chevron-down" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </button>

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
        <div class="mx-3 hidden lg:flex items-center">
          <!-- Avatar -->
          <div style="background: url('{ $profile.internalAvatar }'); background-size: cover;" class="w-12 h-12 rounded-md"></div>

          { #if $accounts.profiles.length > 0 }
             <button on:click={(e) => {
               goto('/authorize')
             }} class="w-10 h-10 ml-3 cursor-pointer rounded-md bg-icon-button hidden lg:flex justify-center items-center relative">
               <Icon name="list" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fff" }} />

                <div style="top: -.45rem; right: -.45rem;" class="absolute">
                  <div class="w-4 h-4 bg-indigo-400 rounded-full opacity-80 flex justify-center items-center text-xs text-white">
                    { $accounts.profiles.length }
                  </div>
                </div>
             </button>
          { /if }
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