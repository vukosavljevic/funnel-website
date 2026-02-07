<template>
  <section class="hero-section" id="estimate-form">
    <div class="hero-content">
      <div class="hero-logo">
        <img 
          src="../../assets/logo.png" 
          alt="JK Roofing & Construction"
          width="160"
          height="103"
          loading="eager"
          fetchpriority="high"
        >
      </div>
      
      <div class="price-badge-wrapper">
        <div class="side-arrow side-arrow-left">
          <div class="side-arrow-line"></div>
          <div class="side-arrow-head"></div>
        </div>
        <div class="price-hero-badge">
          <span class="price-label">New Roofs Starting At</span>
          <span class="price-amount">{{ price }}</span>
          <span class="price-sublabel">Owner-Direct Pricing</span>
          <span class="bonus-badge">GAF Master Elite Certified</span>
        </div>
        <div class="side-arrow side-arrow-right">
          <div class="side-arrow-line"></div>
          <div class="side-arrow-head"></div>
        </div>
      </div>

      <FormSurvey @submit="handleSubmit" />

      <div class="hero-trust-badges">
        <div class="trust-badge-item">
          <span class="badge-num">4,000+</span>
          <span class="badge-label">Roofs Completed</span>
        </div>
        <div class="trust-badge-item">
          <span class="badge-num">20+</span>
          <span class="badge-label">Years Experience</span>
        </div>
        <div class="trust-badge-item">
          <span class="badge-num">Top 2%</span>
          <span class="badge-label">GAF Certified</span>
        </div>
      </div>
      
      <div class="live-viewers-hero">
        <span class="live-pulse"></span>
        <span class="live-text">
          <strong>{{ viewerCount }}</strong> Ohio homeowners viewing this offer right now
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FormSurvey from './FormSurvey.vue'
import { usePrice } from '../composables/usePrice'

const { price } = usePrice()
const viewerCount = ref(14)
let countInterval = null

onMounted(() => {
  const stored = sessionStorage.getItem('viewerCount')
  if (stored) {
    viewerCount.value = parseInt(stored)
  } else {
    viewerCount.value = Math.floor(Math.random() * 15) + 10
  }

  countInterval = setInterval(() => {
    viewerCount.value += Math.random() > 0.5 
      ? Math.floor(Math.random() * 3) + 1 
      : -(Math.floor(Math.random() * 3) + 1)
    
    if (viewerCount.value < 8) viewerCount.value = 8
    if (viewerCount.value > 25) viewerCount.value = 25
    
    sessionStorage.setItem('viewerCount', viewerCount.value.toString())
  }, Math.random() * 7000 + 8000)
})

onUnmounted(() => {
  if (countInterval) {
    clearInterval(countInterval)
  }
})

const handleSubmit = (formData) => {
  // Handle form submission
  if (import.meta.env.DEV) {
    console.log('Form submitted:', formData)
  }
}
</script>
