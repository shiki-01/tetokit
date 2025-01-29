<script lang="ts">
	import '../app.css';
	import { stage } from "$lib/store";

	let { children } = $props();
</script>

<header class="w-[100svw] h-[60px] p-2 flex justify-between items-center">
	<button
	    onclick={() => stage.set("mode")}
	    class="w-[150px] h-full object-cover"
	>
		<img class=" w-full h-full object-cover" src="https://placehold.jp/200x150.png" alt="logo" />
    </button>
	<div></div>
</header>

<main class="w-[100svw] h-[calc(100svh-60px)px] flex p-10">
    {@render children()}
</main>