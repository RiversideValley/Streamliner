<script lang="ts">
	import { page } from "$app/stores";

	export let title = "Streamliner";
	export let imageFile = "https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane.png";
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	<meta content="Riverside Valley" name="author" />

	<meta content={title} name="twitter:title" />
	<meta content="@RIVERS1D3" name="twitter:site" />
	<meta content="@RIVERS1D3" name="twitter:creator" />

    <link rel="icon" href="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane.png" />
	<meta content={imageFile} name="og:image" />
	<meta content={imageFile} name="twitter:image" />
</svelte:head>