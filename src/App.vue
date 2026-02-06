<template>
  <div id="app">
    <!-- Thank You Page -->
    <ThankYou v-if="isThankYouPage" />
    
    <!-- Main Landing Page -->
    <template v-else>
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
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
import ThankYou from './components/ThankYou.vue'

const isThankYouPage = ref(false)

onMounted(() => {
  // Check if we're on the thank you page
  const checkRoute = () => {
    isThankYouPage.value = window.location.pathname === '/roofing-thank-you' || 
                           window.location.pathname.includes('thank-you')
  }
  
  checkRoute()
  
  // Listen for route changes
  window.addEventListener('popstate', checkRoute)
})
</script>
