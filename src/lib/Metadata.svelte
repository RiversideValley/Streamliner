<script lang="ts">
	import { page } from "$app/stores";

	export let title = "Streamliner";
	export let image = "";
	$: imageFile = image.startsWith("/")
		? image
		: `/branding/banner${image === "" ? "" : "-" + image}.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	<meta content={title} name="twitter:title" />

    <link rel="icon" href="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane.png" />
	<meta content={imageFile} name="og:image" />
	<meta content="https://{$page.url.host}{imageFile}" name="twitter:image" />
</svelte:head>