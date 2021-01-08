<script>
  // Importing modules
  import { _ } from "svelte-i18n";
  import { goto, stores } from "@sapper/app";
  const { page } = stores();

  // Importing stores
  import pages from "../../../../config/landing/pages.json";
  import accounts from "../../../../stores/accounts.js";
  import profile from "../../../../stores/profile.js";

  // Importing components
  import Icon from "../../../Icon.svelte";
  import Logotype from "../../../Branding/Logotype/index.svelte";
  import MobileMenu from "../components/MobileMenu.landing.svelte";

  // Variable, that determines
  // whatever mobile menu opened
  // or no.
  let menuOpened = false;

  // We don't need to export
  // anything.
</script>

<!-- Component's Layout -->

{ #if menuOpened }
  <MobileMenu on:close={() => menuOpened = false} />
{ /if }

<header class="w-full fixed top-0 h-24 px-8 flex items-center justify-between">
  <!-- Logotype/Links -->
  <div class="flex items-center">
    <Logotype type="small" attrs={{ size: "6" }} />

    <!-- Links -->
    <div class="ml-2 hidden lg:flex items-center">
      { #each pages.filter((x) => x.title != null) as link}
        <a class="{ $page.path.includes(link.id) ? "border-b border-solid border-indigo-400 text-sm" : "text-xs opacity-75" } text-white mx-4" href="{ link.href }">{ $_(link.title) }</a>
      { /each }
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
      if (menuOpened) {
        menuOpened = false
      } else {
        menuOpened = true;
      };
    }} class="w-8 h-8 cursor-pointer rounded-md bg-input flex lg:hidden justify-center items-center">
      { #if menuOpened }
        <Icon name="x" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      { :else }
        <Icon name="chevron-down" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      { /if }
    </button>

    { #if $profile.id != null }
      <!-- Go to App -->
      <button on:click={(e) => {
        goto('/app');
      }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="mr-3 px-4 py-2 rounded-md hidden lg:flex items-center">
        <!-- Icon -->
        <Icon name="airplay" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

        <!-- Text -->
        <p class="text-sm text-white ml-2">Перейти в Приложение</p>
      </button>

      <!-- Profile -->
      <div class="hidden lg:flex items-center">
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
        window.location.href = "https://discord.gg/36c2k7PFNj";
      }} class="px-4 py-2 rounded-md hidden lg:flex items-center bg-icon-button mr-3">
        <!-- Icon -->
        <img style="height: 1rem; width: 1rem;" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">
      
        <!-- Text -->
        <p class="text-sm text-white ml-2">Наш Дискорд</p>
      </button>

      <button on:click={(e) => {
        goto('/authorize');
      }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="px-4 py-2 rounded-md hidden lg:flex items-center">
        <!-- Icon -->
        <Icon name="log-in" attrs={{ width: "1.25rem", height: "1.25rem", color: "#fff" }} />

        <!-- Text -->
        <p class="text-base text-white ml-2">Авторизоваться</p>
      </button>
    { /if }
  </div>
</header>