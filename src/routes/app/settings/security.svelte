<script>
  // Importing modules
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  import storage from "local-storage";

  // Importing actions
  import setupPincode from "../../../actions/profile/security/setupPincode.action";

  // Importing stores
  import profile from "../../../stores/profile";
  import { stores } from "@sapper/app";
  const { page } = stores();

  // Importing components
  import Icon from "../../../components/Icon.svelte";
  import { H6, Paragraph, Caption } from "../../../components/typography";

  // Variables
  let pincode;

  // Function, that'll
  function updatePincode(token) {
    // Let's firstly check if we
    // need to get Security Code
    // or no
    if ($profile.security.pincode == null) {
      // Creating our pincode
      setupPincode($profile.token, pincode)
      .then((response) => {
        console.log("RESPONSE");
        console.log(response);
      }).catch((error) => {
        console.log("ERROR");
        console.log(error);
      });
    } else {
      // Let's now check for Security Code
      if ($page.query.securityCode != null) {
        pincode = $page.query.pincode;

        // Setting up our pincode
        setupPincode(`-${$page.query.securityCode}`, pincode)
        .then((response) => {
          console.log("RESPONSE");
          console.log(response);
        }).catch((error) => {
          console.log("ERROR");
          console.log(error);
        });
      } else {
        // Let's firstly save our callback
        storage.set('auth.callback', JSON.stringify({ url: "/app/settings/security", query: `?action=updatePincode&hello=nibbaUbba&pincode=${pincode}` }));

        // Redirect user to login page
        goto(`/authorize/pincode?token=${$profile.token}&type=confirmation&action=pincodeChange`);
      };
    };
  };

  // onMount event
  // - Here we'll check if we need
  // to change our pincode or
  // no
  onMount(() => {
    if ($page.query.action == "updatePincode") {
      updatePincode();
    };
  });
</script>

<!-- Password -->
<div in:fade class="{ $profile.security.pincode == null ? "w-full" : "w-1/2" } px-4 mb-4">
  <H6>Пинкод</H6>

  { #if $profile.security.pincode == null }
    <div class="mt-2 flex items-center p-5 rounded-md border border-gray-800">
      <!-- Icon -->
      <img class="w-2/6 rounded-md" src="./icons/you_shall_not_pass_02.gif" alt="">

      <!-- Texts -->
      <div class="ml-4">
        <!-- Texts -->
        <H6>Установите пинкод</H6>
        <Caption classes="w-5/6">Пинкод - это универсальная дополнительная защита Вашего аккаунта. Вы просто его ставите как пароль, и вписываете только тогда, когда нужно! Никто другой не сможет зайти в Ваш аккаунт, не зная Вашего пароля. Ставьте его побыстрее прямо сейчас!</Caption>

        <!-- Buttons + Input -->
        <div class="mt-2">
          <div class="flex w-5/6 bg-icon-button rounded-md p-2 relative">
            <!-- Icon -->
            <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center mr-2">
              <Icon name="lock" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
            </div>
        
            <!-- Input itself -->
            <input bind:value={pincode} class="text-sm w-full text-gray-400 bg-icon-button" placeholder="Пароль" type="password">
          
            <!-- Button -->
            <div class="absolute right-0 pr-2">
              <button on:click={(e) => {
                updatePincode();
              }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="opacity-60 px-4 h-8 rounded-md bg-icon-button">
                <Caption opacity={false}>Сохранить</Caption>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  { :else }
    <div class="flex w-full bg-icon-button p-2 rounded-md mt-3 opacity-80 relative">
      <!-- Icon -->
      <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
        <Icon name="lock" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </div>

      <!-- Input itself -->
      <input bind:value={pincode} on:keypress={(e) => {
        if (pincode != null && pincode.split('').length >= 16) {
          e.preventDefault();
        };
      }} class="ml-2 text-sm text-gray-400 bg-icon-button" placeholder="Пароль" type="password" id="pincode">
    
      <!-- Save Button -->
      <div class="absolute right-0 pr-2">
        <button on:click={(e) => {
          updatePincode();
        }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="opacity-60 px-4 h-8 rounded-md bg-icon-button">
          <Caption opacity={false}>Сохранить</Caption>
        </button>
      </div>
    </div>

    <p class="mt-2 text-xs text-white opacity-60 w-5/6">Принимаются любые символы, пробелы, иероглифы, номера кредитных карточек, день рождения вашей Мамы, день первого секса, день когда от вас ушёл отец. Пинкод можно изменить. А вот прошлое нельзя. Отца не вернуть.</p>

    <!-- 
    <div class="flex w-5/6 bg-icon-button rounded-md p-2 relative">
      Icon
      <div class="w-8 h-8 rounded-md bg-input flex justify-center items-center mr-2">
        <Icon name="lock" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </div>

      Input itself
      <input bind:value={pincode} class="text-sm w-full text-gray-400 bg-icon-button" placeholder="Пароль" type="password">
    
      Button
      <div class="absolute right-0 pr-2">
        <button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="opacity-60 px-4 h-8 rounded-md bg-icon-button">
          <Caption opacity={false}>Сохранить</Caption>
        </button>
      </div>
    </div> -->
  { /if }
</div>