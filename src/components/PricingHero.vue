<template>
  <div>
    <div class="oc-banner">
      <div class="oc-banner-content">
        <span class="oc-badge">FAMILY OWNED & OPERATED</span>
        <h2>Radical Honesty. Premium Quality. Fair Prices.</h2>
        <p>
          We use premium GAF materials. We employ skilled craftsmen. We just don't hide behind industry pricing games that cost you thousands. When you work with JK Roofing & Construction, you get an honest, transparent experience—exactly how it should be.
        </p>
      </div>
    </div>

    <div class="seasonal-urgency-banner">
      <span class="urgency-icon-seasonal">⚠️</span>
      <span class="urgency-message" v-html="seasonalMessage"></span>
    </div>

    <div class="pricing-hero">
      <div class="pricing-hero-content">
        <span class="pricing-hero-badge">OWNER-DIRECT PRICING</span>
        <h2>Pay Our Best Rate—Starting at $7,299</h2>
        <p class="pricing-hero-subtitle">
          For a limited time, we're offering owner-direct pricing to Ohio homeowners. This is our absolute best rate—no negotiation needed, no games. You deal directly with us, not a salesperson.
        </p>
        <div class="pricing-hero-features">
          <div class="pricing-feature">
            <span class="feature-check">✓</span>
            <span>Roofs starting at $7,299</span>
          </div>
          <div class="pricing-feature">
            <span class="feature-check">✓</span>
            <span>25-year warranty</span>
          </div>
          <div class="pricing-feature">
            <span class="feature-check">✓</span>
            <span>No hidden plywood fees</span>
          </div>
        </div>
        <button class="pricing-hero-btn" @click="scrollToForm">Claim Owner-Direct Pricing Now</button>
        <p class="pricing-hero-note">Limited spots available • Offer ends when schedule fills</p>
      </div>
    </div>

    <div class="limited-spots-counter">
      <div class="spots-header">
        <strong>Owner-Direct Pricing Availability:</strong> 
        <span>{{ currentMonth }}</span> 2025
      </div>
      <div class="spots-visual">
        <div class="spots-filled">
          <div 
            v-for="i in spotsFilled" 
            :key="i"
            class="spot-box spot-filled"
          >
            ✓
          </div>
        </div>
        <div class="spots-remaining">
          <div 
            v-for="i in spotsRemaining" 
            :key="spotsFilled + i"
            class="spot-box spot-available"
          >
            {{ spotsFilled + i }}
          </div>
        </div>
      </div>
      <div class="spots-progress-bar">
        <div class="spots-progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <div class="spots-footer">
        <span class="spots-text">
          Only <strong>{{ spotsRemaining }}</strong> spots remaining at owner-direct pricing
        </span>
      </div>
    </div>

    <div class="response-time-badge">
      <div class="badge-content">
        <span class="badge-icon">⚡</span>
        <div class="badge-text">
          <div class="response-stat">
            Average response time: <strong>Under 15 minutes</strong>
          </div>
          <div class="booking-stat">Free estimates within 24 hours, guaranteed</div>
        </div>
      </div>
    </div>

    <div class="urgency-strip-section">
      <div class="urgency-content">
        <div class="urgency-badge-alt">TRUTH IN PRICING</div>
        <h3>Why Pay for Someone Else's Commission?</h3>
        <p class="urgency-main-text">
          Most roofing companies add 10-15% to your quote just for sales commissions. At JK Roofing & Construction, there's no middleman—just honest pricing from a family-owned company that's been serving Ohio for over 20 years.
        </p>
        <div class="urgency-details">
          <div class="urgency-point">
            <span class="urgency-icon">💰</span>
            <span>$2,500+ avg savings</span>
          </div>
          <div class="urgency-point">
            <span class="urgency-icon">🏆</span>
            <span>GAF Master Elite</span>
          </div>
          <div class="urgency-point">
            <span class="urgency-icon">⚡</span>
            <span>Done in 1 day</span>
          </div>
        </div>
        <button class="urgency-cta-btn" @click="scrollToForm">Get My Honest Quote</button>
      </div>
    </div>

    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="benefit-icon">💰</div>
        <h3>No Hidden Costs</h3>
        <p>Unlike other roofers who mark up plywood 200-300% mid-job, our price is all-inclusive. No surprises, no change orders, no games.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p>Most roofs completed in just one day. We show up when we say, finish on time, and leave your property cleaner than we found it.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🎖️</div>
        <h3>Family Owned, 20+ Years</h3>
        <p>We're not a big corporation—we're a family-owned Ohio business built on integrity. When you get a quote, that's the owner's word.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">⭐</div>
        <h3>Top 2% Nationwide</h3>
        <p>GAF Master Elite certification means we're in the top 2% of roofers nationwide. Premium materials, premium workmanship, fair prices.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSpots } from '../composables/useSpots'

const { spotsRemaining, currentMonth, spotsFilled, progressPercent, seasonalMessage } = useSpots()

const scrollToForm = () => {
  document.getElementById('estimate-form')?.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  })
}
</script>
