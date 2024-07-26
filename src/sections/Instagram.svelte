<script>
	import Text from './../components/Text.svelte';
    import imgTitle from "../images/titleInstagram.png";
    import Button from '../components/Button.svelte';
</script>


<style>
    .Instagram {
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
    .card {
        width: 80%;
        background-color: var(--timberwolf);
        padding: 2rem;
        margin: 1rem 10%;
        border-radius: 1rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
    }
    h3 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4rem;
        padding-bottom: 0.8rem;
    }
    p {
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.2rem;
        padding-bottom: 0.8rem;
    }
    @media (min-width: 768px) {
        img {
            margin-bottom: 0.5rem;
        }
        .Instagram {
            padding: 4rem 20%;
        }
        .card {
            width: 60%;
        }
    }
    @media (min-width: 1024px) {
        .Instagram {
            padding: 5rem 25%;
        }
    }
</style>


<div class="Instagram">    
    <img src={imgTitle} alt="Titulo: Instagram">
    <Text 
        text="¡Seguinos en Instagram para no perderte ningún detalle de la fiesta en tiempo real!
¡Comparti tus momentos mágicos!

Para asegurarnos de que todos los recuerdos de esta noche tan especial se mantengan juntos, creamos un hashtag único: [#HashtagDelEvento]. 
" 
        buttonStyleClass="button-none"
        />
    <div class="card">
        <h3>Cómo participar:</h3>
        <p>1. Toma fotos y videos durante la fiesta.</p>
        <p>2. Publica en Instagram usando el hashtag [#HashtagDelEvento].</p>
        <p>3. Explora el álbum: Todas las publicaciones con este hashtag se mostrarán automáticamente aquí, en nuestro muro de recuerdos, para que todos podamos revivir estos momentos mágicos juntos.</p>
        <p>*Recordá asegúrarte de que tu cuenta de Instagram esté pública o que aceptes nuestra solicitud de seguimiento para que podamos ver y compartir tus fotos.</p>
    </div>
    <Button text={"ver feed"} styleClass={"button-default"} />
</div>