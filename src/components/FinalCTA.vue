<template>
  <div class="final-cta">
    <div class="final-cta-content">
      <h2>Ready to Get Owner-Direct Pricing?</h2>
      <p>Join thousands of Utah homeowners who've saved with JK Roofing & Construction. Get your free estimate in 60 seconds.</p>
      <div class="cta-arrow-up">
        <div class="arrow-head-up"></div>
        <div class="arrow-line-up"></div>
      </div>
      <button class="scroll-to-form-btn" @click="scrollToForm">Start My 60-Second Estimate</button>
    </div>
  </div>
</template>

<script setup>
const scrollToForm = () => {
  document.getElementById('estimate-form')?.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  })
}
</script>
