<template>
  <div class="claim-notification" :class="{ show: isVisible }">
    <div class="notification-content">
      <div class="notification-icon">🏠</div>
      <div class="notification-text">
        <div class="notification-title">
          <span>{{ notificationName }}</span> just requested an estimate
        </div>
        <div class="notification-detail">From <span>{{ notificationLocation }}</span></div>
        <div class="notification-time">Just now</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const notificationName = ref('Someone')
const notificationLocation = ref('Utah')

const names = [
  'Sarah M.', 'Michael R.', 'Jennifer L.', 'David K.', 'Amanda S.',
  'Robert P.', 'Lisa H.', 'James T.', 'Maria G.', 'John W.',
  'Emily C.', 'Chris B.', 'Jessica N.', 'Daniel F.', 'Lauren V.',
  'Kevin J.', 'Nicole D.', 'Matthew Z.', 'Rachel Q.', 'Brandon M.',
  'Ashley W.', 'Ryan S.', 'Stephanie K.', 'Brian L.', 'Michelle P.'
]

const locations = [
  'Salt Lake City', 'West Jordan', 'Sandy', 'South Jordan', 'Draper',
  'Lehi', 'Provo', 'Ogden', 'Layton', 'Bountiful'
]

let notificationInterval = null

const showNotification = () => {
  notificationName.value = names[Math.floor(Math.random() * names.length)]
  notificationLocation.value = locations[Math.floor(Math.random() * locations.length)]
  isVisible.value = true
  
  setTimeout(() => {
    isVisible.value = false
  }, 6000)
}

onMounted(() => {
  // Show first notification after 15-30 seconds
  setTimeout(showNotification, Math.random() * 15000 + 15000)
  
  // Then show notifications every 60-120 seconds
  notificationInterval = setInterval(() => {
    showNotification()
  }, Math.random() * 60000 + 60000)
})

onUnmounted(() => {
  if (notificationInterval) {
    clearInterval(notificationInterval)
  }
})
</script>
