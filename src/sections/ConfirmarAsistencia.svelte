<script>
	import Text from './../components/Text.svelte';
    
</script>


<style>
    .Confirmar {
        width: 100%;
        padding: 0rem 10% 3rem;
    }
    @media (min-width: 768px) {
        .Confirmar {
            padding: 0 20% 4rem;
        }
    }
    @media (min-width: 1024px) {
        .Confirmar {
            padding: 0 25% 5rem;
        }
    }
</style>


<div class="Confirmar">
    <Text 
        text="Tu presencia es muy importante para nosotros. Por favor, confirma tu asistencia llenando el siguiente formulario. ¡Estamos ansiosos de celebrar con vos!" 
        buttonText="confirmar asitencia"
        buttonStyleClass="button-default"
        buttonUrl="https://forms.gle/KigCQ2QUoWHgZPr3A"
        buttonNewTab={true} 
        />
</div>