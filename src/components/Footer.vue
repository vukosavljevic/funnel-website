<template>
  <footer class="ts-footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-column">
          <h3>JK Roofing & Construction</h3>
          <p>Family owned and operated for over 20 years. We're not a faceless corporation—we're your neighbors, committed to quality roofing and honest pricing for Ohio homeowners.</p>
          <button class="footer-cta-btn" @click="scrollToForm">Start Your Free Estimate</button>
        </div>
        <div class="footer-column">
          <h4>Why JK Roofing & Construction?</h4>
          <ul>
            <li>✓ Owner-Direct Pricing</li>
            <li>✓ GAF Master Elite (Top 2%)</li>
            <li>✓ 25-Year Warranty</li>
            <li>✓ Most Roofs Done in 1 Day</li>
            <li>✓ No Hidden Fees</li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>What You Get</h4>
          <ul>
            <li>Free Roof Inspection</li>
            <li>Detailed Written Estimate</li>
            <li>Premium GAF Materials</li>
            <li>Expert Installation</li>
            <li>Complete Cleanup</li>
          </ul>
        </div>
      </div>
      <div class="footer-cta-strip">
        <div class="footer-cta-content">
          <p class="footer-cta-text">
            <strong>Limited owner-direct pricing spots available.</strong> Get your free, no-obligation roof estimate in 60 seconds. We'll show you exactly what your new roof will cost—no surprises, no pressure.
          </p>
          <button class="footer-cta-btn-alt" @click="scrollToForm">Start My 60-Second Estimate</button>
        </div>
      </div>
      <div class="footer-disclaimers">
        <div class="disclaimer-content">
          <p class="disclaimer-heading">Important Information</p>
          <p>JK Roofing & Construction is a licensed, bonded, and insured roofing contractor serving Ohio, Kentucky, and Indiana. GAF Master Elite certification awarded to top 2% of roofing contractors nationwide.</p>
          <p class="disclaimer-meta">Serving Greater Cincinnati & Tri-State Area</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ currentYear }} JK Roofing & Construction</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToForm = () => {
  document.getElementById('estimate-form')?.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  })
}
</script>
