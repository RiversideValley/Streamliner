<script lang="ts">
    import { page } from "$app/stores";
    import { Splash, Feed } from "$lib";

    let loggedIn = false;
</script>

{#if !$page.url.search}
    {#if loggedIn === false}
        <Splash form="any" />
        <meta http-equiv="refresh" content="1; url=/hello" />
    {:else}
        <Feed />
    {/if}
{:else}
    <Splash form="in" />
{/if}