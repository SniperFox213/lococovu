<script>
  // Importing modules
  import Icon from "../../../Icons/index.svelte";

  // Importing components
  import FriendEntry from "./components/FriendEntry.svelte";

  // Importing notifications + friends stores
  import notifications from "../../../stores/notifications.js";
  import friends from "../../../stores/friends.js"
  
</script>

<!-- Friends List + Warnings -->
<div class="w-full flex relative">
  <div style="padding-top: 40%" class="w-full relative">
  
    <div class="absolute inset-0 w-full h-full flex">

      <!-- Warnings -->
      <div class="w-1/2 h-full px-2 relative">
        <div class="w-full h-full rounded-md bg-input flex flex-col">

          <!-- Mini-Header  -->
          <div class="w-full flex items-center justify-start p-4">
            <div class="flex items-center">
              <div class="px-4 py-2 text-white text-xs border-b-2 border-solid border-indigo-400 relative">
                Важные уведомления

                { #if $notifications.filter(n => n.type == "warning").length > 0 }
                  <div class="absolute top-0 right-0">
                    <div class="rounded-full px-1 bg-red-400 text-white text-xs">
                      { $notifications.filter(n => n.type == "warning").length }
                    </div>
                  </div>
                { /if }
              </div>
            </div>
          </div>

          <!-- List Itself -->
          <div style="overflow: hidden; overflow-y: auto;" class="w-full flex-grow relative">
            <div class="absolute inset-0 w-full h-full { $notifications.filter(n => n.type == "warning").length > 0 ? "" : "flex justify-center items-center" } px-6">

              { #if $notifications.filter(n => n.type == "warning").length > 0 }
                { #each $notifications.filter(n => n.type == "warning") as notification }
                  <div class="w-full my-4 p-3 bg-icon-button rounded-md">
                    <!-- Mini-Header -->
                    <div class="w-full py-2 flex items-center justify-between">
                      <!-- Title -->
                      <div class="flex items-center">
                        <Icon name="alert-triangle" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fc8181" }} />
                        <h1 class="text-xl text-white ml-2">Lorem ipsum dolor sit.</h1>
                      </div>

                      <!-- Button -->
                      <button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
                        <Icon name="chevron-down" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fff" }} />
                      </button>
                    </div>

                    <p class="text-gray-100 text-sm opacity-75 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae, laudantium eligendi voluptate sint in!</p>
                  </div>
                { /each }
              { :else }
                <div class="w-full px-4 relative flex justify-center items-center">
                  <div class="rounded-md border border-dashed border-gray-700 flex flex-col px-3 py-8 justify-center items-center">

                    <!-- Icon -->
                    <img class="w-1/5" src="./icons/hugging-face.png" alt="">

                    <!-- Texts -->
                    <div class="mt-3 opacity-75 px-4 md:px-6 lg:px-12 text-center">
                      <h1 class="text-xl text-white font-bold">Всё чисто!</h1>
                      <p class="text-sm text-gray-100">Тут будут отображаться САМЫЕ важные уведомления, которые будут требовать немедленного вмешательства. Зачастую такие уведомления плохие. И у Вас их пока что нет! Ура!</p>
                    </div>

                  </div>
                </div>
              { /if }

            </div>
          </div>
        </div>
      </div>

      <!-- Friends List -->
      <div class="w-1/2 h-full px-2 relative">
        <div class="w-full h-full rounded-md bg-input flex flex-col">

          <!-- Mini-Header -->
          <div class="w-full flex items-center justify-between p-4">
            <!-- Sections -->
            <div class="flex items-center">
              <div class="px-4 py-2 text-white text-xs border-b-2 border-solid border-indigo-400 relative">
                Ваши друзья
              </div>

              <div class="px-4 py-2 text-gray-200 text-xs relative opacity-75">
                Заявки

                <!-- Badge -->
                { #if $notifications.filter(n => n.type == "friend").length > 0 }
                  <div class="absolute top-0 right-0">
                    <div class="rounded-full px-1 bg-red-400 text-white text-xs">
                      { $notifications.filter(n => n.type == "friend").length }
                    </div>
                  </div>
                { /if }
              </div>
            </div>

            <!-- Add Button -->
            <button class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
              <svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>

          </div>

          <!-- List Itself -->
          <div style="overflow: hidden; overflow-y: auto;" class="w-full flex-grow relative">
            <div class="absolute inset-0 w-full h-full">

              { #each $friends as friend }
                <FriendEntry id={ friend.id } />
              { /each }

              <!-- Add Friends -->
              <div class="w-full relative px-6 pt-2 pb-6">
                <div class="w-full h-full flex items-center rounded-md border border-dashed border-gray-700 p-3">

                  <!-- Icon -->

                  <!-- Texts -->
                  <div class="flex items-center">
                    <div class="opaicty-75">
                      <h1 class="text-md text-white font-medium">Хотите больше друзей?</h1>
                      <p class="text-xs text-gray-100">Тогда или попробуйте их найти или же просто скиньте им ссылку на свой профиль!</p>
                    </div>

                    <!-- Buttons -->
                    <div class="ml-2 w-2/3 relative">
                      <button class="w-full flex justify-center items-center py-1 bg-icon-button rounded-md">
                        <!-- Title -->
                        <p class="text-xs text-white ml-2">Найти друзей</p>
                      </button>

                      <button class="mt-3 w-full flex justify-center items-center py-1 bg-icon-button rounded-md">
                        <!-- Title -->
                        <p class="text-xs text-white ml-2">Ссылка на профиль</p>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

<!-- Other Notifications -->
<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2 mt-12">
  <h1 class="text-2xl text-white opacity-75 font-bold">Другие уведомления</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Общий список всех ваших уведомлений.</p>
</div>

<!-- Notifications List -->
<div class="w-full mt-2 flex flex-wrap">
  { #each $notifications.filter(n => n.type == "other") as notification }
    <div class="w-1/4 relative px-2 py-2">
      <div style="padding-top: 100%;" class="relative">
        <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col">

          <!-- Mini-Header -->
          <div class="w-full flex items-center justify-between p-4">
            <!-- Type -->
            <h1 class="text-md text-white">Подарок</h1>

            <!-- Settings -->
            <button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
              <svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>

          <!-- Content -->
          <div class="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
            
            <div class="flex items-center">
              <!-- Icon -->
              <img style="height: 1.2rem; width: 1.2rem;" src="./icons/wrapped-present.png" alt="">
              
              <h1 class="text-2xl text-white font-medium ml-1">Новый подарок</h1>
            </div>

            <!-- Description -->
            <p class="px-4 text-xs text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate consectetur iure laboriosam delectus at.</p>
          </div>

          <!-- Author (if exists) -->
          <div class="absolute bottom-0 w-full flex items-center p-4 opacity-75">
            <p class="text-sm text-gray-100">от</p>

            <!-- Author Avatar -->
            <img class="w-5 h-5 rounded-md mx-1" src="https://pm1.narvii.com/7147/35c5df9b0cb86b396fa22d095cfdf1a9e4023705r1-1022-1022v2_00.jpg" alt="Avatar Icon">

            <!-- Name -->
            <p class="text-sm text-gray-100 border-b border-dotted border-gray-100">voyaje</p>
          </div>

        </div>
      </div>
    </div>
  { /each }
</div>