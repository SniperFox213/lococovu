<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";

  // Importing stores
  import { stores } from "@sapper/app";
  const { page } = stores();

  // Importing components
  import Icon from "../../../components/Icon.svelte";

  // Some variables
  let sections = [
    {
      id: "index",
      href: "/app/settings",
      title: "Основные настройки",
      icon: "user"
    },
    {
      id: "security",
      href: "/app/settings/security",
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

<main class="w-full h-full flex relative">
  <!-- Friends List -->
  <div class="w-full h-full px-2 relative">
    <div class="w-full h-full rounded-md bg-input flex flex-col">

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
</main>