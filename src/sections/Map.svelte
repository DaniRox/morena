<script>
	import Text from './../components/Text.svelte';
    import imgTitle from "../images/titleCena.png";
</script>


<style>
    img {
        height: 4.3rem;
        margin-bottom: 0.2rem;
    }
    .Ubicacion {
        width: 100%;
        padding: 3rem 10%;
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
            margin-bottom: 0.5rem;
        }
        .Ubicacion {
            padding: 4rem 20%;
        }
        iframe {
            
        }
    }
    @media (min-width: 1024px) {
        .Ubicacion {
            padding: 5rem 25%;
        }
    }
</style>


<div class="Ubicacion">
    <img src={imgTitle} alt="">

    <Text 
        text="La fiesta será el dia 2 de Noviembre. Los esperamos a las 20:00 hs en “Sutna Pilar”, salón ubicado en Saravi 1800, La Lonja, Pilar." 
        buttonText="ver mapa"
        buttonStyleClass="button-default"
        buttonUrl="https://maps.app.goo.gl/3yfYk8B1NTUuHU2c8"
        buttonNewTab={true} 
    />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.3905379174103!2d-58.83975606757443!3d-34.4510410761248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c034f2bc9a3%3A0xc83a59b6fcb71bca!2sSutna%20Pilar!5e0!3m2!1ses-419!2sar!4v1721940586717!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>