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
		}
	];
</script>

<!-- Filter Panel -->
<!-- <div class="w-full mb-6">

</div> -->

<!-- Game Library -->
<!-- <div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
  <h1 class="text-2xl text-white opacity-75 font-bold">Популярное</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Все самые популярные и играемые мини-игры на сервисе. Обновляется каждый день.</p>
</div> -->

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
</div>