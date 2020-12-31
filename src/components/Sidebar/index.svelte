<script>
  // Importing modules
  import { onMount } from "svelte";
  import Icon from "../../Icons/index.svelte";

  import { goto } from "@sapper/app";

  import { stores } from "@sapper/app";
  const { page } = stores();

  import pages from "../../config/pages.json";

  // currentPage variable
  let currentPage = "index";
  
  // Subscribe to page store
  // to determine page changes
  page.subscribe((obj) => {
    if (obj.path == "/app") {
      currentPage = "index";
    } else {
      // Now let's check what
      // current page it is
      pages.forEach((p) => {
        if (p.id != "index") {
          if (obj.path.includes(p.id)) {
            currentPage = p.id;
          };
        };
      });
    };
  });

  // onMount Event
  onMount(() => {
    // Let's now update our notifications
    // list (in index page)...
    let exploreIndex = pages.findIndex(p => p.id == "index");

    // And now let's update index's information.
    let explore = pages.find(p => p.id == "index");
    explore.subtitle = "4 Уведомления";
    explore.notifications = 4;

    pages[exploreIndex] = explore;
  });
</script>

<sidebar class="h-screen w-1/5 pt-6 flex flex-col">
  <!-- Logotype -->
  <div class="my-1 w-full flex justify-center items-center">
    <img class="w-3/5" src="./logotype/white-full.svg" alt="">
  </div>

  <!-- User Account -->
  <div class="mt-6 px-6">
    <div class="p-2 rounded-md bg-indigo-400 flex items-center relative">
      <!-- Avatar -->
      <img class="w-10 h-10 rounded-md" src="https://i.redd.it/t3jryj84rd801.png" alt="Avatar Icon">

      <!-- Texts -->
      <div class="ml-4">
        <h1 class="text-base text-white font-medium">juiipup</h1>
        <p class="text-sm text-white">Level 1</p>
      </div>

      <!-- Icon -->
      <div class="absolute inset-y-0 right-0 h-full rounded-r-md bg-container opacity-75 px-2 flex items-center text-white">
        <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    </div>
  </div>

  <!-- Free-hours Status -->
  <div class="px-6 my-6">
    <div class="w-full h-2 rounded-md bg-input relative">
      <div class="w-1/3 absolute h-2 bg-yellow-400 rounded-md"></div>
    </div>

    <!-- Texts -->
    <div class="mt-2 flex items-center justify-between">
      <div>
        <h1 class="tex-sm text-white font-medium">120/750</h1>
        <p class="text-xs text-gray-100 opacity-75">Бесплатные кредиты</p>
      </div>

      <!-- Help Icon -->
      <svg style="height: 0.9rem; width: 0.9rem;" class="text-white opacity-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    </div>
  </div>

  <!-- Links -->
  <div class="flex-grow mt-3 px-4 md:px-6 relative">
    
    { #each pages as page }
      <div on:click={(e) => {
        if (currentPage != page.id) {
          goto(page.href);
        };
      }} class="cursor-pointer my-3 flex items-center py-2 px-2 relative { currentPage != page.id ? "opacity-50" : "" }">
        <!-- Icon -->
        <Icon name="{ page.icon }" attrs={{ width: "1.5rem", height: "1.5rem", color: currentPage != page.id ? "#fff" : "#7f9cf5" }} />
        
        <!-- Notifications Icon -->
        { #if page.notifications != null }
          <div class="absolute top-0 left-0 pl-5 pt-2">
            <div class="rounded-full px-1 bg-red-400 text-white text-xs">
              { page.notifications }
            </div>
          </div>
        { /if }

        <!-- Title -->
        <div class="ml-3">
          <p class="text-sm text-white">{ page.title }</p>
          
          { #if page.subtitle != null }
            <p class="text-xs text-gray-100 opacity-75">{ page.subtitle }</p>
          { /if }
        </div>
      </div>
    { /each }

    <!-- 
      Sidebar Footer 
    -->
    <div class="absolute bottom-0 pb-8">
      
      <!-- Logout -->
      <div class="flex items-center w-full text-white py-2 px-2 opacity-50">
        <!-- Icon -->
        <svg style="width: 1rem; width: 1rem;" class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>

        <!-- Title -->
        <p class="text-sm ml-4">Выйти</p>
      </div>
    </div>
  </div>
</sidebar>