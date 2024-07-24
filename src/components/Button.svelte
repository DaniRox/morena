<script>

    export let text = "button";
    export let styleClass = "button-default";
</script>


<style>
    .Button {
        background-color: var(--background-color);
        color: var(--text-color);
        font-size: 0.8rem;
        padding: 0.7rem 0.8rem;
        font-weight: 500;
        border-radius: 0.3rem;
        text-transform: uppercase;
    }

    .button-default {
        background-color: var(--teaRose);
        color: var(--smokyBlack);
    }
    
    .button-secondary {
        background-color: var(--seasalt);
        color: var(--oldRose);
    }

    .button-none {
        display: none;
    }

</style>


<button class="Button {styleClass}">
    { text }
</button>