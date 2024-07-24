<script>
	import Map from "./sections/Map.svelte";
	import ConfirmarAsistencia from "./sections/ConfirmarAsistencia.svelte";
	import Agendar from "./sections/Agendar.svelte";
	import Dress from "./sections/Dress.svelte";
  import Mensaje from "./sections/Mensaje.svelte";
  import Instagram from "./sections/Instagram.svelte";
</script>


<style>
	main {
		background-color: var(--seasalt);
	}
</style>


<main>
	<Map />
	<ConfirmarAsistencia />
	<Agendar />
	<Dress />
	<Mensaje />
	<Instagram />
</main>
