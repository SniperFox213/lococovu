<script>
  // Importing modules
  import { _ } from "svelte-i18n";
  import { goto, stores } from "@sapper/app";
  const { page } = stores();

  import pages from "../../../../config/landing/pages.json";

  // Importing stores
  import profile from "../../../../stores/profile.js";
  import accounts from "../../../../stores/accounts.js";

  // Importing modules
  import Icon from "../../../Icon.svelte";

  // We don't need to export
  // anything.
</script>

<!-- Component's Layout -->

<div style="z-index: 997;" class="mt-24 fixed bg-container inset-0 w-full h-screen lg:hidden px-2 flex flex-col">
  <!-- Pages -->
  <div style="overflow: hidden; overflow-y: auto;" class="relative w-full flex-grow">
    <div class="absolute inset-0 w-full h-full">

      <!-- Site Services -->
      <div class="w-full">
        <!-- Texts -->
        <div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
          <h1 class="text-xl text-white opacity-75 font-bold">Главное</h1>
          <p class="text-sm text-white opacity-50">Всё самое базовое и главное. То, что Вам уж точно пригодится</p>
        </div>

        <!-- List -->
        <div class="relative flex flex-wrap mt-4">
          <!-- Account -->
          <div class="w-full p-2">
            <div class="pt-40% w-full relative">
              <div on:click={(e) => {
                if ($profile.id == null) {
                  goto('/authorize');
                };
              }} class="absolute { $profile.id == null ? "cursor-pointer" : "" } inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-start justify-center px-4 opacity-80">
                
                {#if $profile.id != null}
                  <!-- Icon -->
                  <div class="flex items-center">
                    <div style="background: url({ $profile.internalAvatar }); background-size: cover;" class="w-12 h-12 rounded-md"></div>

                    <!-- Texts -->
                    <div class="ml-2">
                      <h1 class="text-md text-white font-medium">{ $profile.nickname == null ? $profile.displayName : $profile.nickname }</h1>

                      <div class="flex mt-1">
                        <img style="height: 1.2rem; width: 1.2rem;" src="./icons/desktop-computer.png" alt="">
                        <p class="text-sm text-gray-100 ml-1">Сидит на сайте</p>
                      </div>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="w-full mt-4 flex pr-2">
                    <!-- Settings -->
                    <button class="w-full px-4 py-2 mr-3 rounded-md bg-input flex justify-center items-center opacity-80">
                      <!-- Icon -->
                      <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

                      <!-- Text -->
                      <p class="text-sm ml-1 text-white">Настройки</p>
                    </button>

                    <!-- Change Account -->
                    <button on:click={(e) => {
                      goto('/authorize');
                    }} class="w-full px-4 py-2 rounded-md bg-input flex justify-center items-center opacity-80 relative">
                      <!-- Icon -->
                      <Icon name="list" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />

                      <!-- Text -->
                      <p class="text-sm ml-1 text-white">Аккаунты</p>

                      { #if $accounts.profiles.length > 0 }
                        <div class="absolute top-0 right-0 pr-5 pt-1">
                          <div class="w-4 h-4 bg-indigo-400 rounded-full opacity-80 flex justify-center items-center text-xs text-white">
                            { $accounts.profiles.length }
                          </div>
                        </div>
                      { /if }
                    </button>
                  </div>

                  <!-- Badge -->
                  <div class="absolute right-0 h-full w-2 bg-indigo-400 rounded-r-md"></div>
                { :else }
                  <div class="flex items-center">
                    <!-- Icon -->
                    <img class="h-3/6" src="./icons/man-dancing.png" alt="Dancing Man">

                    <!-- Texts -->
                    <div class="text-left ml-4">
                      <h1 class="text-xl text-white font-medium">Аккаунт</h1>
                      <p class="text-sm text-gray-100">Сначала вам нужно войти в Ваш аккаунт. Нажмите сюда, что бы войти</p>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </div>

          <!-- Game Library -->
          { #each pages.filter((x) => x.mobile.icon != null) as card }
            <div class="w-1/2 p-2">
              <div class="pt-100% w-full relative">
                <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                  <!-- Icon -->
                  <img class="w-4/12" src="{ card.mobile.icon }" alt="">

                  <!-- Texts -->
                  <div class="text-left mt-2">
                    <h1 class="text-md text-white font-medium">{ $_(card.title == null ? card.mobile.title : card.title) }</h1>
                    <p class="text-xs text-gray-100">{ $_(card.mobile.subtitle) }</p>
                  </div>
                </div>
              </div>
            </div>            
          { /each }
        </div>
      </div>

      <!-- Other -->
      <div class="w-full mt-8">
        <!-- Texts -->
        <div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
          <h1 class="text-xl text-white opacity-75 font-bold">Другое</h1>
          <p class="text-sm text-white opacity-50">Всё остальное</p>
        </div>

        <!-- List -->
        <div class="relative flex flex-wrap mt-4">
          
          { #each pages.filter((x) => x.mobile.subtitle != null && x.mobile.icon == null) as card }
            <div class="w-1/2 p-2">
              <div class="pt-100% w-full relative">
                <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col items-center justify-center px-4 opacity-80">
                  <!-- Texts -->
                  <div class="text-left mt-2">
                    <h1 class="text-md text-white font-medium">{ $_(card.title == null ? card.mobile.title : card.title) }</h1>
                    <p class="text-xs text-gray-100">{ $_(card.mobile.subtitle) }</p>
                  </div>
                </div>
              </div>
            </div>
          { /each }

          <!-- Donate -->
          <div class="w-full p-2">
            <div class="pt-40% w-full relative">
              <div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full rounded-md flex items-center justify-center px-4 opacity-80">
                <!-- Icon -->
                <img class="h-2/6" src="./icons/hugging-face.png" alt="Dancing Man">

                <!-- Texts -->
                <div class="text-left ml-3">
                  <h1 class="text-md text-white font-medium">Поддержать проект</h1>
                  <p class="text-xs text-gray-100">Мы живём только на донаты наших игроков. Мы не показываем рекламу. Только донаты. Помогите нам выжить, пожалуйста {"<"}3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>