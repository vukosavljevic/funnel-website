<template>
  <header class="offer-header">
    <div class="header-content">
      <div class="header-badge" id="header-month-badge">
        <span class="badge-desktop">{{ monthBadge }}</span>
        <span class="badge-mobile">{{ monthBadge }} • Utah</span>
      </div>
      <div class="header-text">
        <h1>New Roof Without the Premium Markup</h1>
        <p>
          <span class="header-intro">Skip the salesperson — deal direct with the owners</span>
          <span class="location-pill">Wasatch Front</span>
          <span class="divider-dot"> • </span>
          <strong class="header-urgency">Limited Spots This Month</strong>
        </p>
      </div>
    </div>
    <div class="header-divider"></div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const now = new Date()
const month = now.getMonth()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December']

const monthBadge = computed(() => `${months[month]} Special`)
</script>
