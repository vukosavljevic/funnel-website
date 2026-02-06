<template>
  <div id="app">
    <Header />
    <HeroSection />
    
    <main class="main-content">
      <div class="container">
        <TrustBanner />
        <TruthSection />
        <PricingHero />
        <ReviewsSection />
        <FAQSection />
        <GuaranteeBox />
        <FinalCTA />
      </div>
    </main>
    
    <Footer />
    <ClaimNotification />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import TrustBanner from './components/TrustBanner.vue'
import TruthSection from './components/TruthSection.vue'
import PricingHero from './components/PricingHero.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import FAQSection from './components/FAQSection.vue'
import GuaranteeBox from './components/GuaranteeBox.vue'
import FinalCTA from './components/FinalCTA.vue'
import Footer from './components/Footer.vue'
import ClaimNotification from './components/ClaimNotification.vue'
</script>
