<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";

  // Importing stores
  import { stores } from "@sapper/app";
  const { page } = stores();

  import profile from "../../stores/profile.js";
  import accounts from "../../stores/accounts.js";

  // Importing components
  import Icon from "../../components/Icon.svelte";

  // Some variables
  let sections = [
    {
      id: "index",
      href: "/settings",
      title: "Основные настройки",
      icon: "user"
    },
    {
      id: "security",
      href: "/settings/security",
      title: "Безопасность",
      icon: "lock"
    }
  ];
  
  let section = 0;

  page.subscribe((obj) => {
    if (obj.path == "/app/settings") {
      section = "index";
    } else {
      let page = sections.find((x) => obj.path.includes(x.id)) || { id: "index" };
      section = page.id;
    };
  });
</script>

<!-- Main Page's Layout -->
<main>
  <!-- Header -->
  <div class="w-full py-6 mb-2 flex items-center justify-between">
    <!-- Links -->
    <div class="flex items-center px-8">
      <img class="h-6" src="./logotype/small-white.svg" alt="">
    
      <div class="flex items-center ml-2">
        <a class="text-xs opacity-75 text-white mx-4" href="https://gaming.lococovu.me">Игры</a>
        <a class="text-xs opacity-75 text-white mx-4" href="https://gaming.lococovu.me">Облако</a>
        <a class="border-b border-solid border-indigo-400 text-sm text-white mx-4" href="/settings">Настройки</a>
      </div>
    </div>

    <!-- Buttons -->
  </div>

  <section class="h-full flex relative mx-8">
    <!-- Settings -->
    <div class="w-full h-full px-2 relative">
      <!-- Current Account Switcher -->
      <div class="w-min bg-input rounded-t-md p-4 flex items-center border-b border-gray-800">
        <!-- Avatar -->
        <div style="background: url({ $profile.internalAvatar }); background-size: cover;" class="w-12 h-12 rounded-md relative"></div>
        
        <!-- Texts -->
        <div class="ml-4">
          <p class="text-xs text-gray-100 opacity-60">Текущий аккаунт</p>

          <h1 class="text-md text-white font-medium">{ $profile.nickname == null ? $profile.displayName : $profile.nickname }</h1>
          <p class="text-sm text-gray-100 opacity-80">{ $profile.email }</p>
        </div>

        <!-- Buttons -->
        <div class="ml-4">
          <button class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
            <Icon name="chevron-down" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          </button>
        </div>

      </div>

      <div class="w-full h-full rounded-md rounded-tl-none bg-input flex flex-col">

        <!-- Mini-Header -->
        <div class="w-full flex items-center justify-between p-4">
          <!-- Sections -->
          <div class="flex items-center">
            
            { #each sections as s }
              <div on:click={(e) => {
                goto(s.href);
              }} class="transition duration-300 ease-in-out cursor-pointer flex items-center px-4 py-2 { s.id == section ? "text-white border-b-2 border-solid border-indigo-400" : "text-gray-200 opacity-75" } text-xs relative">
                { #if s.id == section }
                  <div in:fade>
                    <Icon name="{ s.icon }" attrs={{ width: "1.1rem", height: "1.1rem", color: "#7f9cf5", class: "mr-2" }} />
                  </div>
                { /if }
                
                { s.title }
              </div>            
            { /each }
          </div>
        </div>

        <!-- List Itself -->
        <div class="w-full pb-8">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</main>