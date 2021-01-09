<script>
  // Importing components
  import Icon from "../../components/Icon.svelte";

  import { H3, H5, Paragraph, Caption } from "../../components/typography";
</script>

<!-- Information Section -->
<section>
  <!-- Heading -->
  <H3 dark>Зачем?</H3>

  <!-- Paragraph -->
  <Paragraph dark>Па приколу</Paragraph>

  <!-- Buttons -->
  <div class="bg-gray-300 border-l-2 rounded-r-md border-gray-400 w-full p-4 mt-4">
    <div class="flex items-center">
      <Icon name="link" attrs={{ width: "1rem", height: "1rem", color: "#000" }} />

      <H5 classes="ml-2" dark>Полезные ссылки</H5>
    </div>
    
    <Paragraph classes="w-2/3" dark>Вот вам немного полезных и прикольных ссылок на наши соц. сети. Там вы всегда сможете пообщаться с разработчиками проекта, с простыми игроками и подобными шляпами. Так же на нашем <span class="border-b border-dotted border-gray-100">Github'e</span> вы сможете найти полный исходный код всего этого проекта (Frontend + Backend; без внешний API)</Paragraph>

    <div class="mt-4 flex items-center">
      <!-- Discord -->
      <button class="px-4 py-2 rounded-md bg-input flex items-center">
        <!-- Icon -->
        <img style="width: 1rem; height: 1rem;" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">

        <!-- Text -->
        <Caption opacity={false} classes="ml-1">Discord</Caption>
      </button>

      <!-- Github -->
      <button class="ml-4 px-4 py-2 rounded-md bg-input flex items-center">
        <!-- Icon -->
        <Icon name="github" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

        <!-- Text -->
        <Caption opacity={false} classes="ml-1">Github</Caption>
      </button>
    </div>
  </div>
</section>