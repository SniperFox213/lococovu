<script>
  // Importing modules
  import { fade } from "svelte/transition";  
  import accounts from "../../stores/accounts.js";

  import Spinner from "../../components/Loader/Spinner.svelte";

  // Importing components
  import Icon from "../../Icons/index.svelte";
  import PageTransition from "../../components/Loader/PageTransition.svelte";
  
  import ProfileEntry from "../../components/Extra/ProfileEntry.svelte";

  let buttonClicked = false;
</script>

<svelte:window on:mousemove={(e) => {
  let el = document.getElementById("background");

  el.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
  el.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
}} />

<!-- Page Transition Component -->
<PageTransition />

<!-- Background -->
<div id="background" style="z-index: 1; background-image: url('./background/1.svg');" class="absolute inset-0 w-full h-full"></div>

<!-- Page's Layout -->
<main class="w-full h-screen relative flex justify-center">
  <!-- Header -->
  <div style="z-index: 2;" class="absolute h-24 w-full top-0 w-full px-8 flex items-center justify-between lg:justify-start">
    <!-- Logotype -->
    <div class="flex items-center">
      <img style="height: 1.5rem;" src="./logotype/small-white.svg" alt="Lococovu Logotype">
      
      <!-- Divider -->
      <div style="width: 1.2px; height: 1.35rem;" class="hidden lg:block mx-2 rounded-md bg-white"></div>

      { #if $accounts.profiles.length > 0 }
        <p class="hidden lg:block text-md text-white">Аккаунты</p>
      { :else }
        <p class="hidden lg:block text-md text-white">Авторизация</p>
      { /if }
    </div>

    <!-- Links -->
    <div class="flex items-center ml-2">
      <a class="text-xs text-white mx-4 opacity-50" href="/">Главная</a>
      
      { #if $accounts.profiles.length > 0 }
        <a class="hidden lg:block border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/authorization">Аккаунты</a>
      { :else }
        <a class="hidden lg:block border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/authorization">Авторизация</a>
      { /if }
    </div>
  </div>

  <!-- Authorize -->
  <section class="relative w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
    <!-- Content -->
    <div style="z-index: 2;" class="w-full lg:w-2/3 h-2/3 flex flex-col items-center justify-center px-4">
      <!-- Text -->
      <div class="text-center">

        { #if $accounts.profiles.length > 0 }
          <h1 class="text-2xl text-white">Аккаунты</h1>
          <p class="text-xs text-gray-100">Тут будет весь список ваших активных аккаунтов. Просто выбирайте аккаунт и нажимайте на стрелочку вправо. Хотите добавить новый аккаунт? Нажмите на кнопку <span class="border-b border-dotted border-gray-100">"Войти под другим аккаунтом"</span> и следуйте инструкциям!<br /><br />Хотите выйти? Просто нажмите на крестик рядом с вашим текущим аккаунтом.</p>  
        { :else }
          <h1 class="text-2xl text-white">Авторизация</h1>
          <p class="text-xs text-gray-100">Для того, что бы начать пользоваться нашимы сервисами, Вам нужно авторизоваться.</p>
        { /if }
      </div>

      <!-- Buttons -->
      <div style="overflow: hidden; overflow-y: scroll;" class="mt-4 px-4 { $accounts.profiles.length > 0 ? "w-full flex-grow flex flex-col relative" : "" }">
        { #if $accounts.profiles.length > 0 }
          <div class="absolute inset-0 w-full h-full pr-2">
            { #each $accounts.profiles.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)) as account }
              <ProfileEntry token={account.token} id={account.id} />
            { /each }

            <button on:click={(e) => {
                buttonClicked = true;
                window.location.href = "https://authed.unfull.ml/callback?url=https://lococovu.me/authorize/:token&provider=google&design=%7B%22appBackground%22%3A%22%23151820%22%2C%22loaderBackground%22%3A%22%23151820%22%2C%22loaderColor%22%3A%22%23fff%22%2C%22containerBackground%22%3A%22%23151820%22%2C%22logotypeColor%22%3A%22%23fff%22%2C%22textHeading%22%3A%22%23fff%22%2C%22textParagraph%22%3A%22%23F3F4F5%22%7D";
              }} class="relative w-full mt-4 p-3 { buttonClicked ? "" : "border border-dashed border-gray-700" } rounded-md flex items-center cursor-pointer">
              
              { #if buttonClicked }
                <div in:fade class="absolute inset-0 w-full h-full flex justify-center items-center bg-icon-button rounded-md">
                  <Spinner color="#fff" />
                </div>
              { /if }

              <!-- Logo -->
              <Icon name="log-in" attrs={{ width: "1.5rem", height: "1.5rem", class: "text-white" }} />

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-white">Войти под другим аккаунтом</h1>
                <p class="text-xs text-gray-100">Для данного действия будет использован Ваш личный аккаунт Google</p>
              </div>
            </button>
          </div>
        { :else }
          <button on:click={(e) => {
            buttonClicked = true;
            window.location.href = "https://authed.unfull.ml/callback?url=https://lococovu.me/authorize/:token&provider=google&design=%7B%22appBackground%22%3A%22%23151820%22%2C%22loaderBackground%22%3A%22%23151820%22%2C%22loaderColor%22%3A%22%23fff%22%2C%22containerBackground%22%3A%22%23151820%22%2C%22logotypeColor%22%3A%22%23fff%22%2C%22textHeading%22%3A%22%23fff%22%2C%22textParagraph%22%3A%22%23F3F4F5%22%7D";
          }} class="relative w-full cursor-pointer my-4 p-3 rounded-md bg-icon-button flex items-center opacity-80">
            { #if buttonClicked }
              <div in:fade class="absolute inset-0 w-full h-full flex justify-center items-center bg-icon-button rounded-md">
                <Spinner color="#fff" />
              </div>
            { /if }

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
        { /if }
      </div>
    </div>

    <!-- Disclamer -->
    <div style="z-index: 2;" class="absolute bottom-0 w-full flex justify-center items-center py-4">
      <p class="text-xs text-gray-100 opacity-75 w-2/3 text-center">Продолжая, вы соглашаетесь с <span class="border-b border-dotted border-gray-100">Правилами использования сервиса unfull.authed</span> и с <span class="border-b border-dotted border-gray-100">Правилами использования сервиса lococovu.me</span> <br />Там нет ничего странного и необычного, да ага!</p>
    </div>
  </section>

  <!-- Images (or Text) -->
  <!-- <section class="hidden lg:flex relative w-1/2 h-full bg-gray-200">
    
  </section> -->
</main>