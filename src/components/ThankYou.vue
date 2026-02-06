<template>
  <section class="hero-section">
    <div class="hero-content">
      <!-- Logo -->
      <div class="hero-logo">
        <img src="../../assets/logo.png" alt="JK Roofing & Construction" width="160" height="auto">
      </div>
      
      <!-- Success Badge -->
      <div class="success-badge">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      
      <!-- Confirmation -->
      <h1 class="success-title">You're All Set<span v-if="userName">, {{ userName }}</span>!</h1>
      <p class="success-subtitle">Your request for a <strong>free roof estimate</strong> has been received. Want to skip the wait and lock in your owner-direct pricing today?</p>
      
      <!-- Mega Phone CTA -->
      <div class="mega-cta-box">
        <div class="urgency-strip">
          <span class="urgency-pulse"></span>
          <span class="urgency-text">Lock In Your Price</span>
        </div>
        <h2 class="cta-headline">Call Now to Claim Your Offer</h2>
        <p class="cta-subtext">Skip the queue — we'll prioritize your estimate</p>
        
        <a href="tel:+18013054851" class="mega-call-btn">
          <span class="phone-icon">📞</span>
          <span class="call-text">
            <span class="call-label">Tap to Call</span>
            <span class="call-number">(801) 305-4851</span>
          </span>
        </a>
        
        <div class="cta-benefits">
          <span class="cta-benefit">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            No Obligation
          </span>
          <span class="cta-benefit">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Owner-Direct Pricing
          </span>
          <span class="cta-benefit">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Free Estimate
          </span>
        </div>
        
        <p class="hours-note">Mon–Fri 8am–6pm • Sat 9am–2pm</p>
      </div>
      
      <!-- What Happens Next -->
      <div class="next-steps-section">
        <h3 class="section-title">What Happens Next</h3>
        <div class="timeline">
          <div class="timeline-step">
            <div class="step-num">1</div>
            <div class="step-content">
              <h4>We Review Your Request</h4>
              <p>Our team reviews your info within 24 hours</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-num">2</div>
            <div class="step-content">
              <h4>We'll Reach Out</h4>
              <p>We'll call or text to schedule your free inspection</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-num">3</div>
            <div class="step-content">
              <h4>Free Roof Inspection</h4>
              <p>Our expert inspects your roof and takes photos</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-num">4</div>
            <div class="step-content">
              <h4>Same-Day Quote</h4>
              <p>Get your owner-direct pricing on the spot</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Grid -->
      <div class="trust-grid">
        <div class="trust-card">
          <div class="trust-icon">🏆</div>
          <h4>20+ Years Experience</h4>
          <p>Trusted by Ohio homeowners since 2004</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">👨‍👩‍👧‍👦</div>
          <h4>Family Owned</h4>
          <p>Local business, not a national chain</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">🎖️</div>
          <h4>GAF Master Elite</h4>
          <p>Top 2% of roofers nationwide</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">💰</div>
          <h4>No Sales Commission</h4>
          <p>Savings passed directly to you</p>
        </div>
      </div>
      
      <!-- Team Message -->
      <div class="team-message">
        <h3>A Note From Our Team</h3>
        <p>Thank you for considering JK Roofing & Construction for your roofing project. We're a local, family-owned company, and we treat every roof like it's our own. No pushy sales tactics — just honest advice and quality work. We look forward to meeting you!</p>
        <span class="team-signature">— The JK Roofing & Construction Team</span>
      </div>
      
      <!-- Quick FAQ -->
      <div class="faq-section">
        <h3 class="section-title">Quick Questions</h3>
        
        <div class="faq-item">
          <div class="faq-question">How long does the inspection take?</div>
          <div class="faq-answer">Most inspections take 30-45 minutes. We'll thoroughly examine your roof, take photos, and provide a detailed quote on the spot.</div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question">Is there any obligation?</div>
          <div class="faq-answer">Absolutely not. Our estimates are 100% free with zero pressure. We believe in earning your business, not pressuring you into it.</div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question">What's "owner-direct pricing"?</div>
          <div class="faq-answer">Most roofing companies pay 10-15% sales commissions. Since you're working directly with us, we pass those savings to you — same premium materials, better price.</div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="bottom-cta">
        <h3>Ready to Lock In Your Price?</h3>
        <p>Give us a call to claim your owner-direct pricing</p>
        <a href="tel:+18013054851" class="bottom-call-btn">
          <span>📞</span>
          <span>(801) 305-4851</span>
        </a>
      </div>
      
      <!-- Footer -->
      <div class="footer">
        <p>© 2025 JK Roofing & Construction</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userName = ref('')

onMounted(() => {
  // Get name from URL params
  const params = new URLSearchParams(window.location.search)
  const name = params.get('name')
  if (name && name.trim()) {
    userName.value = name.trim()
  }
  
  // Update page title
  document.title = "You're All Set! | JK Roofing & Construction"
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #fff7ed 50%, #f8fafc 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px 60px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 900'%3E%3Cdefs%3E%3ClinearGradient id='lightBeam1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F97316' stop-opacity='0.08'/%3E%3Cstop offset='100%25' stop-color='%23F97316' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='lightBeam2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F97316' stop-opacity='0.06'/%3E%3Cstop offset='100%25' stop-color='%23F97316' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0 0 L400 900 L500 900 L100 0 Z' fill='url(%23lightBeam1)'/%3E%3Cpath d='M1200 0 L800 900 L700 900 L1100 0 Z' fill='url(%23lightBeam2)'/%3E%3Ccircle cx='150' cy='300' r='80' fill='%23F97316' opacity='0.03'/%3E%3Ccircle cx='1100' cy='450' r='120' fill='%23F97316' opacity='0.025'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  max-width: 600px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Logo */
.hero-logo {
  margin-bottom: 25px;
}

.hero-logo img {
  max-width: 160px;
  height: auto;
}

/* Success Badge */
.success-badge {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
  animation: scaleIn 0.6s ease-out;
}

@keyframes scaleIn {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

.success-badge svg {
  width: 50px;
  height: 50px;
  stroke: white;
  stroke-width: 3;
  fill: none;
}

/* Confirmation Text */
.success-title {
  font-size: 2.2em;
  color: #0a0a0a;
  margin-bottom: 10px;
  font-weight: 800;
}

.success-subtitle {
  font-size: 1.15em;
  color: #475569;
  margin-bottom: 30px;
  line-height: 1.6;
}

.success-subtitle strong {
  color: #92400E;
}

/* Mega Phone CTA Box */
.mega-cta-box {
  background: linear-gradient(135deg, #92400E 0%, #B45309 100%);
  border-radius: 20px;
  padding: 35px 30px;
  margin-bottom: 35px;
  box-shadow: 0 15px 50px rgba(146, 64, 14, 0.35);
  position: relative;
  overflow: hidden;
}

.mega-cta-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.urgency-strip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 18px;
  border-radius: 25px;
  margin-bottom: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.urgency-pulse {
  width: 8px;
  height: 8px;
  background: #fbbf24;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

.urgency-text {
  color: white;
  font-size: 0.8em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.cta-headline {
  color: white;
  font-size: 1.5em;
  font-weight: 800;
  margin-bottom: 8px;
  line-height: 1.3;
}

.cta-subtext {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1em;
  margin-bottom: 22px;
}

.mega-call-btn {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: white;
  color: #92400E;
  padding: 18px 35px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1em;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.mega-call-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.phone-icon {
  font-size: 1.8em;
  animation: ring 2s ease-in-out infinite;
}

@keyframes ring {
  0%, 100% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-15deg); }
  30% { transform: rotate(10deg); }
  40% { transform: rotate(-10deg); }
  50% { transform: rotate(0); }
}

.call-text {
  text-align: left;
}

.call-label {
  display: block;
  font-size: 0.75em;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.call-number {
  display: block;
  font-size: 1.2em;
  color: #92400E;
}

.cta-benefits {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.cta-benefit {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85em;
  font-weight: 500;
}

.cta-benefit svg {
  width: 16px;
  height: 16px;
  stroke: white;
  stroke-width: 2.5;
  fill: none;
}

.hours-note {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85em;
  margin-top: 18px;
  font-style: italic;
}

/* What Happens Next */
.next-steps-section {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  margin-bottom: 35px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid #e2e8f0;
}

.section-title {
  font-size: 1.6em;
  color: #0a0a0a;
  margin-bottom: 30px;
  font-weight: 800;
  text-align: center;
}

.timeline {
  max-width: 450px;
  margin: 0 auto;
}

.timeline-step {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  position: relative;
}

.timeline-step:last-child {
  margin-bottom: 0;
}

.timeline-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 22px;
  top: 50px;
  width: 2px;
  height: calc(100% - 20px);
  background: linear-gradient(to bottom, #F97316, #e2e8f0);
}

.step-num {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;
  font-weight: 800;
  font-size: 1.1em;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
  font-family: 'Montserrat', sans-serif;
}

.step-content h4 {
  font-size: 1.1em;
  color: #0a0a0a;
  margin-bottom: 4px;
  font-weight: 700;
}

.step-content p {
  color: #64748b;
  font-size: 0.95em;
  line-height: 1.5;
}

/* Trust Points */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 35px;
}

.trust-card {
  background: white;
  padding: 25px 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.trust-card:hover {
  border-color: #F97316;
  transform: translateY(-3px);
}

.trust-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.5em;
}

.trust-card h4 {
  font-size: 1em;
  color: #0a0a0a;
  margin-bottom: 5px;
  font-weight: 700;
}

.trust-card p {
  color: #64748b;
  font-size: 0.85em;
  line-height: 1.4;
}

/* Team Message */
.team-message {
  background: linear-gradient(135deg, #f8fafc 0%, #fff7ed 100%);
  border: 2px solid #F97316;
  border-radius: 20px;
  padding: 35px 30px;
  margin-bottom: 35px;
  text-align: center;
}

.team-message h3 {
  font-size: 1.4em;
  color: #0a0a0a;
  margin-bottom: 15px;
  font-weight: 700;
}

.team-message p {
  color: #475569;
  font-size: 1.05em;
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto 20px;
}

.team-signature {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  color: #92400E;
  font-weight: 700;
  font-style: italic;
}

/* Quick FAQ */
.faq-section {
  background: white;
  border-radius: 20px;
  padding: 40px 35px;
  margin-bottom: 35px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.faq-section .section-title {
  font-size: 1.8em;
  color: #0a0a0a;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: center;
}

.faq-item {
  padding: 22px 0;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}

.faq-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.faq-item:first-child {
  padding-top: 0;
}

.faq-question {
  font-size: 1.1em;
  color: #0a0a0a;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;
}

.faq-answer {
  color: #64748b;
  font-size: 0.95em;
  line-height: 1.6;
}

/* Bottom CTA */
.bottom-cta {
  background: linear-gradient(135deg, #92400E 0%, #B45309 100%);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 15px 50px rgba(146, 64, 14, 0.3);
}

.bottom-cta h3 {
  color: white;
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 800;
}

.bottom-cta p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05em;
  margin-bottom: 25px;
}

.bottom-call-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #92400E;
  padding: 16px 35px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1em;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.bottom-call-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Footer */
.footer {
  text-align: center;
  padding: 30px 20px;
  color: #64748b;
  font-size: 0.9em;
}

.footer a {
  color: #92400E;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 30px 15px 50px;
  }

  .success-title {
    font-size: 1.7em;
  }

  .success-subtitle {
    font-size: 1em;
  }

  .mega-cta-box {
    padding: 28px 22px;
  }

  .cta-headline {
    font-size: 1.25em;
  }

  .mega-call-btn {
    padding: 15px 28px;
    font-size: 1em;
  }

  .cta-benefits {
    gap: 12px;
  }

  .cta-benefit {
    font-size: 0.8em;
  }

  .next-steps-section,
  .faq-section {
    padding: 30px 22px;
  }

  .section-title {
    font-size: 1.4em;
  }

  .trust-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .team-message {
    padding: 28px 22px;
  }

  .bottom-cta {
    padding: 30px 22px;
  }
}
</style>
