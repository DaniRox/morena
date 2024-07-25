<script>
	import Dress from './Dress.svelte';
	import Text from './../components/Text.svelte';
    import imgTitle from "../images/titleDress.png";
</script>


<style>
    .Dress {
        background-color: var(--timberwolf);
        width: 100%;
        padding: 3rem 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        height: 4rem;
        margin-bottom: 0.2rem;
    }
    @media (min-width: 768px) {
        img {
            margin-bottom: 0.5rem;
        }
        .Dress {
            padding: 4rem 20%;
        }
    }
    @media (min-width: 1024px) {
        .Dress {
            padding: 5rem 25%;
        }
    }
</style>


<div class="Dress">
    <img src={imgTitle} alt="">
    <Text 
        text="Para esta noche tan especial, queremos que todos nuestros invitados se sientan parte de la magia. Les pedimos asistir con vestimenta elegantes.

¡Esperamos verlos radiantes y listos para disfrutar de una noche inolvidable!" 
        buttonStyleClass="button-none"
        />
</div>