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
			<div class="my-3 flex items-center w-full text-white py-2 px-2 opacity-50">
				<!-- Icon -->
				<svg class="text-white" style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>

				<!-- Title -->
				<div class="ml-3">
					<p class="text-sm">Исследовать</p>
					<p class="text-xs text-white opacity-75">3 Уведомления, +1 Друг</p>
				</div>
			</div>

			<!-- Library -->
			<div class="my-3 flex items-center w-full text-white py-2 px-2">
				<!-- Icon -->
				<svg class="text-indigo-400" style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>

				<!-- Title -->
				<p class="text-sm ml-3">Библиотека</p>
			</div>

			<!-- Marketplace -->
			<div class="my-3 flex items-center w-full text-white py-2 px-2 opacity-50">
				<!-- Icon -->
				<svg class="text-white" style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

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

	<!-- Library Container -->
	<section style="overflow: hidden; overflow-y: auto;" class="w-4/5 h-screen relative">
		<div class="absolute inset-0 w-full h-full py-6 px-8">
			<!-- Mini-header -->
			<div class="w-full flex items-center">
				<!-- Search Panel -->
				<div class="flex w-1/3 bg-input p-2 rounded-md mr-3">
					<!-- Icon -->
					<div class="w-1/6">
						<div class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
							<svg class="text-white" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
						</div>
					</div>

					<!-- Input itself -->
					<input class="text-sm w-5/6 text-gray-400 bg-input" placeholder="Во что сегодня хотите поиграть?" type="text">
				</div>

				<!-- Game Types -->
				<div class="w-2/3 flex items-center">
					<a class="mx-3 text-white text-sm border-b-2 border-solid border-indigo-400" href="/">Все игры</a>
					<a class="mx-3 text-gray-200 text-xs opacity-75" href="/">5-ти минутные</a>
					<a class="mx-3 text-gray-200 text-xs opacity-75" href="/">10-ти минутные</a>

					<!-- More Icon -->
					<div class="mx-3 px-2 py-0 rounded-md bg-icon-button flex justify-center items-center relative">
						<svg class="w-2/3 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
					</div>
				</div>
			</div>

			<!-- Instances (Games) -->
			<div class="relative w-full h-min-screen pt-4">
				<!-- Featured Games -->
				<div class="w-full relative mb-6">
					<div style="padding-top: 40%;" class="relative">
						<div style="background-image: url('https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920'); background-size: cover; background-repeat: no-repeat;" class="shadow-md absolute inset-0 w-full h-full rounded-md"></div>

						<!-- Dots -->
						<div class="absolute bottom-0 w-full flex justify-center items-center pb-4">
							<div class="mx-2 w-4 h-4 rounded-full bg-white"></div>
							<div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
							<div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
						</div>
					</div>
				</div>

				<!-- Game Library -->
				<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
					<h1 class="text-2xl text-white opacity-75 font-bold">Популярное</h1>
					<p class="text-sm text-white opacity-50 w-1/3">Все самые популярные и играемые мини-игры на сервисе. Обновляется каждый день.</p>
				</div>

				<div class="w-full mt-2 h-full flex flex-wrap">
					{ #each instances as instance }
						<div class="w-1/3 relative px-2 py-2">
							<div style="padding-top: 60%;" class="relative">
								<div style="background-image: url({ instance.visual.image }); background-size: cover; background-position: center;" class="absolute inset-0 w-full h-full rounded-md flex flex-col-reverse">
									<!-- Title -->
									<div class="w-full py-1 px-2 rounded-b-md relative">
										<h1 class="text-sm text-white font-medium">{ instance.title }</h1>
									</div>
								</div>
							</div>
						</div>
					{ /each }

					<!-- More Games to Come... -->
					<div class="w-1/2 relative px-2 py-2">
						<div style="padding-top: 45%;" class="relative">
							<div class="absolute inset-0 w-full h-full flex flex-col justify-center items-center border-2 border-indigo-400 rounded-md px-3 py-2">
								<!-- Icon -->
								<img class="w-1/12" src="./icons/hugging-face.png" alt="Happy Icon">
								
								<!-- Text -->
								<div class="mt-2 text-center opacity-75">
									<h1 class="text-white texx-xl font-bold">Больше игр!</h1>
									<p class="mt-1 text-xs text-gray-100">Каждую неделю мы делаем именно ту мини-игру, которую захотело больше всего пользователей! Вы можете добавить свою идею для игры ну или же проголосовать за будущую игру.</p>
								</div>

								<!-- Buttons -->
								<div class="w-full flex mt-2">
									<!-- Offer a Game -->
									<button class="mr-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
										<!-- Icon -->
										<svg style="width: 0.8rem; height: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

										<!-- Title -->
										<p class="text-sm text-white ml-2">Предложить игру</p>
									</button>

									<!-- See all list of Offered Games -->
									<button class="ml-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
										<!-- Icon -->
										<svg style="width: 0.8rem; height: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>

										<!-- Title -->
										<p class="text-sm text-white ml-2">Проголосовать</p>
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Buy More Credits -->
					<div class="w-1/2 relative px-2 py-2">
						<div style="padding-top: 45%;" class="relative">
							<div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full flex flex-col justify-center items-center rounded-md px-3 py-2">
								<!-- Text -->
								<div class="mt-2 text-center opacity-75">
									<h1 class="text-white texx-xl font-bold">Поддержать проект</h1>
									<p class="mt-1 text-xs text-gray-100">Поддерживая наш проект вы гарантируете то, что он вообще будет работать. У нас нету никакой рекламы ну или какого-либо бюджета - мы работает на донаты наших пользователей. Так же, поддержав нас, вы дадите нам мотивацию продолжать разрабатывать проект!<br /><br />Вы можете поддержать проект, купив что-то в нашем Донат Магазине, ну или же использовав Patreon, DonationAlerts и подобное.</p>
								</div>

								<!-- Buttons -->
								<div class="w-full flex mt-2">
									<!-- Offer a Game -->
									<button class="mr-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
										<!-- Icon -->
										<svg style="height: 0.8rem; width: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

										<!-- Title -->
										<p class="text-sm text-white ml-2">Перейти в магазин</p>
									</button>

									<!-- See all list of Offered Games -->
									<button class="ml-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
										<!-- Icon -->
										<svg style="height: 0.8rem; width: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

										<!-- Title -->
										<p class="text-sm text-white ml-2">Другие способы</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<!-- <footer class="fixed flex justify-end bottom-0 w-full py-1">
		<div class="w-2/3 flex relative">
			Free-hours Status
			<div class="w-2/3 flex items-center">
				Progress Bar
				<div class="w-1/2 h-2 rounded-md bg-input relative">
					<div class="w-1/3 absolute h-2 bg-yellow-400 rounded-md"></div>
				</div>

				Text
				<div class="ml-1 text-xs text-white opacity-50">
					<p>Free-hours Available</p>
				</div>
			</div>

			Service Status
			<div class="w-1/3 flex items-center">
				Icon
				<div class="bg-green-400 rounded-full w-2 h-2"></div>

				Texts
				<p class="ml-2 text-xs text-white opacity-50">Service Status</p>
			</div>
		</div>
	</footer> -->
</main>