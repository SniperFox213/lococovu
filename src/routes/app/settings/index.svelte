<script>
  // Importing modules

  // Importing stores
  import profile from "../../../stores/profile";

  // Importing components
  import Icon from "../../../components/Icon.svelte";
  import { H6, Paragraph, Caption } from "../../../components/typography";

  let nickname = $profile.nickname;
</script>

<main class="w-full h-full flex relative">
  <!-- Friends List -->
  <div class="w-full  h-full px-2 relative">
    <div class="w-full h-full rounded-md bg-input flex flex-col">

      <!-- Mini-Header -->
      <div class="w-full flex items-center justify-between p-4">
        <!-- Sections -->
        <div class="flex items-center">
          <div class="px-4 py-2 text-white text-xs border-b-2 border-solid border-indigo-400 relative flex items-center ">            
            <Icon name="user" attrs={{ width: "1.1rem", height: "1.1rem", color: "#7f9cf5", class: "mr-2" }} />

            Настройки аккаунта
          </div>

          <div class="px-4 py-2 text-gray-200 text-xs relative opacity-75">
            Безопасность
          </div>
          
          <div class="px-4 py-2 text-gray-200 text-xs relative opacity-75">
            Платёжная информация
          </div>

          <div class="px-4 py-2 text-gray-200 text-xs relative opacity-75">
            Вид сайта
          </div>
        </div>
      </div>

      <!-- List Itself -->
      <div style="overflow: hidden; overflow-y: auto;" class="w-full flex-grow relative">
        <div class="absolute inset-0 w-full h-full">
          <!-- Change Avatar -->
          <div class="px-4 mb-4">
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

          
          <div class="w-full flex items-stretch">
            
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
        </div>
      </div>
    </div>
  </div>
</main>