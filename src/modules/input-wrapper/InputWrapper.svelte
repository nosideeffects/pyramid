<script>
    import {onMount} from "svelte";

    export let label = "";
    let active = false;
    let wrapper;
    onMount(() => {
        wrapper.addEventListener("focusin", () => {
            active = true;
        }, true);
        wrapper.addEventListener("focusout", () => {
            active = false;
        }, true);
    });
</script>

<style src="./InputWrapper.scss"></style>

<div class="input" bind:this={wrapper} class:active>
    <div class="border">
        <div class="start"></div>
        <div class="label">
            <span>{label}</span>
        </div>
        <div class="end"></div>
    </div>
    <slot></slot>
</div>