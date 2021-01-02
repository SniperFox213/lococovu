<script>
	// Importing modules
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import Cookie from "cookie-universal";
	const cookies = Cookie();

	import profile from "../stores/profile.js";

	let loaded = false;

	onMount(() => {
		if ($profile.id == null) {
			// Let's now check if we have
			// any logged in user.
			if (cookies.get('token')) {
				// And now let's try to load this user
				// into our temporary datastore
				profile.loadProfile(cookies.get('token'))
				.then((response) => {
					loaded = true;
				}).catch(() => {
					loaded = true;
				});
			} else {
				loaded = true;
			};
		} else {
			loaded = true;
		};
	});

	import { stores } from "@sapper/app";

	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment = "";
	// Silence unused export property warning
	// eslint-disable-next-line no-empty
	if (segment) {}

	const { page } = stores();
	$: path = $page.path.slice(1);
</script>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<style>
  /* Logotype Animation */
  #logotype {
		animation: pulse 1.5s infinite ease-in-out;
	}

	@keyframes pulse {
		0%   { opacity: 100% }
		50%  { opacity: 50% }
		100% { opacity: 100% }
	}
</style>

{ #if !loaded}
	<div style="z-index: 999;" out:fade class="absolute bg-container w-full h-screen flex justify-center items-center">
		<!-- Logotype -->
		<div class="w-full md:w-2/3 lg:w-1/3 flex justify-center items-center">
			<img id="logotype" class="w-1/12" src="./logotype/small-white.svg" alt="Lococovu Logotype">
		</div>
	</div>
{ :else }
	<main id="container" class="w-full min-h-screen bg-container">
		<slot />
	</main>
{ /if }