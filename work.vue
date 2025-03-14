<script setup lang="ts">
    import '../Css/work.css';
    import exchangePic from '../assets/exchange-screens-new.png.svg';
    import bg from '../assets/background-blob-service-1.png.svg';
    import gridPic from '../assets/grid.png.png';
    import divPiv from '../assets/div.png'
    import '../Js/animation.js'
</script>

<template>
    <div class="work" style="overflow: hidden;" id="work">
        <img :src="bg" alt="bg" class="bg">
        <h2 class="heading">Crypto Market Making</h2>
        <p class="sub-heading">We are a global crypto liquidity provider and algorithmic market <br> maker. We trade digital assets listed on Centralized Exchanges in <br> over 15 countries worldwide.</p>
        <div class="content hidden">
            <div class="left">
                <h3>Market Making for <br> Crypto Projects</h3>
                <h4>Accelerate your token’s journey by <br> boosting its liquidity</h4>
                <p>We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.</p>
                <a href="#" class="cta">Learn more</a>
            </div>
            <div class="right">
                <img class="logo" src="../assets/div.svg" alt="logo-1">
            </div>
        </div>
        <div class="content hidden">
            <div class="right">
                <img :src="exchangePic" alt="logo" class="logo-2">
                <img :src="gridPic" alt="grid pic" class="grid-pic">
                <img :src="divPiv" alt="div pic" class="div-pic">
            </div>
            <div class="left">
                <h3>Market Making for <br> Crypto Exchanges</h3>
                <h4>Attract more traders and projects with <br> deep order books & liquidity</h4>
                <p>Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.</p>
                <a href="#" class="cta">Learn more</a>
            </div>
        </div>
    </div>
</template>