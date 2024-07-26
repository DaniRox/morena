<script>
	import Text from './../components/Text.svelte';
    import imgTitle from "../images/titleCena.png";
</script>


<style>
    img {
        height: 4.4rem;
        margin-bottom: 0.5rem;
    }
    .Ubicacion {
        width: 100%;
        padding: 4rem 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    iframe {
        width: 100%;
        height: 16rem;
        margin: 2rem;
        border-radius: 1rem;
    }
    @media (min-width: 768px) {
        img {
            margin-bottom: 0.7rem;
        }
        .Ubicacion {
            padding: 5rem 20%;
        }
    }
    @media (min-width: 1024px) {
        .Ubicacion {
            padding: 6rem 25%;
        }
    }
</style>


<div class="Ubicacion">
    <img src={imgTitle} alt="Titulo Cena y Fiesta">

    <Text 
        text="La fiesta será el dia 2 de Noviembre. Los esperamos a las 20:00 hs en “Sutna Pilar”, salón ubicado en Saravi 1800, La Lonja, Pilar." 
        buttonText="ver mapa"
        buttonStyleClass="button-default"
        buttonUrl="https://maps.app.goo.gl/3yfYk8B1NTUuHU2c8"
        buttonNewTab={true} 
    />
</div>