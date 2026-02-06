<template>
  <div class="form-wrapper">
    <div class="location-ribbon">
      <div class="ribbon-content">
        <svg class="ribbon-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span class="ribbon-text">Exclusive to <span class="ribbon-city">Wasatch Front</span></span>
      </div>
    </div>
    
    <div class="form-cta-text">
      <div class="cta-header">
        <div class="urgency-badge">
          <span class="dot"></span>
          <span>{{ spotsRemaining }} spots left this month</span>
        </div>
        <h2>Get Your Free Roof Estimate</h2>
        <p>60 seconds • Zero obligation • Owner-direct pricing</p>
      </div>
    </div>
    
    <div class="form-container">
      <div class="custom-survey">
        <div class="survey-progress">
          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
          </div>
          <div class="progress-text">
            <span>Step {{ currentQuestion }} of 6</span>
            <span>{{ progressPercent }}%</span>
          </div>
        </div>
        
        <!-- Question 1: Home Type -->
        <div class="survey-question" :class="{ active: currentQuestion === 1 }">
          <div class="question-label">What type of home do you have?</div>
          <div class="survey-options">
            <button 
              v-for="option in homeTypeOptions"
              :key="option"
              class="survey-option"
              :class="{ selected: surveyData.homeType === option }"
              @click="selectOption('homeType', option)"
            >
              <span class="option-radio"></span>
              <span>{{ option }}</span>
            </button>
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" style="display: none" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="nextQuestion">Continue →</button>
          </div>
        </div>
        
        <!-- Question 2: Square Footage -->
        <div class="survey-question" :class="{ active: currentQuestion === 2 }">
          <div class="question-label">Approximately how large is your home?</div>
          <div class="survey-options compact">
            <button 
              v-for="option in sqftOptions"
              :key="option"
              class="survey-option"
              :class="{ selected: surveyData.sqft === option }"
              @click="selectOption('sqft', option)"
            >
              <span class="option-radio"></span>
              <span>{{ option }}</span>
            </button>
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="nextQuestion">Continue →</button>
          </div>
        </div>
        
        <!-- Question 3: Timeline -->
        <div class="survey-question" :class="{ active: currentQuestion === 3 }">
          <div class="question-label">When are you looking to get your roof done?</div>
          <div class="survey-options compact">
            <button 
              v-for="option in timelineOptions"
              :key="option"
              class="survey-option"
              :class="{ selected: surveyData.timeline === option }"
              @click="selectOption('timeline', option)"
            >
              <span class="option-radio"></span>
              <span>{{ option }}</span>
            </button>
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="nextQuestion">Continue →</button>
          </div>
        </div>
        
        <!-- Question 4: Payment -->
        <div class="survey-question" :class="{ active: currentQuestion === 4 }">
          <div class="question-label">How are you planning to pay for your roof?</div>
          <div class="survey-options compact">
            <button 
              v-for="option in paymentOptions"
              :key="option"
              class="survey-option"
              :class="{ selected: surveyData.payment === option }"
              @click="selectOption('payment', option)"
            >
              <span class="option-radio"></span>
              <span>{{ option }}</span>
            </button>
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="nextQuestion">Continue →</button>
          </div>
        </div>
        
        <!-- Question 5: Address -->
        <div class="survey-question" :class="{ active: currentQuestion === 5 }">
          <div class="question-label">Where is the property located?</div>
          <div class="input-group">
            <input 
              type="text" 
              class="survey-input"
              v-model="surveyData.street"
              placeholder="Street Address"
              autocomplete="street-address"
              @input="validate"
            />
            <div class="input-row">
              <input 
                type="text" 
                class="survey-input"
                v-model="surveyData.city"
                placeholder="City"
                autocomplete="address-level2"
                @input="validate"
              />
              <input 
                type="text" 
                class="survey-input"
                v-model="surveyData.state"
                placeholder="State"
                style="flex: 0.5"
                autocomplete="address-level1"
                @input="handleStateInput"
              />
            </div>
            <input 
              type="text" 
              class="survey-input"
              v-model="surveyData.zip"
              placeholder="ZIP Code"
              autocomplete="postal-code"
              @input="handleZipInput"
              maxlength="5"
            />
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="nextQuestion">Continue →</button>
          </div>
        </div>
        
        <!-- Question 6: Contact Info -->
        <div class="survey-question" :class="{ active: currentQuestion === 6 }">
          <div class="question-label">Almost done! <span class="highlight">Where should we send your estimate?</span></div>
          <div class="input-group">
            <input 
              type="text" 
              class="survey-input"
              v-model="surveyData.name"
              placeholder="Your Full Name"
              autocomplete="name"
              @input="validate"
            />
            <input 
              type="email" 
              class="survey-input"
              v-model="surveyData.email"
              placeholder="Email Address"
              autocomplete="email"
              @input="validate"
            />
            <input 
              type="tel" 
              class="survey-input"
              v-model="surveyData.phone"
              placeholder="Phone Number"
              autocomplete="tel"
              @input="handlePhoneInput"
            />
          </div>
          <div class="survey-nav-btns">
            <button class="survey-btn back-btn" @click="prevQuestion">← Back</button>
            <button class="survey-btn next-btn" :disabled="!canContinue" @click="submitForm">Get My Estimate →</button>
          </div>
        </div>
      </div>
      
      <div class="form-benefits">
        <span class="form-benefit">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Family Owned • 20+ Years
        </span>
        <span class="form-benefit">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          GAF Master Elite
        </span>
        <span class="form-benefit">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Zero Obligation
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSpots } from '../composables/useSpots'

const emit = defineEmits(['submit'])

const { spotsRemaining } = useSpots()

const currentQuestion = ref(1)
const totalQuestions = 6

const surveyData = ref({
  homeType: '',
  sqft: '',
  timeline: '',
  payment: '',
  street: '',
  city: '',
  state: 'UT',
  zip: '',
  name: '',
  email: '',
  phone: ''
})

const homeTypeOptions = [
  'Single Family Home',
  'Townhouse',
  'Multi-Family (2-4 units)',
  'Mobile/Manufactured Home'
]

const sqftOptions = [
  'Under 1,500 sq ft',
  '1,500 to 2,500 sq ft',
  '2,500 to 3,500 sq ft',
  'Over 3,500 sq ft'
]

const timelineOptions = [
  'ASAP - Emergency/Urgent',
  'Within the next 30 days',
  '1-3 months',
  'Just exploring options'
]

const paymentOptions = [
  'Cash / Check',
  'Financing (monthly payments)',
  'Insurance Claim',
  'Not sure yet'
]

const progressPercent = computed(() => Math.round((currentQuestion.value / totalQuestions) * 100))

const canContinue = computed(() => {
  switch (currentQuestion.value) {
    case 1:
      return surveyData.value.homeType !== ''
    case 2:
      return surveyData.value.sqft !== ''
    case 3:
      return surveyData.value.timeline !== ''
    case 4:
      return surveyData.value.payment !== ''
    case 5:
      return surveyData.value.street !== '' && 
             surveyData.value.city !== '' && 
             surveyData.value.state !== '' && 
             surveyData.value.zip.length === 5
    case 6:
      return surveyData.value.name !== '' && 
             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(surveyData.value.email) &&
             surveyData.value.phone.replace(/\D/g, '').length >= 10
    default:
      return false
  }
})

const selectOption = (field, value) => {
  surveyData.value[field] = value
  setTimeout(() => {
    if (canContinue.value) {
      nextQuestion()
    }
  }, 300)
}

const nextQuestion = () => {
  if (!canContinue.value) return
  if (currentQuestion.value < totalQuestions) {
    currentQuestion.value++
  }
}

const prevQuestion = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--
  }
}

const validate = () => {
  // Validation happens in computed canContinue
}

const STATE_ABBREVIATIONS = {
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA',
  'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA',
  'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA',
  'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD',
  'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO',
  'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new hampshire': 'NH', 'new jersey': 'NJ',
  'new mexico': 'NM', 'new york': 'NY', 'north carolina': 'NC', 'north dakota': 'ND', 'ohio': 'OH',
  'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode island': 'RI', 'south carolina': 'SC',
  'south dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT',
  'virginia': 'VA', 'washington': 'WA', 'west virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY',
  'district of columbia': 'DC'
}

const validZipCodes = new Set([
  '84009','84011','84016','84024','84037','84055','84056','84059','84068','84089',
  '84090','84091','84095','84110','84114','84122','84125','84126','84127','84130',
  '84131','84132','84133','84134','84138','84139','84143','84145','84147','84148',
  '84151','84152','84157','84158','84165','84170','84171','84180','84184','84190',
  '84199','84201','84244','84402','84407','84409','84412','84415','84602','84603',
  '84605','84633','84004','84121','84003','84328','84065','84010','84302','84014',
  '84017','84307','84018','84020','84022','84005','84013','84025','84032','84029',
  '84031','84036','84033','84006','84096','84117','84124','84315','84404','84317',
  '84319','84040','84041','84043','84310','84042','84324','84663','84664','84047',
  '84049','84108','84109','84050','84107','84414','84054','84403','84408','84071',
  '84604','84057','84097','84060','84098','84061','84062','84601','84606','84405',
  '84067','84069','84660','84653','84112','84113','84116','84150','84101','84102',
  '84103','84104','84105','84106','84111','84070','84092','84093','84094','84655',
  '84045','84115','84340','84044','84075','84123','84129','84074','84080','84058',
  '84082','84339','84401','84088','84081','84084','84651','84015','84118','84119',
  '84120','84128','84087'
])

const handleStateInput = (e) => {
  let val = e.target.value.trim().toLowerCase()
  if (STATE_ABBREVIATIONS[val]) {
    surveyData.value.state = STATE_ABBREVIATIONS[val]
  } else {
    surveyData.value.state = e.target.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2)
  }
  validate()
}

const handleZipInput = (e) => {
  surveyData.value.zip = e.target.value.replace(/\D/g, '').substring(0, 5)
  validate()
}

const handlePhoneInput = (e) => {
  let digits = e.target.value.replace(/\D/g, '')
  
  // Block international numbers
  if (digits.startsWith('91') && digits.length >= 12) {
    e.target.value = ''
    e.target.placeholder = 'US numbers only'
    e.target.classList.add('error')
    setTimeout(() => {
      e.target.placeholder = 'Phone Number'
      e.target.classList.remove('error')
    }, 2000)
    validate()
    return
  }
  
  if (digits.startsWith('86') && digits.length >= 13) {
    e.target.value = ''
    e.target.placeholder = 'US numbers only'
    e.target.classList.add('error')
    setTimeout(() => {
      e.target.placeholder = 'Phone Number'
      e.target.classList.remove('error')
    }, 2000)
    validate()
    return
  }
  
  // Remove leading 1 if present
  if (digits.startsWith('1') && digits.length === 11) {
    digits = digits.substring(1)
  }
  
  if (digits.length > 10) {
    digits = digits.substring(0, 10)
  }
  
  // Format phone number
  let formatted = ''
  if (digits.length > 0) formatted = '(' + digits.substring(0, 3)
  if (digits.length >= 3) formatted += ') ' + digits.substring(3, 6)
  if (digits.length >= 6) formatted += '-' + digits.substring(6, 10)
  
  surveyData.value.phone = formatted
  validate()
}

const submitForm = () => {
  if (!canContinue.value) return
  
  const urlParams = new URLSearchParams(window.location.search)
  const payload = {
    full_name: surveyData.value.name,
    email: surveyData.value.email,
    phone: surveyData.value.phone,
    street_address: surveyData.value.street,
    city: surveyData.value.city,
    state: surveyData.value.state,
    zip_code: surveyData.value.zip,
    home_type: surveyData.value.homeType,
    square_feet: surveyData.value.sqft,
    timeline: surveyData.value.timeline,
    payment_method: surveyData.value.payment,
    campaign: urlParams.get('Campaign') || urlParams.get('campaign') || '',
    adset: urlParams.get('AdSet') || urlParams.get('adset') || '',
    ad: urlParams.get('Ad') || urlParams.get('ad') || '',
    placement: urlParams.get('Placement') || urlParams.get('placement') || '',
    site_source: urlParams.get('Site') || urlParams.get('site_source_name') || '',
    fbclid: urlParams.get('fbclid') || '',
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
    page_url: window.location.href,
    source: 'Best Roofing Offer - JK Roofing & Construction',
    submitted_at: new Date().toISOString()
  }
  
  const WEBHOOK = ''
  
  fetch(WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(e => {
    if (import.meta.env.DEV) {
      console.error('Form submission error:', e)
    }
  })
  
  emit('submit', payload)
  
  const tyParams = new URLSearchParams({
    name: surveyData.value.name.split(' ')[0],
    city: surveyData.value.city
  })
  
  window.location.href = '/roofing-thank-you?' + tyParams.toString()
}

onMounted(() => {
  // Validate on autofill
  const inputs = document.querySelectorAll('.survey-input')
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      setTimeout(validate, 100)
    })
    input.addEventListener('blur', validate)
  })
})
</script>
