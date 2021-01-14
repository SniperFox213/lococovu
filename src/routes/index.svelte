<script>
  // Importing modules
  import { _ } from "svelte-i18n";

  // Importing components
  import Header from "../components/Layout/Header/index.svelte";
  import Background from "../components/Layout/Background.svelte";

  import PageTransition from "../components/Loader/PageTransition.svelte";
</script>

<!-- Page Transition Component && Page Background -->
<PageTransition />

<svelte:head>
  <title>{ $_("landing.pages.index.title") } - Lococovu</title>
</svelte:head>

<!-- Page's layout -->
<main style="z-index: 1;" class="relative">
  <!-- Header && Mobile Menu -->
  <Header type="landing" />

  <!-- Hero Section -->
  <section style="z-index: 0;" class="w-full h-screen relative flex justify-center items-center">
    <Background />

    <!-- News -->
    <div style="z-index: 1;" class="w-full md:w-2/3 h-screen md:h-2/3 bg-input rounded-md relative flex justify-center items-center">
      <!-- Texts -->
      <div class="w-full px-4 md:px-8 pr-16 md:pr-32">
        <h1 class="text-2xl md:text-6xl text-white font-medium">{ $_("landing.wip.title") }</h1>
    
        <p class="mt-2 md:mt-8 text-base text-gray-100">{@html $_("landing.wip.subtitle")}</p>
      </div>
      
      <!-- Sad Cat emoji -->
      <div class="absolute bottom-0 right-0 w-1/4">
        <img src="./icons/Sad_Cat_Thumbs_Up.png" alt="Sad Cat">
      </div>
    </div>
  </section>

  <!-- Popular Games Section -->
  <section class="w-full h-screen bg-gray-200">

  </section>
</main>