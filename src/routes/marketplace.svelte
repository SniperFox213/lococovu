<script>

	let instances = [
		{
			id: 0,
			title: "Title #1",

			visual: {
				image: "https://www.wplay.net.ua/wp-content/uploads/2017/08/assassin-creed-origins-date-de-sortie-trailer-news_29174_wide.jpg",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 1,
			title: "Title #1",

			visual: {
				image: "https://steamcdn-a.akamaihd.net/steam/apps/397540/header.jpg?t=1600378875",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 2,
			title: "Title #1",

			visual: {
				image: "https://www.godisageek.com/wp-content/uploads/Forager-review.jpg",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 3,
			title: "Title #1",

			visual: {
				image: "https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 4,
			title: "Title #1",

			visual: {
				image: "https://gamefarm.ru/wp-content/uploads/2017/04/prey-logo.jpg",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 5,
			title: "Title #1",

			visual: {
				image: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fkingdom-come-deliverance%2Fhome%2FEGS_WarhorseStudios_KingdomComeDeliverance_S3-1360x766-1e8502930c6282cb34acf7add01c6832a5bc217e.jpg",
				preview: "",
				description: "Lorem"
			}
		}
	];
</script>

<main class="w-full h-min-screen flex relative">
	<!-- Sidebar -->
	<sidebar class="h-screen w-1/5 pt-6 flex flex-col">
		<!-- Logotype -->
		<div class="my-1 w-full flex justify-center items-center">
			<img class="w-3/5" src="./logotype/white-full.svg" alt="">
		</div>

		<!-- User Account -->
		<div class="my-6 px-6">
			<div class="p-2 rounded-md bg-indigo-400 flex items-center relative">
				<!-- Avatar -->
				<img class="w-10 h-10 rounded-md" src="https://i.redd.it/t3jryj84rd801.png" alt="Avatar Icon">

				<!-- Texts -->
				<div class="ml-4">
					<h1 class="text-base text-white font-medium">juiipup</h1>
					<p class="text-sm text-white">Level 1</p>
				</div>

				<!-- Icon -->
				<div class="absolute inset-y-0 right-0 h-full rounded-r-md bg-container opacity-75 px-2 flex items-center text-white">
					<svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
				</div>
			</div>
		</div>

		<!-- Free-hours Status -->
		<div class="w-full px-6 rounded-md">
			<div class="w-full h-2 rounded-md bg-input relative">
				<div class="w-1/3 absolute h-2 bg-yellow-400 rounded-md"></div>
			</div>

			<!-- Texts -->
			<div class="mt-2 flex items-center justify-between">
				<div>
					<h1 class="tex-sm text-white font-medium">120/750</h1>
					<p class="text-xs text-gray-100 opacity-75">Бесплатные кредиты</p>
				</div>

				<!-- Help Icon -->
				<svg style="height: 0.9rem; width: 0.9rem;" class="text-white opacity-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
			</div>
		</div>

		<!-- Links -->
		<div class="w-full flex-grow mt-3 px-4 md:px-6 relative">
			<!-- Dashboard -->
			<div class="my-3 flex items-center w-full text-white opacity-50 py-2 px-2 relative">
				<!-- Icon -->
				<svg class="text-white" style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
				
				<!-- Notifications Icon -->
				<div class="absolute top-0 left-0 pl-5 pt-2">
					<div class="rounded-full px-1 bg-red-400 text-white text-xs">
						4
					</div>
				</div>

				<!-- Title -->
				<div class="ml-3">
					<p class="text-sm">Исследовать</p>
					<p class="text-xs text-white opacity-75">3 Уведомления, +1 Друг</p>
				</div>
			</div>

			<!-- Library -->
			<div class="my-3 flex items-center w-full text-white py-2 px-2 opacity-50">
				<!-- Icon -->
				<svg class="text-white" style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>

				<!-- Title -->
				<p class="text-sm ml-3">Библиотека</p>
			</div>

			<!-- Marketplace -->
			<div class="my-3 flex items-center w-full text-white py-2 px-2">
				<!-- Icon -->
				<svg class="text-indigo-400" style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

				<!-- Title -->
				<p class="text-sm ml-3">Магазин</p>
			</div>

			<!-- "Footer" -->
			<div class="absolute bottom-0 pb-8">
				
				<!-- Logout -->
				<div class="flex items-center w-full text-white py-2 px-2 opacity-50">
					<!-- Icon -->
					<svg style="width: 1rem; width: 1rem;" class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>

					<!-- Title -->
					<p class="text-sm ml-4">Выйти</p>
				</div>
			</div>
		</div>
	</sidebar>

	<!-- Marketplace Container -->
	<section style="overflow: hidden; overflow-y: auto;" class="w-4/5 h-screen relative">

	</section>
</main>