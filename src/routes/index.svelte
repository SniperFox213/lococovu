<script>
  // Importing modules
  import { _ } from "svelte-i18n";

  // Importing components
  import Header from "../components/Header/index.svelte";
  import Background from "../components/Special/Background.svelte";

  import PageTransition from "../components/Loader/PageTransition.svelte";
</script>

<!-- Page Transition Component && Page Background -->
<PageTransition /> <Background />

<svelte:head>
  <title>{ $_("landing.pages.index.title") } - Lococovu</title>
</svelte:head>

<!-- Page's layout -->
<main class="relative">
  <!-- Header && Mobile Menu -->
  <Header type="landing" />

  <!-- Hero Section -->
  <section class="w-full h-screen flex items-center">
    <!-- Texts -->
    <div class="w-full md:w-1/2 md:pl-24 px-4 md:px-0">
      <h1 class="text-3xl md:text-8xl text-white font-medium">{ $_("landing.wip.title") }</h1>

      <p class="mt-2 md:mt-8 text-base text-gray-100">{@html $_("landing.wip.subtitle")}</p>
    </div>
  </section>

  <!-- Sad Cat emoji -->
  <div class="absolute bottom-0 right-0 w-1/4">
    <img src="./icons/Sad_Cat_Thumbs_Up.png" alt="Sad Cat">
  </div>
</main>