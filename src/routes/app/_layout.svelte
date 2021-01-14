<script>
  // Importing modules
	import { stores } from "@sapper/app";
	const { page } = stores();

	import notifications from "../../stores/notifications.js";

  // Importing components
  import Sidebar from "../../components/Sidebar/index.svelte";
  import NotificationsScreen from "../../components/Screens/NotificationsScreen/index.svelte";

	import PageTransition from "../../components/Loader/PageTransition.svelte";

  // Screen Variable
  let screen = "main";

	let currentPage;
	page.subscribe((obj) => {
		if (obj.path != currentPage) {
			screen = "main";
			currentPage = obj.path
		};
	});
</script>

<svelte:window on:mousemove={(e) => {
	Array.prototype.forEach.call(document.getElementsByClassName("background"), function(element) {
		element.style.backgroundPositionX = -Math.round(e.pageX/20) + "px";
		element.style.backgroundPositionY = -Math.round(e.pageY/20) + "px";
	});
}} />

<!-- Page Transition Component -->
<PageTransition />

<!-- Page's Layout -->
<div style="background-image: url('/background/1.svg');" class="background absolute inset-0 w-full h-full"></div>

<div style="z-index: 998;" class="lg:hidden fixed inset-0 w-full h-screen flex justify-center items-center bg-container">
	<div class="w-full md:w-2/3 flex flex-col items-center px-4 md:px-0">
		<!-- logotype -->
		<img class="w-2/12" src="./logotype/small-white.svg" alt="Lococovu Logotype">

		<!-- Heading -->
		<h1 class="text-2xl ml-2 text-white mt-4 text-center">Нам жаль, но вам лучше зайти с Компьютера</h1>

		<!-- Description -->
		<p class="my-6 text-md opacity-75 text-gray-100 text-center">На данный момент разработки мы не поддерживаем отображение сайта для мобильных экранов. Ибо сделать весь сайт максимально адаптивным - довольно-таки сложно. Но не переживайте, в скором времени мы обязательно добавим мобильную версию!<br /><br />Кстати, вы можете зайти в наш Дискорд сервер и спросить у разработчиков когда появится мобильная версия.</p>

		<!-- Discord Button -->
		<button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="px-3 py-1 rounded-md flex items-center">
			<!-- Icon -->
			<img style="height: 1.2rem; width: 1.2rem;" src="./icons/Discord-Logo-White.svg" alt="Discord Logo">
		
			<!-- Text -->
			<p class="text-sm text-white ml-2">Наш Дискорд</p>
		</button>
	</div>
</div>

<main class="w-full h-min-screen relative flex">
	<!-- Sidebar -->
	<Sidebar />

	<!-- Content (Screens) -->
	<section style="overflow: hidden; overflow-y: auto;" class="w-4/5 h-screen relative">
		<div class="absolute inset-0 w-full h-full py-6 px-8 flex flex-col">
			<!-- Mini-header -->
			<div class="w-full flex items-center px-2">
				<!-- Search Panel -->
				<div class="flex w-1/3 bg-input p-2 rounded-md mr-3">
					<!-- Icon -->
					<div class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
						<svg class="text-white" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
					</div>

					<!-- Input itself -->
					<input class="text-sm ml-2 text-gray-400 bg-input" placeholder="Что хотите найти?" type="text">
				</div>

				<!-- Screens -->
				<div class="w-2/3 flex items-center">
					<div on:click={(e) => {
						screen = "main";
					}} class="px-4 py-2 { screen == "main" ? "text-white text-sm border-b-2 border-solid border-indigo-400" : "text-gray-200 text-xs opacity-75 relative" }">Главная</div>
					
					<!-- Notifications Screen -->
					<div on:click={(e) => {
						screen = "notifications";
					}} class="px-4 py-2 { screen == "notifications" ? "text-white text-sm border-b-2 border-solid border-indigo-400 relative" : "text-gray-200 text-xs opacity-75 relative" }">
						Уведомления

						{ #if $notifications.length > 0 }
							<!-- Badge -->
							<div class="absolute top-0 right-0">
								<div class="rounded-full px-1 bg-red-400 text-white text-xs">
									{ $notifications.length }
								</div>
							</div>
						{ /if }
					</div>

					<!-- More Icon -->
					<div class="mx-3 px-2 py-0 rounded-md bg-icon-button flex justify-center items-center relative">
						<svg class="w-2/3 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
					</div>
				</div>
			</div>

			<!-- Container -->
			<div class="relative w-full flex-grow pt-4 flex flex-col">
				{ #if screen == "notifications" }
					<!-- Notifications Screen -->
					<NotificationsScreen />
				{ :else }
					<slot screen={screen} />
				{ /if }

				<!-- Footer -->
				<footer class="w-full mt-12 pb-4 flex flex-col justify-center items-center opacity-50">
					<!-- Lococovu Logotype -->
					<img style="height: 1.6rem;" src="./logotype/white-full.svg" alt="Lococovu Logotype">
				
					<!-- Texts -->
					<p class="text-xs text-gray-100 mt-1">Maintained by <span class="border-b border-dotted border-gray-100">community</span>, crafted with :love: by <span class="border-b border-dotted border-gray-100">unfull team</span></p>
				</footer>
			</div>
		</div>
	</section>
</main>