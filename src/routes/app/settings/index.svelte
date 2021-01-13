<script>
  // Importing modules
  import { fade } from "svelte/transition";

  // Importing stores
  import profile from "../../../stores/profile";

  // Importing components
  import Icon from "../../../components/Icon.svelte";
  import { H6, Paragraph, Caption } from "../../../components/typography";

  // Variables
  let nickname = $profile.nickname;
  let description = $profile.description;
</script>

<!-- Change Avatar -->
<div in:fade class="px-4 mb-4">
  <H6>Аватар</H6>

  <div class="flex items-center mt-2 p-3 rounded-md border border-gray-800">
    <div style="background: url({ $profile.internalAvatar }); background-size: cover;" class="w-24 h-24 rounded-md relative"></div>

    <!-- Texts + Buttons -->
    <div class="ml-5">
      <!-- Buttons -->
      <div class="flex">
        <!-- Upload -->
        <button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="px-4 h-8 rounded-md bg-icon-button">
          <Caption opacity={false}>Загрузить новую</Caption>
        </button>            

        <!-- Remove -->
        <button class="ml-4 px-4 h-8 rounded-md bg-icon-button">
          <Caption opacity={false}>Убрать аватарку</Caption>
        </button>
      </div>

      <!-- Texts -->
      <Caption size="xs" classes="mt-2 w-4/6">Принимаются любые картинки, кроме анимированных. Анимированны картинки доступны для пользователе с рангом <span class="border-b border-gray-100 border-dotted">Путин нахуй</span> и выше</Caption>
    </div>
  </div>
</div>


<div in:fade class="w-full flex items-stretch">
  
  <!-- Change Nickname -->
  <div class="w-1/2 px-4 relative">
    <!-- Title + Caption -->
    <H6>Никнейм</H6>

    <div class="flex w-full bg-icon-button p-2 rounded-md mt-3 opacity-80 relative">
      <!-- Icon -->
      <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
        <Icon name="hash" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </div>

      <!-- Input itself -->
      <input bind:value={nickname} on:keypress={(e) => {
        if (nickname != null && nickname.split('').length >= 16) {
          e.preventDefault();
        };
      }} class="ml-2 text-sm text-gray-400 bg-icon-button" placeholder="Никнейм" type="text">
    
      <!-- Save Button -->
      <div class="absolute inset-y-0 right-0 h-full flex items-center p-2">
        <p class="text-sm text-white opacity-50">{ nickname != null ? nickname.split('').length : 0 }/16</p>
      </div>
    </div>

    <p class="mt-2 text-xs text-white opacity-60 w-5/6">Игровой ник, это ник, который будет автоматически присваиваться Вам на наших серверах. Так же с помощь. этого ника другие игроки смогут найти Вас в списке друзей.</p>

  </div>

  <!-- Status -->
  <div class="w-1/2 px-4 relative opacity-50">
    <!-- Title + Caption -->
    <H6>Статус</H6>

    <div class="flex w-full bg-icon-button p-2 rounded-md mt-3 opacity-80 relative">
      <!-- Icon -->
      <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
        <Icon name="meh" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </div>

      <!-- Input itself -->
      <input on:keypress={(e) => {
        e.preventDefault();
      }} class="ml-2 text-sm text-gray-400 bg-icon-button" placeholder="Плохой день..." type="text">
    
      <div class="absolute inset-y-0 right-0 h-full flex items-center p-2">
        <p class="text-sm text-white opacity-50">{ nickname != null ? nickname.split('').length : 0 }/16</p>
      </div>
    </div>

    <p class="mt-2 text-xs text-white opacity-60 w-5/6">Кастомный статус, который будет отображаться всем пользователям сайта и всем игрокам на сервере. Пока что в разработке</p>
  </div>

</div>

<div in:fade class="w-full flex mt-6">
  <!-- Description -->
  <div class="w-1/2 px-4 relative">
    <!-- Title + Caption -->
    <H6>Описание аккаунта</H6>

    <div class="flex items-start w-full h-3/6 bg-icon-button p-2 mt-4 rounded-md mr-3 relative">
      <!-- Icon -->
      <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center mr-2">
        <Icon name="feather" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </div>

      <!-- Input itself -->
      <textarea on:keypress={(e) => {
        if (description != null && description.split('').length >= 2000) {
          e.preventDefault();
        };
      }} bind:value={description} class="w-full h-full bg-icon-button text-gray-400 text-sm pt-1.5" placeholder="Описание"></textarea>

      <!-- Word Counter -->
      <div class="absolute bottom-0 right-0 p-2">
        <p class="text-sm text-white opacity-50">{ description != null ? description.split('').length : 0 }/2000</p>
      </div>
    </div>

    <p class="mt-2 text-xs text-white opacity-60 w-5/6">Краткое описание профиля, в котором вы можете написать всё, что захотите! Расскажите про себя, что любите делать и где играть.</p>

  </div>
</div>