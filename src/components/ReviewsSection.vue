<template>
  <div class="reviews-section">
    <h2>What Ohio Homeowners Say</h2>
    <p class="reviews-subtitle">Real reviews from real customers</p>
    <div class="case-studies-grid">
      <div 
        v-for="review in reviews" 
        :key="review.id"
        class="case-study-card"
      >
        <div class="case-study-header">
          <div class="case-study-avatar">{{ review.initials }}</div>
          <div class="case-study-info">
            <h4>{{ review.name }}</h4>
            <span class="location">{{ review.location }}</span>
          </div>
        </div>
        <div class="case-study-stars">★★★★★</div>
        <p class="case-study-quote">"{{ review.quote }}"</p>
        <div class="case-study-project">{{ review.project }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = [
  {
    id: 1,
    initials: 'MA',
    name: 'Maria Ann',
    location: 'Cincinnati, OH',
    quote: 'Thank you JK Roofing for doing a great job replacing our gutters. Justyn explained the process from start to finish and coordinated everything. They cleaned up when completed and the gutters look great. We will definitely be using you again!',
    project: 'Gutter Replacement'
  },
  {
    id: 2,
    initials: 'ET',
    name: 'Ellen Tatone',
    location: 'Cincinnati, OH',
    quote: 'Workmanship was top-notch with incredible attention to detail. Justyn kept me informed every step of the way. Cleanup was thorough, leaving my property spotless. I highly recommend JK Roofing and Construction!',
    project: 'New Roof Installation'
  },
  {
    id: 3,
    initials: 'DA',
    name: 'Daniel Able',
    location: 'Cincinnati, OH',
    quote: 'Team was professional, on time, and made sure everything was done right. They explained the whole process, answered all my questions, and made the experience stress-free. Crew worked efficiently, kept the property clean, end result looks amazing. Top notch service!',
    project: 'Roof Replacement'
  },
  {
    id: 4,
    initials: 'DW',
    name: 'Dean Whalen',
    location: 'Cincinnati, OH',
    quote: 'JK Roofing put on a new roof, rebuilt my rear deck and made changes to the front. Very pleased with the work and time frame. They stand behind their work and make sure you\'re happy with the end result. What impressed me most was how a conflict was handled—minor miscommunication on the deck. They took responsibility and built the deck how I wanted.',
    project: 'Roof, Deck & Exterior'
  },
  {
    id: 5,
    initials: 'CK',
    name: 'Clark Kinman',
    location: 'Cincinnati, OH',
    quote: 'JK Roofing replaced our 35 year old roof and did an excellent job in a timely manner. I highly recommend them. Special thanks to Alexander Cuadrado for putting it all together.',
    project: 'Full Roof Replacement'
  },
  {
    id: 6,
    initials: 'RL',
    name: 'Raymond Legg',
    location: 'Cincinnati, OH',
    quote: 'They were professional while remaining friendly, and their work is top notch. They did an amazing job on my roof—it didn\'t cost me a thing because I got my insurance to pay the claim. These guys made it happen! Highly recommend!',
    project: 'Insurance Claim Roof'
  }
]
</script>
