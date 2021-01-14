<script>
  // Importing modules
  
  // Importing stores
  import profile from "../../stores/profile.js";
  import friends from "../../stores/friends.js";

  // Importing components
  import { Caption } from "../../components/typography";
  import Icon from "../../components/Icon.svelte";

  import { Profile } from "../../components/cards";
</script>

<!-- Page's Layout -->

<!-- News && Player Stats -->
<div class="w-full mb-6 flex items-center">
  <!-- Player's Stats section -->
  <section class="w-1/2 py-6 px-4">
    <!-- Player's Rank -->
    <div class="w-full flex items-center px-2">
      <!-- Rank Icon -->
      <div class="w-24 h-24 rounded-md bg-input">

      </div>

      <!-- Texts -->
      <div class="w-full px-6">
        <p class="text-xs text-yellow-300">Бронзовый ранг</p>
        <h2 class="mb-4 text-xl text-white font-medium">Маршик</h2>

        <!-- Level -->
        <div class="w-full h-2 rounded-md relative bg-input">
          <div class="w-1/2 h-2 rounded-md bg-blue-400"></div>
        </div>

        <div class="mt-2 w-full flex justify-between">
          <p class="text-xs text-gray-200">1 Уровень</p>

          <p class="text-xs text-gray-200">Очков до второго уровня: <span class="opacity-70">120</span></p>
        </div>
      </div>
    </div>

    <!-- Inventory -->
    <div class="mt-8 w-full pr-6">
      <!-- Texts -->
      <div class="w-full flex items-center">
        <!-- Icon -->
        <Icon name="package" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fff" }} />

        <!-- Text -->
        <div class="ml-2">
          <h2 class="text-base font-medium text-white">Инвентарь</h2>
          <p class="text-xs text-gray-100 opacity-70">Отображаем только валюты</p>
        </div>
      </div>

      <!-- Money -->
      <div class="mt-4 w-full flex justify-between">
        <!-- Lambdas Card -->

        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} />

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Лямбды</p>
                <h2 class="text-md text-white font-bold">100 λ</h2>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Hour-Credits -->
        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} />

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Кредиты</p>
                <h2 class="text-md text-white font-bold">10 ч.</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Free Hours -->
        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} />

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Бесп. часы</p>
                <h2 class="text-md text-white font-bold">750 ч.</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- News -->
  <section class="w-1/2 py-6 relative px-4">
    <!-- Card -->
    <div class="w-full relative">
      <div class="pt-60%">
        <div class="absolute inset-0 w-full bg-input rounded-md">

        </div>
      </div>
    </div>

  </section>
</div>

<!-- Latest Games + Friends List -->
<div class="w-full flex items-stretch">
  <!-- Latest Games -->
  <div class="w-2/3 flex relative">
    <!-- Game Entry -->
    <div class="w-1/2 px-2">
      <div class="w-full pt-110% relative">
        <!-- Badge -->
        <div style="z-index: 1;" class="absolute top-0 left-0 p-3">
          <div class="px-3 py-1 rounded-md bg-indigo-400">
            <p class="text-xs text-white">Последняя игра</p>
          </div>
        </div>
        
        <!-- Image -->
        <div style="z-index: 0; background: url('https://www.godisageek.com/wp-content/uploads/Forager-review.jpg'); background-size: cover; background-position: center;" class="absolute inset-0 w-full h-full rounded-md">
        </div>

        <!-- Title Background -->
        <div style="z-index: 1;" class="opacity-80 bg-input absolute bottom-0 w-full h-12 rounded-b-md"></div>

        <!-- Title -->
        <div style="z-index: 3;" class="absolute bottom-0 w-full rounded-b-md flex items-center justify-between h-12 px-4">
          <!-- Text -->
          <div>
            <p class="text-xs text-gray-100 opacity-70">Быстрое</p>
            <h1 class="text-md text-white font-medium">Forager</h1>
          </div>

          <!-- Play Button -->
          <button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
            <!-- Icon -->
            <Icon name="server" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          </button>
        </div>
      </div>
    </div>

    <div class="w-1/2 px-2">
      <div class="w-full pt-110% relative">
        <!-- Badge -->
        <div style="z-index: 1;" class="absolute top-0 left-0 p-3">
          <div class="px-3 py-1 rounded-md bg-indigo-400">
            <p class="text-xs text-white">Последняя игра</p>
          </div>
        </div>
        
        <!-- Image -->
        <div style="z-index: 0; background: url('https://www.godisageek.com/wp-content/uploads/Forager-review.jpg'); background-size: cover; background-position: center;" class="absolute inset-0 w-full h-full rounded-md">
        </div>

        <!-- Title Background -->
        <div style="z-index: 1;" class="opacity-80 bg-input absolute bottom-0 w-full h-12 rounded-b-md"></div>

        <!-- Title -->
        <div style="z-index: 3;" class="absolute bottom-0 w-full rounded-b-md flex items-center justify-between h-12 px-4">
          <!-- Text -->
          <div>
            <p class="text-xs text-gray-100 opacity-70">Быстрое</p>
            <h1 class="text-md text-white font-medium">Forager</h1>
          </div>

          <!-- Play Button -->
          <button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
            <!-- Icon -->
            <Icon name="server" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Friends List -->
  <div class="w-1/3 flex flex-col relative px-4">
    <!-- Title -->
    <div class="flex justify-between mb-4">
      <h1 class="text-xl text-white font-medium">Друзья</h1>
      
      <button>
        <p class="text-sm text-indigo-400">Добавить друга</p>
      </button>
    </div>

    <!-- List -->
    <div style="overflow: hidden; overflow-y: auto;" class="flex-grow w-full relative">
      <div class="absolute inset-0 w-full h-full">
        { #each $friends.filter((x) => !x.cached) as friend }
          <Profile id={ friend.id } />
        { /each }
      </div>
    </div>
  </div>
</div>