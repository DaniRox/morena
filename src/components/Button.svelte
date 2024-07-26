<script>
    export let url = "#";
    export let newTab = false;
    export let text = "button";
    export let styleClass = "button-default";
</script>


<style>
    .Button {
        font-size: 0.9rem;
        padding: 0.7rem 0.9rem;
        font-weight: 500;
        border-radius: 0.3rem;
        text-transform: uppercase;
        transition: all 0.3s;
    }

    .button-default {
        background-color: var(--teaRose);
        color: var(--smokyBlack);
        box-shadow: 0px 2px 4px 1px rgba(36,30,16,0.40);
    }

    .button-default:hover {
        background-color: var(--btnDefaultHover);
        transform: scale(1.03);
        box-shadow: 0px 2px 6px 3px rgba(36,30,16,0.40);
    }

    .button-default:active {
        background-color: var(--btnDefaultClick);
        transform: scale(0.96);
        box-shadow: 0px 2px 0px 0px rgba(36,30,16,0.40);
    }
    
    .button-secondary {
        background-color: var(--seasalt);
        color: var(--oldRose);
        box-shadow: 0px 2px 4px 1px rgba(36,30,16,0.60);
    }

    .button-secondary:hover {
        background-color: var(--btnSecondaryHover);
        transform: scale(1.03);
        box-shadow: 0px 2px 6px 3px rgba(36,30,16,0.40);
    }

    .button-secondary:active {
        background-color: var(--btnSecondaryClick);
        transform: scale(0.96);
        box-shadow: 0px 2px 0px 0px rgba(36,30,16,0.40);
    }

    .button-none {
        display: none;
    }
    @media (min-width: 768px) {
        .Button {
            font-size: 0.7rem;
            padding: 0.7rem 0.9rem;
            font-weight: 500;
            border-radius: 0.3rem;
            text-transform: uppercase;
            transition: all 0.3s;
        }
    }
</style>


<a class="Button {styleClass}" href="{url}" target="{newTab ? '_blank' : '_self'}">
    { text }
</a>