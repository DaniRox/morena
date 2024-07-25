<script>
	import Text from './../components/Text.svelte';
    
</script>


<style>
    .Agendar {
        background-color: var(--timberwolf);
        width: 100%;
        padding: 3rem 10%;
    }
    @media (min-width: 768px) {
        .Agendar {
            padding: 4rem 20%;
        }
    }
    @media (min-width: 1024px) {
        .Agendar {
            padding: 5rem 25%;
        }
    }
</style>


<div class="Agendar">
    <Text 
        text="No te olvides de esta fecha tan especial. Haz clic en el botón de abajo para agregar el evento a tu calendario y asegurar que no te pierdas ni un momento de la magia." 
        buttonText="agendar"
        buttonStyleClass="button-secondary"
        buttonUrl="https://www.google.com/calendar/render?action=TEMPLATE&text=Nombre%20del%20Evento&dates=20210725T010000Z/20210725T030000Z&details=Detalles%20del%20evento&location=Dirección%20del%20evento"
        buttonNewTab={true} 
    />
</div>