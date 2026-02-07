<template>
  <div class="faq-section">
    <div class="faq-header">
      <h2>Your Questions Answered</h2>
      <p>We've helped thousands of Ohio homeowners with their roofing needs. Here are answers to the questions we hear most often.</p>
    </div>
    <div 
      v-for="(faq, index) in faqs" 
      :key="index"
      class="faq-item"
    >
      <div class="faq-question">
        <span>{{ faq.q }}</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          <p v-html="faq.a"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePrice } from '../composables/usePrice'

const { price } = usePrice()

// FAQ items are always expanded - no toggle needed

const faqs = [
  {
    q: 'What does "owner-direct pricing" mean?',
    a: '<strong>It means no salespeople, no commissions, no markups.</strong> Most roofing companies pay 10-15% of your quote to a salesperson. At JK Roofing & Construction, you\'re dealing directly with the owners—so those savings go to you instead. Same premium materials, better price.'
  },
  {
    q: 'How long does a roof replacement take?',
    a: '<strong>Most roofs are completed in just one day.</strong> Our experienced crews work efficiently without cutting corners. We show up when we say we will, finish on time, and leave your property cleaner than we found it.'
  },
  {
    q: `What's included in the ${price} starting price?`,
    a: '<strong>Everything you need for a complete roof system:</strong> tear-off, disposal, premium GAF shingles, underlayment, flashing, vents, and cleanup. No hidden fees. If we discover damaged plywood during tear-off, we discuss it with you first—no surprise charges.'
  },
  {
    q: 'What warranty do you offer?',
    a: '<strong>25-year manufacturer warranty on materials.</strong> As a GAF Master Elite contractor (top 2% nationwide), we can offer GAF\'s best warranties. Plus our own workmanship guarantee—if there\'s ever an issue with our installation, we make it right.'
  },
  {
    q: 'What areas do you serve?',
    a: '<strong>Within 150 miles of Cincinnati, OH—covering all three states:</strong> Ohio, Kentucky, and Indiana. We serve Cincinnati, Dayton, Columbus (OH), Northern Kentucky, Indianapolis metro, and surrounding communities. If you\'re in the tri-state area, we\'ve got you covered.'
  },
  {
    q: 'Do you offer financing?',
    a: '<strong>Yes!</strong> We offer flexible financing options so you can get the roof you need without breaking the bank. Get your free estimate and we\'ll discuss payment options that work for your budget.'
  }
]
</script>
