<script lang="ts">
    import { page } from "$app/stores";
    import { ValidEntryMap, Splash } from "$lib";
</script>

<svelte:head>
    {#if ($page.url.href in ValidEntryMap) === false}
        <meta http-equiv="refresh" content="2; url=/" />
    {/if}
</svelte:head>

<Splash form="ring" />