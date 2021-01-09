<script>
  // Importing modules
  import FriendEntry from "../../components/Extra/FriendEntry.svelte";
  
  import friends from "../../stores/friends.js";
  import notifications from "../../stores/notifications.js";

  // Importing components
  import Icon from "../../components/Icon.svelte";
  import AddFriendPopover from "../../components/Screens/AddFriendPopover.svelte";

  let addFriendPopover = false;
</script>

<!-- Add Friend Popout -->
{ #if addFriendPopover }
  <AddFriendPopover on:close={(e) => {
    addFriendPopover = false;
  }} />
{ /if }

<main class="w-full h-full flex relative">
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
        <button on:click={(e) => {
          addFriendPopover = true;
        }} class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
          <Icon name="plus" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
        </button>

      </div>

      <!-- List Itself -->
      <div style="overflow: hidden; overflow-y: auto;" class="w-full flex-grow relative">
        <div class="absolute inset-0 w-full h-full">

          { #each $friends.filter((x) => !x.cached) as friend }
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

  <!-- Suggestions -->
  <div class="w-1/2 h-full px-2 relative">
    <div class="w-full h-full rounded-md bg-input flex flex-col">

    </div>
  </div>
</main>