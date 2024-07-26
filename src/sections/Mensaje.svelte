<script>
	import Text from './../components/Text.svelte';
    
    import imgTitle from "../images/titleMensaje.png";
</script>


<style>
    .Mensaje {
        width: 100%;
        padding: 3rem 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        height: 4.3rem;
        margin-bottom: 0.2rem;
    }
    .card {
        width: 80%;
        background-color: var(--timberwolf);
        padding: 2rem;
        margin: 1rem 10%;
        border-radius: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }
    label {
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.2rem;
        padding-bottom: 0.8rem;
    }
    .input, .textarea{
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--smokyBlack);
        margin-bottom: 1rem;
    }
    .btn-container{
        display: flex;
        justify-content: end;
    }
    .btnInput {
        background-color: transparent;
        border: none;
        cursor: pointer; 
        padding: 1rem 0;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.2rem;
    }
    
    @media (min-width: 768px) {
        img {
            margin-bottom: 0.5rem;
        }
        .card {
            width: 60%;
        }
        .Mensaje {
            padding: 4rem 20%;
        }
    }
    @media (min-width: 1024px) {
        .Mensaje {
            padding: 5rem 25%;
        }
    }
</style>


<div class="Mensaje">
    <img src={imgTitle} alt="Titulo Deja un Mensaje">
    <Text 
        text="Comparte tus buenos deseos y mensajes especiales para [Nombre de la cumpleañera]. Ella estará encantada de leerlos y guardarlos como un precioso recuerdo." 
        buttonStyleClass="button-none"
        />
    <form class="card">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" class="input">
        <label for="message">Mensaje:</label>
        <textarea name="message" id="message" class="textarea"></textarea>
        <div class="btn-container">
            <input type="submit" value="Enviar" class="btnInput">
        </div>
    </form>
</div>