<script>
	import Text from './../components/Text.svelte';
    import imgTitle from "../images/titleDress.png";
</script>


<style>
    .Dress {
        background-color: var(--timberwolf);
        width: 100%;
        padding: 4rem 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        height: 4.4rem;
        margin-bottom: 0.5rem;
    }
    @media (min-width: 768px) {
        img {
            margin-bottom: 0.7rem;
        }
        .Dress {
            padding: 5rem 20%;
        }
    }
    @media (min-width: 1024px) {
        .Dress {
            padding: 6rem 25%;
        }
    }
</style>


<div class="Dress">
    <img src={imgTitle} alt="Titulo DressCode">
    <Text 
        text="Para esta noche tan especial, queremos que todos nuestros invitados se sientan parte de la magia. Les pedimos asistir con vestimenta elegantes.

¡Esperamos verlos radiantes y listos para disfrutar de una noche inolvidable!" 
        buttonStyleClass="button-none"
        />
</div>