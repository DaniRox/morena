<script>
    import imgBackground from "../images/fondo-hero-s.jpg";
</script>


<style>
    .Hero {
        width: 100%;
        height: 38rem;
        display: flex;
        flex-direction: column;
    }
    .img {
    }
    img {
        height: 100%;
        overflow: hidden;
    }
    .text {
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p {
        text-transform: uppercase;
        font-size: 1rem;
        padding: 1rem;
        font-weight: 600;
    }
</style>


<div class="Hero">
        <img src={ imgBackground } alt="">  
    <div class="img">   
    </div>
    <div class="text">
        <p>mis 15 años</p>
        <p>02.11.24</p>
    </div>
</div>