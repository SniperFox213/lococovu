<script>
  // Importing modules
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  // Importing stores

  onMount(() => {
    if (cookies.get('tutorial')) {
      // Tutorial is skipped
      goto('/start/complete');
    };
  });

</script>

<main class="w-full h-screen relative flex justify-center items-center">
  <!-- Header -->
  <header class="absolute top-0 w-full pt-4 flex justify-center items-center">
    <!-- Logotype -->
    <img class="w-1/12" src="./logotype/white-full.svg" alt="">

    <!-- Divider -->
    <div style="height: 1.2rem; width: 1px;" class="mx-2 bg-white rounded-sm"></div>

    <!-- Text -->
    <p class="text-sm text-white mb-0.5">Обучение</p>
  </header>

  <!-- Container -->
  <slot></slot>
</main>