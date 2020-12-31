<script>
	let screen = "main";

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
			<div class="my-3 flex items-center w-full text-white py-2 px-2 relative">
				<!-- Icon -->
				<svg class="text-indigo-400" style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
				
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
				<div class="ml-3">
					<p class="text-sm">Библиотека</p>
					<p class="text-xs text-red-400 opacity-75">В разработке</p>
				</div>
			</div>

			<!-- Marketplace -->
			<div class="my-3 flex items-center w-full text-white py-2 px-2 opacity-50">
				<!-- Icon -->
				<svg class="text-white" style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

				<!-- Title -->
				<div class="ml-3">
					<p class="text-sm">Магазин</p>
					<p class="text-xs text-red-400 opacity-75">В разработке</p>
				</div>
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
			<div class="w-full flex items-center px-2">
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

				<!-- Screens -->
				<div class="w-2/3 flex items-center">
					<div on:click={(e) => {
						screen = "main";
					}} class="px-4 py-2 { screen == "main" ? "text-white text-sm border-b-2 border-solid border-indigo-400" : "text-gray-200 text-xs opacity-75 relative" }">Главная</div>
					
					<div on:click={(e) => {
						screen = "notifications";
					}} class="px-4 py-2 { screen == "notifications" ? "text-white text-sm border-b-2 border-solid border-indigo-400 relative" : "text-gray-200 text-xs opacity-75 relative" }">
						Уведомления
						<!-- Badge -->
						<div class="absolute top-0 right-0">
							<div class="rounded-full px-1 bg-red-400 text-white text-xs">
								3
							</div>
						</div>
					</div>

					<!-- <div class="px-4 py-2 text-gray-200 text-xs opacity-75 relative">
						Друзья
						Badge
						<div class="absolute top-0 right-0">
							<div class="rounded-full px-1 bg-red-400 text-white text-xs">
								1
							</div>
						</div>
					</div> -->

					<!-- More Icon -->
					<div class="mx-3 px-2 py-0 rounded-md bg-icon-button flex justify-center items-center relative">
						<svg class="w-2/3 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
					</div>
				</div>
			</div>

			<!-- Container -->
			<div class="relative w-full h-min-screen pt-4">
				{ #if screen == "main" }
					<!-- Featured Games -->
					<div class="w-full relative mb-6 px-2">
						<div style="padding-top: 40%;" class="relative">
							<div style="background-image: url('https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920'); background-size: cover; background-repeat: no-repeat;" class="shadow-md absolute inset-0 w-full h-full rounded-md"></div>

							<!-- Helper -->
							<div class="absolute top-0 right-0 p-2">
								<div class="bg-white px-4 py-1 opacity-75 rounded-md flex items-center">
									<!-- Icon -->
									<svg style="height: 0.9rem; width: 0.9rem;" class="text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

									<!-- Helper Text -->
									<p class="text-sm text-black ml-2">Нажмите на картинку, что бы узнать больше</p>
								</div>
							</div>

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

						<!-- More Popular Games -->
						<div class="w-1/3 relative px-2 py-2">
							<div style="padding-top: 60%;" class="relative">
								<div style="" class="absolute border-2 border-solid border-indigo-400 inset-0 w-full h-full rounded-md flex flex-col justify-center items-center pr-2">
									<!-- Icon -->

									<!-- Text -->
									<div class="w-2/3 opacity-75 text-center">
										<h1 class="text-md font-bold text-white">Больше игр</h1>
										<p class="text-sm text-gray-100 mt-2">Перейти в полную Библиотеку мини-игр</p>
									</div>

									<!-- Button -->
									<div class="absolute right-0 h-full bg-indigo-400 px-2 text-white flex items-center">
										<!-- Chevron -->
										<svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- List all Tags -->
					<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2 mt-12">
						<h1 class="text-2xl text-white opacity-75 font-bold">Тэги</h1>
						<p class="text-sm text-white opacity-50 w-1/3">Краткий список всех тэгов, которые существенно упростят поиск Вашей новой любимой мини-игры</p>
					</div>

					<div class="w-full mt-2 h-full flex flex-wrap">
						{ #each instances as instance }
							<div class="w-1/3 relative px-2 py-2">
								<div style="padding-top: 60%;" class="relative">
									<div class="absolute bg-icon-button inset-0 w-full h-full rounded-md flex flex-col justify-center items-center">

										<!-- Icon -->
										<img class="w-1/6" src="./icons/hugging-face.png" alt="Tag Icon">

										<!-- Text -->
										<div class="w-2/3 text-center mt-2 opacity-75">
											<h1 class="text-md text-white font-bold">Популярное</h1>
											<p class="text-sm text-gray-100">Всё то, во что сейчас играют игроки Лококову!</p>
										</div>

									</div>
								</div>
							</div>
						{ /each }

						<!-- More Popular Games -->
						<div class="w-1/3 relative px-2 py-2">
							<div style="padding-top: 60%;" class="relative">
								<div style="" class="absolute border-2 border-solid border-indigo-400 inset-0 w-full h-full rounded-md flex flex-col justify-center items-center pr-2">
									<!-- Icon -->

									<!-- Text -->
									<div class="w-2/3 opacity-75 text-center">
										<h1 class="text-md font-bold text-white">Все теги</h1>
										<p class="text-sm text-gray-100 mt-2">Посмотреть полный список тегов, которые упростят поиск интересной Вам игры</p>
									</div>

									<!-- Button -->
									<div class="absolute right-0 h-full bg-indigo-400 px-2 text-white flex items-center">
										<!-- Chevron -->
										<svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Support Project -->
					<section class="mt-16 w-full relative px-2">
						<div style="padding-top: 40%;" class="w-full relative py-2">
							<div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full rounded-md p-2 flex justify-center items-center">
								<!-- Image -->
								<div class="w-2/5 h-2/3 opacity-50 mx-4 px-4 md:px-6 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-md mx-2">
									<!-- Title -->
									<h1 class="text-md text-white text-center">Тут должна была быть красивая картинка</h1>

									<!-- Description -->
									<p class="mt-2 text-sm text-white opacity-75 text-center">У нас совсем нету денег и умений на создание красивых картинок... Поэтому их тут не будет. Зато вы можете посмотреть на мемы!</p>

									<!-- Button -->
									<button class="mt-3 bg-input rounded-md px-4 py-2 flex justify-center items-center">
										
										<!-- Title -->
										<p class="text-white text-sm opacity-75">Загрузить рандомный мем</p>
									</button>

								</div>

								<!-- Texts -->
								<div class="w-3/5 px-4">
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
					</section>
				{ :else if screen == "notifications" }
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

													<!-- <div class="absolute top-0 right-0">
														<div class="rounded-full px-1 bg-red-400 text-white text-xs">
															1
														</div>
													</div> -->
												</div>
											</div>
										</div>

										<!-- List Itself -->
										<div style="overflow: hidden; overflow-y: auto;" class="w-full flex-grow relative">
											<div class="absolute inset-0 w-full h-full flex justify-center items-center">

												<div class="w-full px-4 relative flex justify-center items-center">
													<div class="rounded-md border border-dashed border-gray-700 flex flex-col px-3 py-8 justify-center items-center">

														<!-- Icon -->
														<img class="w-1/5" src="./icons/hugging-face.png" alt="">

														<!-- Texts -->
														<div class="mt-3 opacity-75 px-4 md:px-6 lg:px-12 text-center">
															<h1 class="text-xl text-white font-bold">Всё чисто!</h1>
															<p class="text-sm text-gray-100">Тут будут отображаться САМЫЕ важные уведомления, которые будут требовать немедленного вмешательства. Зачастую такие уведомления плохие. И у Вас их пока что нет! Ура!</p>
														</div>

														<!--  -->

													</div>
												</div>

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
													<div class="absolute top-0 right-0">
														<div class="rounded-full px-1 bg-red-400 text-white text-xs">
															1
														</div>
													</div>
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

												<!-- Entry (Offline) -->
												<div class="w-full relative py-2 px-6">
													<div class="opacity-50 relative w-full h-full p-3 flex items-center justify-between bg-icon-button rounded-md">	
														<!-- Avatar -->
														<div class="flex items-center">
															<img class="w-12 h-12 rounded-md" src="https://i.redd.it/t3jryj84rd801.png" alt="Avatar Icon">

															<!-- Name -->
															<div class="ml-3">
																<h1 class="text-md text-white font-bold">voyaje</h1>
																<p class="text-sm text-gray-100">Был в сети 2 часа назад</p>
															</div>
														</div>

														<!-- Buttons -->
														<div class="flex items-center pr-4">
															<!-- Message Player -->
															<button class="mr-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
															</button>

															<!-- Settings -->
															<button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
															</button>
														</div>
													</div>
												</div>


												<!-- Entry (AFK) -->
												<div class="w-full relative py-2 px-6">
													<div class="opacity-75 relative w-full h-full p-3 flex items-center justify-between bg-icon-button rounded-md">	
														<!-- Avatar -->
														<div class="relative flex items-center">
															<img class="w-12 h-12 rounded-md" src="https://pm1.narvii.com/7147/35c5df9b0cb86b396fa22d095cfdf1a9e4023705r1-1022-1022v2_00.jpg" alt="Avatar Icon">

															<!-- Name -->
															<div class="ml-3 text-left">
																<h1 class="text-md text-white font-bold">CollieStalks</h1>

																<!-- Subtext -->
																<div class="flex items-center">
																	<img style="height: 1.2rem; width: 1.2rem;" src="./icons/dash-symbol.png" alt="">
																	<p class="text-sm text-gray-100 ml-1">Отошёл</p>
																</div>
															</div>
														</div>

														<!-- Buttons -->
														<div class="flex items-center pr-4">
															<!-- Message Player -->
															<button class="mx-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
															</button>

															<!-- Settings -->
															<button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
															</button>
														</div>

														<!-- Badge -->
														<div class="absolute right-0 h-full w-2 bg-yellow-400 rounded-r-md">
														
														</div>
													</div>
												</div>

												<!-- Entry (Online) -->
												<div class="w-full relative py-2 px-6">
													<div class="relative w-full h-full p-3 flex items-center justify-between bg-icon-button rounded-md">	
														<!-- Avatar -->
														<div class="relative flex items-center">
															<img class="w-12 h-12 rounded-md" src="https://pm1.narvii.com/7147/35c5df9b0cb86b396fa22d095cfdf1a9e4023705r1-1022-1022v2_00.jpg" alt="Avatar Icon">

															<!-- Name -->
															<div class="ml-3 text-left">
																<h1 class="text-md text-white font-bold">CollieStalks</h1>

																<!-- Subtext -->
																<div class="flex items-center">
																	<img style="height: 1.2rem; width: 1.2rem;" src="./icons/desktop-computer.png" alt="">
																	<p class="text-sm text-gray-100 ml-1">Сидит на сайте</p>
																</div>
															</div>
														</div>

														<!-- Buttons -->
														<div class="flex items-center pr-4">
															<!-- Message Player -->
															<button class="mx-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
															</button>

															<!-- Settings -->
															<button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
															</button>
														</div>

														<!-- Badge -->
														<div class="absolute right-0 h-full w-2 bg-indigo-400 rounded-r-md">
														</div>
													</div>
												</div>

												<!-- Entry (Playing) -->
												<div class="w-full relative py-2 px-6">
													<div class="relative w-full h-full p-3 flex items-center justify-between bg-icon-button rounded-md">	
														<!-- Avatar -->
														<div class="relative flex items-center">
															<img class="w-12 h-12 rounded-md" src="https://pm1.narvii.com/7147/35c5df9b0cb86b396fa22d095cfdf1a9e4023705r1-1022-1022v2_00.jpg" alt="Avatar Icon">

															<!-- Playing Something -->
															<div style="bottom: -0.5rem;" class="absolute bottom-0 pl-8">
																<button style="background-image: url('https://media.pcgamesinsider.biz/2020/4/104429/hypixel-logo-r225x.jpg'); background-size: cover;" class="w-6 h-6 rounded-md relative flex justify-center items-center">
																</button>
															</div>

															<!-- Name -->
															<div class="ml-3 text-left">
																<h1 class="text-md text-white font-bold">CollieStalks</h1>
																
																<!-- Subtext -->
																<div class="flex items-center">
																	<img style="height: 1.2rem; width: 1.2rem;" src="./icons/video-game.png" alt="">
																	<p class="text-sm text-gray-100 ml-1">Играет в: <span class="border-b border-dotted border-gray-100">Hytale</span></p>
																</div>
															</div>
														</div>

														<!-- Buttons -->
														<div class="flex items-center pr-4">
															<!-- Message Player -->
															<button class="mx-3 w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
															</button>

															<!-- Settings -->
															<button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
																<svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
															</button>
														</div>

														<!-- Badge -->
														<div class="absolute right-0 h-full w-2 rounded-r-md bg-green-400">
														
														</div>
													</div>
												</div>

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
						{ #each instances as notification }
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

				{ /if }
			</div>

			<!-- Footer -->
			<footer class="w-full mt-12 pb-4 flex flex-col justify-center items-center opacity-50">
				<!-- Lococovu Logotype -->
				<img style="height: 1.6rem;" src="./logotype/white-full.svg" alt="Lococovu Logotype">
			
				<!-- Texts -->
				<p class="text-xs text-gray-100 mt-1">Maintained by <span class="border-b border-dotted border-gray-100">community</span>, crafted with :love: by <span class="border-b border-dotted border-gray-100">unfull team</span></p>
			</footer>
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