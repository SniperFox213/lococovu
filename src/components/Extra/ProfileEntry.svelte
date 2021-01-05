<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import profile from "../../stores/profile.js";
  import accounts from "../../stores/accounts.js";

  import moment from "moment";

  import { onMount } from "svelte";
  import axios from "axios";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  // Importing components
  import { fade, slide } from "svelte/transition";
  import Icon from "../../Icons/index.svelte";
  import Spinner from "../Loader/Spinner.svelte";
  
  let account = {
    loaded: false,
  };

  let loading      = false;
  let settingsMenu = false;

  // Function, that'll delete this account
  // from account list.
  function deleteFromList() {
    if ($profile.id == account.id) {
      cookies.remove('token', { path: "/" });
    };

    // Now let's just get tokens list
    // and filter it, to remove all
    // accounts with this id.
    let tokens = cookies.get('tokens');
    if (tokens == null) {
      tokens = [];
    } else {
      tokens = tokens.split(',');
    };

    // And now let's filter this list
    let tokensToDelete = $accounts.profiles.filter((x) => x.id == id);

    tokens = tokens.filter((x) => !tokensToDelete.find((d) => d.token == x));
    cookies.set('tokens', tokens.join(','), { path: "/", expires: moment().add('1', 'year').toDate() });

    // Now let's update overall tokens list
    accounts.clear();

    setTimeout(() => {
      accounts.loadTokens(tokens);
    }, 60);
  };

  // Function, that'll make this account
  // site's current account
  function switchToThis() {
    loading = true;

    // Changing token cookie
    cookies.set('token', token, { path: "/", expires: moment().add('1', 'year').toDate() });

    // Loading this profile into our profile store
    profile.loadProfile(token)
    .then((store) => {
      loading = false;

      // Now we'll check if we need to
      // show player tutorial or profile setup page
      if (!cookies.get('tutorial')) {
        // Redirect player to tutorial page
        goto('/start?return=/authorize');
      } else {
        // Redirect to profile setup page
        if (store.nickname == null) {
          goto('/start/profile?return=/authorize');
        } else {
          goto('/app');
        };
      };
    });
  };

  onMount(async () => {
    // And now let's get this profile's
    // information
    let response = await axios.get(`https://lococovu.me/api/profile/${id}`)
  
    account        = response.data;
    account.loaded = true;
  });

  // Exporting variables
  export let id;
  export let token;
</script>

<!-- Profile -->
<div transition:fade class="relative w-full pb-4">
  <button class="transition duration-200 ease-in-out relative w-full p-3 rounded-md bg-icon-button flex items-center opacity-80 { $profile.id == account.id && account.loaded ? "border-2 border-solid border-indigo-400" : "border-2 border-transparent" }">
    <!-- Loading state -->
    { #if loading }
      <div style="z-index: 999;" transition:fade class="absolute bg-icon-button rounded-md inset-0 w-full h-full flex justify-center items-center">
        <Spinner size={20} color="#fff" />
      </div>
    { /if }
    
    <!-- Icon -->
    <div style="background-image: url('{ account.internalAvatar }'); background-size: cover; background-position: center;" class="transition duration-300 ease-in-out w-12 h-12 rounded-md { !account.loaded ? "bg-input opacity-50" : "" }"></div>

    <!-- Texts -->
    { #if !account.loaded }
      <div class="w-1/2 ml-3">
        <div class="w-{ Math.floor(Math.random()*(6 - 4 + 1) + 4) }/6 h-4 rounded-full bg-input opacity-50"></div>
        
        <div class="flex">
          <div class="mt-2 w-{ Math.floor(Math.random()*(4 - 2 + 1) + 2) }/6 h-3 rounded-full bg-input opacity-50"></div>
          <div class="ml-3 mt-2 w-{ Math.floor(Math.random()*(4 - 2 + 1) + 2) }/6 h-3 rounded-full bg-input opacity-50"></div>
        </div>
      </div>
    { :else }
      <div class="ml-3 text-left">
        <h1 in:fade class="text-base text-white ">{ account.nickname == null ? account.displayName : account.nickname }</h1>
        <p in:fade class="text-xs text-gray-100">{@html $profile.id == account.id ? "Текущий аккаунт," : '<span class="border-b border-dotted border-gray-100">Email:</span>' } { account.email }</p>  
      </div>
    { /if }

    <!-- Buttons -->
    <div class="absolute flex items-center right-0 h-full pr-3">
      <!-- Settings -->
      <button on:click={(e) => {
        if (settingsMenu) {
          settingsMenu = false;
        } else {
          settingsMenu = true;
        };
      }} class="{ !account.loaded ? "opacity-50" : "" } { settingsMenu ? "border-2 border-solid border-indigo-400" : "" } transition duration-300 ease-in-out mx-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
        { #if account.loaded }
          <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
        { /if }
      </button>

      <!-- Log out or Log into -->
      { #if $profile.id != account.id }
        <button on:click={(e) => {
          switchToThis()
        }} style="{ account.loaded ? "background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" : "" }" class="{ !account.loaded ? "bg-input opacity-50" : "" } transition duration-300 ease-in-out w-8 h-8 rounded-md flex justify-center items-center">
          { #if account.loaded }
            <Icon name="chevron-right" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          { /if }
        </button>
      { :else }
        <button on:click={(e) => {
          profile.forceProfile({ id: null });
          cookies.remove("token", { path: "/" });
        }} class="{ !account.loaded ? "opacity-50" : "" } transition duration-300 ease-in-out w-8 h-8 rounded-md bg-input flex justify-center items-center">
          { #if account.loaded }
            <Icon name="x" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          { /if }
        </button>
      { /if }
    </div>
  </button>

  <!-- Settings Menu -->
  { #if settingsMenu }
    <div transition:slide class="w-full bg-input rounded-b-md flex justify-center items-stretch p-3 text-white">
      <!-- Account Settings -->
      <button class="w-full mr-3 px-4 py-2 rounded-md bg-icon-button flex justify-center items-center">
        <!-- Icon -->
        <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

        <!-- Text -->
        <p class="text-sm text-white ml-2">Настроить</p>
      </button>

      <!-- Delete from List -->
      <button on:click={(e) => {
        deleteFromList();
      }} class="w-full px-4 py-2 bg-red-500 rounded-md flex justify-center items-center">
        <!-- Icon -->
        <Icon name="trash" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

        <!-- Text -->
        <p class="text-sm text-white ml-2">Удалить</p>
      </button>
    </div>
  { /if }
</div>