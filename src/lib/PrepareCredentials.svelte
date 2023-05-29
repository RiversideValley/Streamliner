<script lang="ts">
    import { page } from "$app/stores";

</script>

{#if !$page.url.search}
    <meta http-equiv="refresh" content="0.5; url=/hello" />
{/if}