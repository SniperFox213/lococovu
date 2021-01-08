<script>
  // Importing components
  import Icon from "../../components/Icon.svelte";
</script>

<!-- Information Section -->
<section>
  <!-- Heading -->
  <h3 class="text-4xl text-black font-medium">Зачем?</h3>

  <!-- Paragraph -->
  <p class="text-base text-gray-900 opacity-80 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis vel voluptatem quia commodi, ex accusamus laboriosam, voluptatibus facere sit velit? Doloribus iste praesentium nisi?<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptates et dolores aut atque eaque earum ullam ipsa voluptatum, quidem suscipit ipsum assumenda rerum porro laudantium? Ducimus qui quos ipsa. Delectus culpa eaque eveniet explicabo!</p>

  <!-- Buttons -->
  <div class="bg-gray-300 border-l-2 rounded-r-md border-gray-400 w-full p-4 mt-4">
    <div class="flex items-center">
      <Icon name="link" attrs={{ width: "1rem", height: "1rem", color: "#000" }} />

      <h5 class="text-2xl text-black ml-2">Полезные ссылки</h5>
    </div>
    
    <p class="text-base text-gray-900 opacity-80 mt-2 w-2/3">Вот вам немного полезных и прикольных ссылок на наши соц. сети. Там вы всегда сможете пообщаться с разработчиками проекта, с простыми игроками и подобными шляпами. Так же на нашем <span class="border-b border-dotted border-gray-100">Github'e</span> вы сможете найти полный исходный код всего этого проекта (Frontend + Backend; без внешний API)</p>
  
    <div class="mt-4 flex items-center">
      <!-- Discord -->
      <button class="px-4 py-2 rounded-md bg-input flex items-center">
        <!-- Icon -->
        <img style="width: 1rem; height: 1rem;" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">

        <!-- Text -->
        <p class="text-sm text-white ml-1">Discord</p>
      </button>

      <!-- Github -->
      <button class="ml-4 px-4 py-2 rounded-md bg-input flex items-center">
        <!-- Icon -->
        <Icon name="github" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

        <!-- Text -->
        <p class="text-sm text-white ml-1">Github</p>
      </button>
    </div>
  </div>
</section>