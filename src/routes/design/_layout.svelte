<script>
  // Importing modules
  import { stores } from "@sapper/app";
  const { page } = stores();

  import { H3, H6, Paragraph, Caption } from "../../components/typography";

  // Importing components
  import Background from "../../components/Layout/Background.svelte";
  import Icon from "../../components/Icon.svelte";

  // Some variables
  let links = [
    {
      id: "typo",
      href: "/design/typo",

      title: "Типография"
    },
    {
      id: "buttons",
      href: "/design/buttons",

      title: "Кнопки"
    },
    {
      id: "inputs",
      href: "/design/inputs",

      title: "Поля ввода"
    },
    {
      id: "badges",
      href: "/design/badges",

      title: "Бэйджи"
    },
    {
      id: "tooltips",
      href: "/design/tooltips",

      title: "Подсказки"
    },
    {
      id: "images",
      href: "/design/images",

      title: "Картинки"
    },
    {
      id: "cards",
      href: "/design/cards",

      title: "Карточки"
    },
    {
      id: "dividers",
      href: "/design/dividers",

      title: "Разделители"
    },
    {
      id: "loaders",
      href: "/design/loaders",

      title: "Лоадеры"
    },
    {
      id: "branding",
      href: "/design/branding",

      title: "Брэндинг"
    },
    {
      id: "other",
      href: "/design/other",

      title: "Другое"
    }
  ]
</script>

<svelte:head>
  <title>{ links.find((x) => $page.path.includes(x.id)) != null ? links.find((x) => $page.path.includes(x.id)).title : "Главная" } - Lococovu Design System</title>
</svelte:head>

<!-- Page's layout -->
<main class="w-full">
  <!-- Hero Section -->
  { #if $page.path == "/design" }
    <section class="w-full h-screen relative flex justify-center items-center">
      <!-- Background -->
      <Background />

      <!-- Texts -->
      <div style="z-index: 2;" class="w-1/3 flex flex-col items-center justify-center">
        <!-- Logotype -->
        <img class="w-1/6" src="./logotype/small-white.svg" alt="Lococovu Logotype">

        <!-- Texts -->
        <div class="my-6 text-center">
          <!-- Heading -->
          <H3>Design System</H3>
          
          <!-- Description -->
          <Paragraph classes="mt-2">Что это такое? Design System - это набор всевозможных компонентов, которые используются при разработке проекта. В нашем случае, Design System - это набор всех кнопочек, текста, иконочек, бэйджиков и так и так далее.</Paragraph>
        </div>

        <!-- Buttons -->
        <div class="w-full flex">
          <button class="px-4 py-2 rounded-md w-1/2 mr-4 bg-input">
            <Caption opacity={false}>Узнать больше</Caption>
          </button>

          <button class="px-4 py-2 rounded-md w-1/2 bg-input">
            <Caption opacity={false}>Github</Caption>
          </button>
        </div>
      </div>
    </section>
  { /if }

  <section class="w-full flex relative bg-gray-200">
    <!-- Sidebar -->
    <sidebar class="w-3/12 flex flex-col px-8 py-8 border-r border-gray-300">
      <!-- Links -->
      <a class="text-black { $page.path == "/design" ? "text-base border-b-2 border-indigo-400" : "text-sm opacity-60" } my-2" href="/design">Главная</a>
      
      { #each links as link }
        <a class="text-black { $page.path.includes(link.id) ? "text-base border-b-2 border-indigo-400" : "text-sm opacity-60" } my-2" href="{ link.href }">{ link.title }</a>
      { /each }
    
      <!-- Buttons -->
      <div class="bg-input rounded-md p-3 mt-6">
        <H6>Хотите увидеть исходный код?</H6>
        <Paragraph classes="my-1">Тогда добро пожаловать на наш Github!</Paragraph>

        <button class="mt-2 px-4 py-2 rounded-md bg-icon-button w-full flex items-center justify-center">
          <!-- Icon -->
          <Icon name="github" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

          <!-- Text -->
          <Caption classes="ml-1" opacity={false}>Github</Caption>
        </button>
      </div>
    </sidebar>

    <!-- Content -->
    <div class="w-11/12 h-min-screen relative pt-12">
      <div class="w-full px-6 pb-24 relative">
        <slot></slot>
      </div>

      <!-- Footer -->
      <footer class="absolute bottom-0 w-full py-6 flex justify-center">
        <div class="w-1/3 flex flex-col items-center opacity-50">
          <!-- Logotype -->
          <svg class="w-3/12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605.83 150.45"><defs><style>.cls-1{fill:#000;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M182.5,47V90.23h24.66v11.09H171.08V47Z"/><path class="cls-1" d="M268.48,74.18a28.59,28.59,0,1,1-28.59-28.47A28.52,28.52,0,0,1,268.48,74.18Zm-46.1,0a17.51,17.51,0,1,0,17.51-17.52A17.52,17.52,0,0,0,222.38,74.18Z"/><path class="cls-1" d="M324.66,52.65l-6.41,9.5A21.69,21.69,0,0,0,305,57.47c-9,.12-17.63,5.9-18,16.71.38,10.8,9.05,16.58,18,16.7a21.6,21.6,0,0,0,13.21-4.68l6.42,9.5A30.69,30.69,0,0,1,305,102.64c-17.44,0-29.75-13-29.75-28.46S287.57,45.71,305,45.71A30.69,30.69,0,0,1,324.66,52.65Z"/><path class="cls-1" d="M384.92,74.18a28.59,28.59,0,1,1-28.59-28.47A28.52,28.52,0,0,1,384.92,74.18Zm-46.1,0a17.52,17.52,0,1,0,17.51-17.52A17.52,17.52,0,0,0,338.82,74.18Z"/><path class="cls-1" d="M441.1,52.65l-6.41,9.5a21.69,21.69,0,0,0-13.22-4.68c-9,.12-17.63,5.9-18,16.71.38,10.8,9.05,16.58,18,16.7a21.62,21.62,0,0,0,13.22-4.68l6.41,9.5a30.69,30.69,0,0,1-19.65,6.94c-17.44,0-29.75-13-29.75-28.46S404,45.71,421.45,45.71A30.69,30.69,0,0,1,441.1,52.65Z"/><path class="cls-1" d="M501.36,74.18a28.59,28.59,0,1,1-28.59-28.47A28.52,28.52,0,0,1,501.36,74.18Zm-46.1,0a17.52,17.52,0,1,0,17.51-17.52A17.52,17.52,0,0,0,455.26,74.18Z"/><path class="cls-1" d="M515.24,47l14.1,38.71L543.45,47h11.81l-19.78,54.3H523.21L503.43,47Z"/><path class="cls-1" d="M573.35,47v33a10.58,10.58,0,1,0,21.13,0V47h11.35V80.46a21.92,21.92,0,1,1-43.83,0V47Z"/><path class="cls-1" d="M8.68,81.57H73a6.7,6.7,0,0,1,6.7,6.7v27.9a0,0,0,0,1,0,0H-19.1A2.13,2.13,0,0,1-21.23,114v-2.56A29.91,29.91,0,0,1,8.68,81.57Z" transform="translate(-71 74.77) rotate(-60)"/><path class="cls-1" d="M-17.7,58.15H136.24a0,0,0,0,1,0,0V86a6.7,6.7,0,0,1-6.7,6.7H10.09A29.91,29.91,0,0,1-19.82,62.84V60.28a2.13,2.13,0,0,1,2.13-2.13Z" transform="translate(94.45 -12.69) rotate(60)"/><path class="cls-1" d="M125.55,115H61.06l18.48,32a5.44,5.44,0,0,0,3.63,2.6h19.94a24.23,24.23,0,0,0,24.16-24.16v-8.72A1.72,1.72,0,0,0,125.55,115Z"/></g></g></svg>

          <!-- Texts -->
          <Caption size="xs" classes="mt-1 text-center" dark>Maintained by <span class="border-b border-dotted border-gray-100">community</span>, crafted with :love: by <span class="border-b border-dotted border-gray-100">unfull team</span></Caption>
        </div>
      </footer>
    </div>
  </section>
</main>