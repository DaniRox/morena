<script>
    import imgBackground from "../images/fondo-hero-s.jpg";
    import morena from "../images/morena.png";
</script>


<style>
    .Hero {
        height: 38rem;
        position: relative;
    }
    .div-img {
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .img {
        max-width: max-content;
    }
    .morena {
        height: 10rem;
        margin: 0.5rem 0;
    }
    .text {
        width: 100%;
        height: 100%;
        top: 0;
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

    @media (min-width: 650px) {
        .Hero {
            height: 33rem;
            overflow: hidden;
        }
        .div-img {
            overflow: hidden;
            position: relative;
        }
        .img {
            width: 100%;
            max-width: none;
            position: inherit;
            top: -4rem;
        }
        
        .morena {
            height: 11rem;
            margin: 0.6rem 0;
        }
    }
    @media (min-width: 1024px) {
        .img {
            top: -10rem;
        }
        .morena {
            height: 14rem;
            margin: 0.9rem 0;
        }
    }
</style>


<div class="Hero">
    <div class="div-img">
        <img src={ imgBackground } alt="" class="img">  
    </div>
    <div class="img">   
    </div>
    <div class="text">
        <p>mis 15 años</p>
        <img src={ morena } alt="" class="morena">
        <p>02.11.24</p>
    </div>
</div>