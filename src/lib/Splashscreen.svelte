<script lang="ts">
    import { ProgressRing, ProgressBar } from "fluent-svelte";
    import { Metadata } from "$lib";
    import Bloom from "./Bloom.svelte"

    export let form = "in";
</script>

<Metadata title="Streamlining..."/>

<div class="splashscreen">
    {#if form === "in"}
        <img src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane%20Arrival.png" alt="Streamliner"/>
    {:else if form === "out"}
        <img src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane%20Departure.png" alt="Streamliner"/>
    {:else if form === "any"}
        <img src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Travel%20and%20places/Airplane.png" alt="Streamliner"/>
    {:else if form === "bloom"} 
        <Bloom />
    {:else if form == "ring"}
        <ProgressRing size={64} />
    {:else if form == "bar"}
        <ProgressBar />
    {/if}
</div>

<style>
    @import 'src/styles/fluent.scss';
    .splashscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1b1a19; /* Microsoft FluentUI Neutral Gray200 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .splashscreen img {
        width: 50vw;
        max-width: 200px;
        height: auto;
        user-select: none;
        -drag: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
</style>

