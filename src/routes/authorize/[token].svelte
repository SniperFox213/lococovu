<script>
  // Importing modules
  import Icon from "../../Icons/index.svelte";

  import { goto } from "@sapper/app";
  import moment from "moment";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  import { onMount } from "svelte";
  import profile from "../../stores/profile.js";
  import accounts from "../../stores/accounts";

  import { stores } from "@sapper/app";

  const { page } = stores();

  let error;

  onMount(() => {
    // Now let's try to load this user's
    // information using Profile Store
    profile.loadProfile($page.params.token)
    .then(() => {
      // And now we need to save this user's
      // token as cookie and redirect
      // user to main page.
      cookies.set('token', $page.params.token, { path: "/", expires: moment().add('1', 'year').toDate() });

      // And let's now add this token to
      // tokens cookie
      let tokens = cookies.get('tokens', { path: "/" });
      if (tokens == null) {
        tokens = [];
      } else {
        tokens = tokens.split(',');
      };

      // Let's now check if we already have
      // this token or no.
      if (!tokens.includes($page.params.token)) {
        tokens.push($page.params.token);
        cookies.set('tokens', tokens.join(','), { path: "/", expires: moment().add('1', 'year').toDate() });
      };

      // Here we'll update our accounts storage
      accounts.loadTokens(tokens);

      // And now let's check if this
      // user completed tutorial/setup profile

      if (!cookies.get('tutorial') ) {
        goto('/start');
      } else {
        if ($profile.nickname == null) {
          goto('/start/profile');
        } else {
          goto('/app');
        };
      };
    }).catch((error) => {
      if (error == "authorizePincode") {
        goto(`/authorize/pincode?token=${$page.params.token}`);
      } else {
        // Error
        error = true;
      };
    });
  });
</script>

<main class="w-full h-screen bg-container flex flex-col items-center justify-center">
  <div class="w-1/3 flex flex-col justify-center items-center text-center">
    { #if error }
      <!-- Logotype -->
      <Icon name="alert-triangle" attrs={{ width: "1.5rem", height: "1.5rem", class: "text-red-400" }} />

      <!-- Text -->
      <h1 class="text-base text-white font-medium mt-2">Произошла какая-то ошибка.</h1>
      <p class="text-xs text-gray-100">Уупсс... Что-то пошло не так. Лучше всего просто написать Администрации сайта через <a class="border-b border-dotted border-gray-100" href="https://discord.gg/36c2k7PFNj">наш Дискорд</a>. Мы всегда будем рады помочь!</p>    
    
      <!-- Buttons -->
      <div class="w-full flex mt-6">
        <!-- Our Discord -->
        <button on:click={(e) => {
          window.location.href = "https://discord.gg/36c2k7PFNj";
        }} class="mx-3 w-full px-4 py-1 rounded-md bg-icon-button flex items-center justify-center">
          <!-- Icon -->
          <img style="height: 1rem; width: 1rem;" src="./icons/Discord-Logo-White.svg" alt="">

          <!-- Text -->
          <p class="text-sm text-white ml-2">Наш Дискорд</p>
        </button>

        <!-- Go to Index -->
        <button on:click={(e) => {
          goto('/');
        }} class="mx-3 w-full px-4 py-1 rounded-md bg-icon-button flex items-center justify-center">
          <!-- Icon -->
          <Icon name="home" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

          <!-- Text -->
          <p class="text-sm text-white ml-2">На Главную</p>
        </button>
      </div>
    { :else }
      <!-- Logotype -->
      <div style="animation: pulse 1.5s infinite ease-in-out;" class="w-4/12 lg:w-1/12 relative flex justify-center">
        <img class="w-full" src="./logotype/small-white.svg" alt="Lococovu Logotype">
      </div>

      <!-- Text -->
      <h1 class="text-sm text-white font-medium opacity-75 mt-2">Обрабатываем...</h1>
    { /if }
  </div>
</main>