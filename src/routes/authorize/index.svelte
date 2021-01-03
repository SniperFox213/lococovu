<script>
  // Importing modules
  import { fade } from "svelte/transition";
  import profile from "../../stores/profile.js";

  import axios from "axios";
  import { onMount } from "svelte";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  import Spinner from "../../components/Loader/Spinner.svelte";

  // Importing components
  import Icon from "../../Icons/index.svelte";
  import PageTransition from "../../components/Loader/PageTransition.svelte";

  let loading = false;
  let profiles = [];
  let tokens = cookies.get('tokens');

  if (tokens != null) {
    tokens = tokens.split(',');
  };

  onMount(() => {
    if (tokens.length > 0) {
      // Let's now load all this profiles
      tokens.forEach((token) => {
        axios.get(`https://lococovu.me/api/profile/${token}`)
        .then((response) => {
          if (!profiles.find(x => x.id == response.data.id)) {
            let profile = response.data;
            profile.token   = token;
            profile.loading = false;

            let newProfiles = profiles;
            newProfiles.push(profile);

            profiles = newProfiles;
          };
        });
      });
    } else {
      profiles = [$profile];
    }
  });

  let buttonClicked = false;
</script>

<svelte:window on:mousemove={(e) => {
  let el = document.getElementById("background");

  el.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
  el.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
}} />

<!-- Page Transition Component -->
<PageTransition />

<!-- Page's Layout -->
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
        <div style="width: 1.2px; height: 1.35rem;" class="hidden lg:block mx-2 rounded-md bg-white"></div>

        { #if tokens.length > 0 }
          <p class="hidden lg:block text-md text-white">Аккаунты</p>
        { :else }
          <p class="hidden lg:block text-md text-white">Авторизация</p>
        { /if }
      </div>

      <!-- Links -->
      <div class="flex items-center">
        <a class="text-xs text-white mx-4 opacity-50" href="/">Главная</a>
        
        { #if tokens.length > 0 }
          <a class="hidden lg:block border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/authorization">Аккаунты</a>
        { :else }
          <a class="hidden lg:block border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/authorization">Авторизация</a>
        { /if }
      </div>
    </div>

    <!-- Content -->
    <div style="z-index: 2;" class="w-full lg:w-2/3 h-full lg:h-2/3 flex flex-col items-center justify-center px-4">
      <!-- Text -->
      <div class="text-center">

        { #if tokens.length > 0 }
          <h1 class="text-2xl text-white">Аккаунты</h1>
          <p class="text-xs text-gray-100">Тут будет весь список ваших активных аккаунтов. Просто выбирайте аккаунт и нажимайте на стрелочку вправо. Хотите добавить новый аккаунт? Нажмите на кнопку <span class="border-b border-dotted border-gray-100">"Войти под другим аккаунтом"</span> и следуйте инструкциям!<br /><br />Хотите выйти? Просто нажмите на крестик рядом с вашим текущим аккаунтом.</p>  
        { :else }
          <h1 class="text-2xl text-white">Авторизация</h1>
          <p class="text-xs text-gray-100">Для того, что бы начать пользоваться нашимы сервисами, Вам нужно авторизоваться.</p>
        { /if }
      </div>

      <!-- Buttons -->
      <div style="overflow: hidden; overflow-y: auto;" class="mt-4 px-4 { tokens.length > 0 ? "w-full flex-grow flex flex-col relative" : "" }">
        { #if tokens.length > 0 }
          <div class="absolute inset-0 w-full h-full">
            { #each profiles.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)) as p }
              <!-- Current Profile -->
              <button in:fade class="transition duration-200 ease-in-out relative w-full my-4 p-3 rounded-md bg-icon-button flex items-center opacity-80 { $profile.id == p.id && !loading ? "border-2 border-solid border-indigo-400" : "border-2 border-transparent" }">
                <!-- Loading state -->
                { #if loading }
                  <div style="z-index: 999;" transition:fade class="absolute bg-icon-button rounded-md inset-0 w-full h-full flex justify-center items-center">
                    <Spinner size={20} color="#fff" />
                  </div>
                { /if }
                
                <!-- Icon -->
                <div style="background-image: url('{ p.internalAvatar }'); background-size: cover; background-position: center;" class="w-12 h-12 rounded-md"></div>

                <!-- Texts -->
                <div class="ml-3 text-left">
                  <h1 class="text-base text-white">{ p.nickname == null ? p.displayName : p.nickname }</h1>
                  <p class="text-xs text-gray-100">{@html $profile.id == p.id ? "Текущий аккаунт," : '<span class="border-b border-dotted border-gray-100">Email:</span>' } { p.email }</p>
                </div>

                <!-- Buttons -->
                <div class="absolute flex items-center right-0 h-full pr-3">
                  <!-- Settings -->
                  <button class="mx-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
                    <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
                  </button>

                  <!-- Log out or Log into -->
                  { #if $profile.id != p.id }
                    <button on:click={(e) => {
                      loading = true;

                      cookies.set("token", p.token, { path: "/" });
                      profile.loadProfile(p.token)
                      .then(() => {
                        loading = false;
                      }).catch(() => {
                        loading = false;
                      });
                    }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="w-8 h-8 rounded-md flex justify-center items-center">
                      <Icon name="chevron-right" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
                    </button>
                  { :else }
                    <button on:click={(e) => {
                      profile.forceProfile({ id: null });
                      cookies.remove("token", { path: "/" });
                    }} class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
                      <Icon name="x" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
                    </button>
                  { /if }
                </div>
              </button>
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
  <section class="hidden lg:flex relative w-1/2 h-full bg-gray-200">
    
  </section>
</main>