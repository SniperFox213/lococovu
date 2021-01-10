<script>
  // Importing modules
  import { goto, stores } from "@sapper/app";
  const { page } = stores();
  
  import { onMount } from "svelte";
  import { minecraft } from "../../../actions/authorize/callback";

  // Importing stores
  import profile from "../../../stores/profile.js";
  import accounts from "../../../stores/accounts.js";

  // Importing components
  import Spinner from "../../../components/Loader/Spinner.svelte";
  import Background from "../../../components/Layout/Background.svelte";
  import PageTransition from "../../../components/Loader/PageTransition.svelte";

  import { H2, Paragraph } from "../../../components/typography";

  // Crying man images
	let images = {
    sad: [
      "/icons/sad_man.gif",
      "/icons/sad_man_2.gif",
      "/icons/sad_spiderman.gif",
    ],
    happy: [
      "/icons/happy_dog_01.gif",
      "/icons/happy_dog_02.gif",
      "/icons/happy_dog_03.gif",
    ]
  };

  // onMount function
  // - Here we'll check our callback information
  onMount(() => {
    if ($page.query.type == "minecraft") {
      // Let's firstly check if we already
      // have this callbackCode registered
      minecraft.get($page.params.code)
      .then(() => {
        state = "ok";
      }).catch(() => {
        if ($profile.id == null) {
          // Redirect user to authorization page
          goto(`/authorize?return=${encodeURIComponent(`${$page.path}`)}${ window.location.search != null ? `&query=${encodeURIComponent(window.location.search)}` : "" }&action=authorization&title=authorization.callback.title&subtitle=authorization.callback.subtitle`);
        } else {
          // And now let's check current user's profiles
          if ($accounts.profiles.length > 1) {
            if ($page.query.token == null) {
              goto(`/authorize?return=${encodeURIComponent(`${$page.path}`)}${ window.location.search != null ? `&query=${encodeURIComponent(window.location.search)}` : "" }&action=authorization&chooseOne=true&title=authorization.callback.title&subtitle=authorization.callback.subtitle`);
            } else {
              // Authorize user
              minecraft.finish($page.params.code, $page.query.token)
              .then(() => state = "ok").catch(() => state = "error");
            };
          } else {
            // Authorize user
            minecraft.finish($page.params.code, $profile.token)
            .then(() => state = "ok").catch(() => state = "error");
          };
        };
      });
    };
  });

  // Nice Variables
  let state;
</script>

<!-- Background && PageTransition -->
<Background /> <PageTransition />

<!-- Page's Layout -->
<main class="relative w-full h-screen flex justify-center items-center">
  <!-- Everything's Okay -->
  { #if state == "ok" }
    <div class="w-1/3 h-1/2 flex items-center justify-center rounded-md bg-input relative">
      <!-- Texts -->
      <div style="z-index: 2;" class="flex flex-col items-center text-center px-6">
        <!-- Logotype -->
        <img class="w-1/6 mb-2" src="./logotype/small-white.svg" alt="">

        <!-- Texts -->
        <H2>Авторизованно</H2>
        <Paragraph>Вы успешно авторизовались. Теперь вы можете вернуться обратно в Майнкрафт и начать играть и веселиться!</Paragraph>
      </div>

      <!-- Happy Background -->
      <div style="background-image: url({ images.happy[Math.floor(Math.random() * images.happy.length)] }); background-size: cover;" class="absolute inset-0 w-full h-full rounded-md opacity-60"></div>
    </div>
  <!-- Error -->
  { :else if state == "error" }
    <div class="w-1/3 h-1/2 flex items-center justify-center rounded-md bg-input relative">
      <div style="z-index: 2;" class="flex flex-col items-center text-center px-6">
        <H2>Ничего не найденно</H2>
        <Paragraph>Вероятнее всего, произошла какая-то ошибка. Просто проигнорируйте. Ну или не проигнорируйте. Всё от вас зависит.</Paragraph>
      </div>

      <!-- Sad Background -->
      <div style="background-image: url({ images.sad[Math.floor(Math.random() * images.sad.length)] }); background-size: cover;" class="absolute inset-0 w-full h-full rounded-md opacity-60"></div>
    </div>
  <!-- Loader -->
  { :else }
    <Spinner size="20" color="#fff" />
  { /if }
</main>