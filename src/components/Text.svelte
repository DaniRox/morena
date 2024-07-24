<script>
    import Button from "./Button.svelte";

    export let text = "textos";
    export let buttonText = "click";
    export let buttonStyleClass = "button-default";
</script>


<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        text-align: center;
        font-size: 1rem;
        padding-bottom: 1.4rem;
    }
</style>


<div>
    <p>{ text }</p>
    <Button text={buttonText} styleClass={buttonStyleClass} />
</div>