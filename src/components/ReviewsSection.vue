<template>
  <div class="reviews-section">
    <h2>What Utah Homeowners Say</h2>
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
    initials: 'SM',
    name: 'Sarah M.',
    location: 'West Jordan, UT',
    quote: 'The entire experience was outstanding, beginning with the thorough inspection. The bid was $1,000 less than other bids I received. I heartily endorse BigHorn!',
    project: 'Full Roof Replacement'
  },
  {
    id: 2,
    initials: 'JK',
    name: 'Jake K.',
    location: 'Sandy, UT',
    quote: 'Everyone at BigHorn was amazing. Jake went over several options and answered all our questions. The estimate was fair. Great company with great people!',
    project: 'New Roof Installation'
  },
  {
    id: 3,
    initials: 'MR',
    name: 'Mike R.',
    location: 'Draper, UT',
    quote: 'I had priced around and BigHorn was the best value. Professionalism and workmanship was wonderful—quality you\'d expect from a large company at a budget-friendly price.',
    project: 'Roof & Siding'
  },
  {
    id: 4,
    initials: 'LH',
    name: 'Lisa H.',
    location: 'Lehi, UT',
    quote: 'Flawless execution! Every step from quote to completion was as scheduled. Shingles removed and new roof installed in the same day. Looks great!',
    project: 'Same-Day Roof Replacement'
  },
  {
    id: 5,
    initials: 'DP',
    name: 'David P.',
    location: 'South Jordan, UT',
    quote: 'Not a single complaint, top-notch stuff. The bid was competitive, workmanship perfect, and they took care of unexpected issues. Highly recommend!',
    project: 'Complete Roof System'
  },
  {
    id: 6,
    initials: 'JT',
    name: 'Jennifer T.',
    location: 'Bountiful, UT',
    quote: 'I LOVE my new roof! These guys were great to work with. Very quick responses, photos through the process, and they really went the extra mile.',
    project: 'Roof Replacement'
  }
]
</script>
