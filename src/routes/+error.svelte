<script lang="ts">
    import { page } from "$app/stores";
    import { ValidEntryMap } from "$lib";
</script>

<svelte:head>
    {#if ($page.url.href in ValidEntryMap) === false}
        <meta http-equiv="refresh" content="0; url=/" />
    {/if}
</svelte:head>