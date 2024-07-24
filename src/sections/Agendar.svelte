<script>
	import Text from './../components/Text.svelte';
    
</script>


<style>
    .Agendar {
        background-color: var(--antiflashWhite);
        width: 100%;
        padding: 3rem 10%;
    }
</style>


<div class="Agendar">
    <Text 
        text="No te olvides de esta fecha tan especial. Haz clic en el botón de abajo para agregar el evento a tu calendario y asegurar que no te pierdas ni un momento de la magia." 
        buttonText="agendar"
        buttonStyleClass="button-secondary"
        />
</div>