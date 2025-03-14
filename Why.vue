<script setup lang="ts">
import '../Css/Why.css';

</script>

<template>
    <div class="why" id="why">
        <div class="middle-left">
            <img src="../assets/middle-left-2.png.svg" alt="bg-img" class="bg-img">
            <img src="../assets/near.png.svg" alt="near" class="side-img-1">
            <img src="../assets/mena.png.svg" alt="mena" class="side-img-2">
            <img src="../assets/solana.png.svg" alt="solana" class="side-img-3">
        </div>
        <div class="center hidden">
            <div class="row">
                <div class="left">
                    <h2 class="heading">Our Partners <br> & Friends</h2>
                </div>

                <div class="right hidden">
                    <div class="row">
                        <div class="card">
                            <figure>
                            <img src="../assets/bitbank@2x.png.svg" alt="bit bank">
                            <figcaption>Bit Bank</figcaption>
                            </figure>
                        </div>
                        <div class="card">
                            <figure>
                            <img src="../assets/bitstamp@2x.png.svg" alt="bit stamp">
                            <figcaption>Bit Stamp</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 0.5rem;">
                        <div class="card">
                            <figure>
                            <img src="../assets/binance@2x.png.png" alt="binance">
                            <figcaption>Binance</figcaption>
                            </figure>
                        </div>
                        <div class="card">
                            <figure>
                            <img src="../assets/coinbase@2x.png.png" alt="coinbase">
                            <figcaption>Coinbase</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="end">
            <h2 class="heading">We are in good company</h2>
            <p class="sub-heading">Our partnerships have delivered great value to our projects and <br> we’re happy to share some of their feedback below</p>
            <div class="buttons">
                <a onclick="plusSlides(-1)"><img src="../assets/pagination-default.svg (1).png" alt="Left"></a>
                <a onclick="plusSlides(1)"><img src="../assets/pagination-default.svg.png" alt="Right"></a>
            </div>
            <div class="texts hidden">
                <p class="context">Since 2019, Trading.co team has been an astounding  market maker for Bitkub. They have proven themselves  to be one of the most consistent, committed and driven market makers on our exchange. Trading.co Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Trading.co Team as they have been an indispensable part of our market-making team.</p>
            </div>
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>

        <div class="last">
            <div class="row">
                <img src="../assets/background-blob-service-1.png.svg" alt="bg" class="g2-bg">
                <h2 class="heading">Join <br> Trading.co</h2>
                <div class="context hidden">
                    <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p> <br> <br>
                    <p>As we emphasize it in our name – Trading.co, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p>
                    <br> <br>

                    <a href="#" class="cta">Learn more about working with us</a>
                </div>
            </div>
        </div>
    </div>
</template>