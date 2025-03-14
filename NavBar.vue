<script setup lang="ts">
import '../Css/Navbar.css'
import '../Js/Navbar.js'
</script>


<template>
    <div class="nav">
        <nav class="navbar">
            <a href="../../index.html" class="logo">Trading.co</a>
            <ul class="nav-list">
                <li class="nav-item"><a href="#about" class="nav-link">About Us</a></li>
                <li class="nav-item"><a href="#work" class="nav-link">Our Market</a></li>
                <li class="nav-item"><a href="#why" class="nav-link">Our Friends</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
            </ul>
            <a href="#contact" class="get-in-touch"><div class="row"><div class="dot"></div>Get in touch</div></a>
            <a href="#" class="btn" id="btn">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </a>
        </nav>

        <nav class="mobile-nav">
            <a href="#" class="nav-link">About Us</a>
            <a href="#" class="nav-link">Our services</a>
            <a href="#" class="nav-link">Work with us</a>
            <a href="#" class="nav-link">Blog</a>
            <a href="#" class="get-btn"><div class="row"><div class="dot"></div>Get in touch</div></a>
        </nav>
    </div>
</template>