<script>
  // Importing modules
  import axios from "axios";

  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  // Importing actions
  import getProfile from "../../actions/profile/getProfile.action";
  import authorizeProfile from "../../actions/profile/authorizeProfile.action";

  // Importing stores
  import { stores } from "@sapper/app";
  const { page } = stores();

  // Importing components
  import { fade } from "svelte/transition";
  import PageTransition from "../../components/Loader/PageTransition.svelte";
  import Icon from "../../components/Icon.svelte";
  import Spinner from "../../components/Loader/Spinner.svelte";

  // Account object
  let account = {
    loaded: false
  };

  let loading = false;

  // Function that'll authorize our user
  function authorize() {
    loading = true;

    let element = document.getElementById("pincode");
    let pincode = element.value;

    // Authorizing user
    authorizeProfile($page.query.token, pincode);
  };

  // onMount event
  onMount(async () => {
    // Checkinf something mandatory
    if ($page.query.token == null) {
      goto('/authorize');
    };

    // Let's get some information about this account
    account        = await getProfile($page.query.token);
    account.loaded = true;
  });
</script>

<!-- Page's Transition Effect -->
<PageTransition />

<!-- Page's Background -->
<div style="z-index: 1; background-image: url('./background/1.svg');" class="background absolute inset-0 w-full h-full"></div>

<!-- Page's Layout -->
<main style="z-index: 2;" class="w-full h-screen relative flex justify-center">
  <!-- Header -->
  <div style="z-index: 2;" class="absolute h-24 w-full top-0 w-full px-8 flex items-center justify-between lg:justify-start">
    <!-- Logotype -->
    <div class="flex items-center">
      <img style="height: 1.5rem;" src="./logotype/small-white.svg" alt="Lococovu Logotype">
      
      <!-- Divider -->
      <div style="width: 1.2px; height: 1.35rem;" class="hidden lg:block mx-2 rounded-md bg-white"></div>

      <p class="hidden lg:block text-md text-white">Безопасность</p>
    </div>

    <!-- Links -->
    <div class="flex items-center ml-2">
      <a class="text-xs text-white mx-4 opacity-50" href="/">Главная</a>
      
      <a class="hidden lg:block border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/authorization">Авторизация</a>
    </div>
  </div>

  <!-- Container -->
  <section class="relative w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
  
    <div class="w-full lg:w-2/3 relative flex flex-col items-center">
      <!-- Texts -->

      { #if $page.query.type == "confirmation" }
        <div class="text-center">
          <h1 class="text-2xl text-white">Подтверждение личности</h1>
          <p class="text-xs text-gray-100">Для того, что бы продолжить текущее действие Вам нужно авторизоваться, использовав свой <span class="border-b border-dotted border-gray-100">ТЕКУЩИЙ</span> пароль. {@html $page.query.action != null ? "<br /><br />Действие, которое будет совершенно с Вашим аккаунтом:" : "" }</p>

          { #if $page.query.action != null }
            <div class="mt-4 w-full flex justify-center">
              { #if $page.query.action == "informationChange" }
                <div class="w-5/6 flex items-center rounded-md bg-icon-button border-2 border-red-500 px-4 py-2 opacity-75">
                  <Icon name="alert-triangle" attrs={{ width: "1.4rem", height: "1.4rem", color: "#fff" }} />

                  <div class="ml-2 text-left">
                    <h1 class="text-md text-white font-medium">Смена пароля</h1>
                    <p class="text-xs text-gray-100 opacity-80">Ваш пароль будет изменён, и мы не знаем на какой ¯\_(ツ)_/¯</p>
                  </div>
                </div>
              { :else if $page.query.action == "pincodeChange" }
                <div class="w-5/6 flex items-center rounded-md bg-icon-button px-4 py-2 opacity-75">
                  <Icon name="alert-triangle" attrs={{ width: "1.4rem", height: "1.4rem", color: "#fff" }} />

                  <div class="ml-2 text-left">
                    <h1 class="text-md text-white font-medium">Изменения Игрового профиля</h1>
                    <p class="text-xs text-gray-100 opacity-80">Некоторые данные Вашего Игрового профиля будут изменены.</p>
                  </div>
                </div>
              { /if }
            </div>
          { /if }
        </div>
      { :else }
        <div class="text-center">
          <h1 class="text-2xl text-white">Безопасность</h1>
          <p class="text-xs text-gray-100">Для того, что бы авторизоваться в этот аккаунт, вам нужно вписать специальный пароль/пинкод, который вы присваивали этому аккаунту.</p>
        </div>
      { /if }

      <!-- Account -->
      <div class="my-6 flex w-5/6 p-3 bg-icon-button rounded-md relative">
        <!-- Avatar -->
        <div style="background-image: url('{ account.internalAvatar }'); background-size: cover; background-position: center;" class="transition duration-300 ease-in-out w-14 h-14 rounded-md { !account.loaded ? "bg-input opacity-50" : "" }"></div>

        <!-- Texts -->
        { #if !account.loaded }
          <div class="w-1/2 ml-3">
            <div class="w-{ Math.floor(Math.random()*(6 - 4 + 1) + 4) }/6 h-5 rounded-full bg-input opacity-50"></div>
            
            <div class="flex">
              <div class="mt-2 w-{ Math.floor(Math.random()*(4 - 2 + 1) + 2) }/6 h-4 rounded-full bg-input opacity-50"></div>
              <div class="ml-3 mt-2 w-{ Math.floor(Math.random()*(4 - 2 + 1) + 2) }/6 h-4 rounded-full bg-input opacity-50"></div>
            </div>
          </div>
        { :else }
          <div class="ml-3 text-left">
            <h1 in:fade class="text-xl text-white ">{ account.nickname == null ? account.displayName : account.nickname }</h1>
            <p in:fade class="text-sm text-gray-100"><span class="border-b border-dotted border-gray-100">Email:</span> { account.email }</p>  
          </div>
        { /if }

        <!-- Change Account Button -->
        <div class="absolute inset-y-0 right-0 h-full flex items-center pr-3">
          <button class="{ !account.loaded ? "opacity-50" : "" } transition duration-300 ease-in-out w-10 h-10 rounded-md bg-input flex justify-center items-center">
            { #if account.loaded }
              <Icon name="refresh-cw" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fff" }} />
            { /if }
          </button>
        </div>
      </div>

      <!-- Pincode -->
      <div class="{ !account.loaded ? "opacity-50" : "" } w-full flex justify-center items-center mb-6">
        <div class="flex w-5/6 bg-input p-2 rounded-md">
          <!-- Icon -->
          <div class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center mr-2">
            <Icon name="lock" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          </div>
      
          <!-- Input itself -->
          <input disabled={ !account.loaded } type="password" id="pincode" class="text-sm w-full text-gray-400 bg-input" placeholder="Пароль">
        </div>
      </div>

      <!-- Buttons -->
      <div class="{ !account.loaded ? "opacity-50" : "" } w-5/6 flex">
        <button disabled={ !account.loaded } class="relative w-full px-4 py-2 rounded-md bg-input flex justify-center items-center">
          <!-- Icon -->

          <!-- Text -->
          <p class="text-sm text-white">Отмена</p>
        </button>

        <button disabled={ !account.loaded } on:click={() => authorize()} class="relative w-full ml-3 px-4 py-2 rounded-md bg-input flex justify-center items-center">
          { #if loading }
            <div transition:fade class="absolute inset-0 w-full h-full rounded-md bg-input flex justify-center items-center">
              <Spinner size={20} color="#fff" />
            </div>
          { /if }
          
          <!-- Icon -->
          <Icon name="log-in" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

          <!-- Text -->
          <p class="text-sm text-white ml-2">Продолжить</p>
        </button>
      </div>
    </div>
    
  </section>
</main>