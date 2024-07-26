<script>
    import Button from "./Button.svelte";

    export let text = "textos";
    export let buttonText = "click";
    export let buttonUrl = "#";
    export let buttonNewTab = false;
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
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.4rem;
        padding-bottom: 1.4rem;
    }
</style>


<div>
    <p>{ text }</p>
    <Button text={buttonText} styleClass={buttonStyleClass} url={buttonUrl} newTab={buttonNewTab}/>
</div>