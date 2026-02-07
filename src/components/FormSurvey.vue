<template>
  <div class="form-wrapper">
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
            <span>Step {{ currentQuestion }} of 5</span>
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
        
        <!-- Question 2: Timeline -->
        <div class="survey-question" :class="{ active: currentQuestion === 2 }">
          <div class="question-label">When are you wanting this project completed?</div>
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
        
        <!-- Question 3: Payment -->
        <div class="survey-question" :class="{ active: currentQuestion === 3 }">
          <div class="question-label">How are you hoping to pay for a new roof?</div>
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
        
        <!-- Question 4: Address -->
        <div class="survey-question" :class="{ active: currentQuestion === 4 }">
          <div class="question-label">Where is the property located?</div>
          <div class="question-note">Please exit the survey if you live more than 70 miles from Cincinnati, OH</div>
          <div class="input-group">
            <input 
              type="text" 
              class="survey-input"
              v-model="surveyData.street"
              placeholder="Street Address"
              autocomplete="street-address"
              @input="validate"
            />
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
        
        <!-- Question 5: Contact Info -->
        <div class="survey-question" :class="{ active: currentQuestion === 5 }">
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
const totalQuestions = 5

const surveyData = ref({
  homeType: '',
  sqft: '',
  timeline: '',
  payment: '',
  street: '',
  city: '',
  state: 'OH',
  zip: '',
  name: '',
  email: '',
  phone: ''
})

const homeTypeOptions = [
  'Single Family Home',
  'Townhome Or Duplex',
  'Mobile Home',
  'Building'
]

const sqftOptions = [
  'Under 1,500 sq ft',
  '1,500 to 2,500 sq ft',
  '2,500 to 3,500 sq ft',
  'Over 3,500 sq ft'
]

const timelineOptions = [
  'ASAP',
  'This Month',
  'Next Month',
  'No Preference'
]

const paymentOptions = [
  'Cash',
  'Financing',
  'Insurance',
  'Not sure'
]

const progressPercent = computed(() => Math.round((currentQuestion.value / totalQuestions) * 100))

const canContinue = computed(() => {
  switch (currentQuestion.value) {
    case 1:
      return surveyData.value.homeType !== ''
    case 2:
      return surveyData.value.timeline !== ''
    case 3:
      return surveyData.value.payment !== ''
    case 4:
      return surveyData.value.street !== '' && 
             surveyData.value.city !== '' && 
             surveyData.value.zip.length === 5
    case 5:
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

// Cincinnati tri-state area (OH, KY, IN) - 150 mile radius
const validZipCodes = new Set([
  '45201','45202','45203','45204','45205','45206','45207','45208','45209','45210',
  '45211','45212','45213','45214','45215','45216','45217','45218','45219','45220',
  '45221','45222','45223','45224','45225','45226','45227','45228','45229','45230',
  '45231','45232','45233','45234','45235','45236','45237','45238','45239','45240',
  '45241','45242','45243','45244','45245','45246','45247','45248','45249','45250',
  '45251','45252','45253','45254','45255','45258','45262','45263','45264','45267',
  '45268','45269','45270','45271','45273','45274','45275','45276','45277','45280',
  '45296','45298','45299','45401','45402','45403','45404','45405','45406','45409',
  '45410','45414','45415','45416','45417','45419','45420','45424','45426','45427',
  '45428','45429','45430','45431','45432','45433','45434','45435','45437','45439',
  '45440','45441','45448','45449','45458','45459','45469','45470','45475','45479',
  '41001','41002','41003','41004','41005','41006','41007','41008','41010','41011',
  '41012','41014','41015','41016','41017','41018','41019','41021','41022','41030',
  '41031','41033','41034','41035','41037','41039','41040','41041','41042','41043',
  '41044','41045','41046','41048','41049','41051','41052','41053','41054','41055',
  '41056','41059','41061','41062','41063','41064','41065','41071','41072','41073',
  '41074','41075','41076','41080','41081','41083','41085','41086','41091','41092',
  '41093','41094','41095','41096','41097','41098','41099','41101','41102','41105',
  '41114','41121','41124','41128','41129','41132','41135','41139','41141','41142',
  '41143','41144','41146','41149','41159','41164','41166','41168','41169','41171',
  '41179','41180','41181','41183','41189','41216','41219','41222','41226','41230',
  '41231','41232','41234','41238','41240','41250','41254','41255','41256','41257',
  '41260','41262','41263','41264','41265','41267','41268','41271','41274','41276',
  '41277','41281','41282','41285','41287','41288','41290','41291','41293','41294',
  '41295','41296','41297','41298','41299','41301','41307','41311','41313','41314',
  '41317','41332','41333','41338','41339','41341','41342','41343','41344','41347',
  '41348','41351','41352','41360','41362','41364','41365','41366','41367','41368',
  '41385','41386','41390','41397','41408','41421','41422','41425','41426','41433',
  '41444','41451','41459','41464','41465','41472','41477','41601','41602','41603',
  '41604','41605','41606','41607','41612','41615','41616','41619','41621','41622',
  '41630','41631','41632','41633','41635','41636','41637','41640','41642','41643',
  '41645','41647','41649','41650','41651','41653','41655','41659','41660','41663',
  '41666','41667','41669','41672','41701','41702','41712','41713','41714','41719',
  '41721','41722','41723','41725','41727','41729','41730','41731','41732','41733',
  '41735','41736','41739','41740','41743','41745','41746','41747','41749','41751',
  '41754','41755','41756','41759','41760','41762','41763','41764','41766','41772',
  '41773','41774','41775','41776','41777','41778','41780','41804','41810','41812',
  '41815','41817','41819','41821','41822','41824','41825','41826','41828','41831',
  '41832','41833','41834','41835','41836','41837','41838','41839','41840','41843',
  '41844','41845','41847','41848','41849','41855','41858','41859','41861','41862',
  '46201','46202','46203','46204','46205','46206','46207','46208','46209','46211',
  '46214','46216','46217','46218','46219','46220','46221','46222','46224','46225',
  '46226','46227','46228','46229','46230','46231','46234','46235','46236','46237',
  '46239','46240','46241','46242','46244','46247','46249','46250','46251','46253',
  '46254','46255','46256','46259','46260','46266','46268','46274','46275','46277',
  '46278','46280','46282','46283','46285','46290','46291','46295','46296','46298',
  '47001','47003','47006','47010','47011','47012','47016','47017','47018','47019',
  '47020','47021','47022','47023','47024','47025','47030','47031','47032','47033',
  '47034','47035','47036','47037','47038','47039','47040','47041','47042','47043',
  '47060','47102','47104','47106','47107','47108','47110','47111','47112','47114',
  '47115','47116','47117','47118','47119','47120','47122','47124','47125','47126',
  '47129','47130','47131','47132','47133','47134','47135','47136','47137','47138',
  '47140','47141','47142','47143','47144','47145','47146','47147','47150','47151',
  '47160','47161','47162','47163','47164','47165','47166','47167','47170','47172',
  '47174','47175','47177','47190','47199','47201','47202','47203','47220','47223',
  '47224','47225','47226','47227','47228','47229','47230','47231','47232','47234',
  '47235','47236','47240','47243','47244','47245','47246','47247','47249','47250',
  '47260','47261','47262','47263','47264','47265','47270','47272','47273','47274',
  '47280','47281','47282','47283','47284','47302','47303','47304','47305','47306',
  '47307','47308','47320','47325','47326','47327','47330','47331','47334','47335',
  '47336','47337','47338','47339','47340','47341','47342','47344','47345','47346',
  '47348','47351','47352','47353','47354','47355','47356','47357','47358','47359',
  '47360','47361','47362','47366','47367','47368','47369','47370','47371','47373',
  '47374','47375','47380','47381','47382','47383','47384','47385','47386','47387',
  '47388','47390','47393','47394','47396','47401','47402','47403','47404','47405',
  '47406','47407','47408','47420','47421','47424','47426','47427','47429','47430',
  '47431','47432','47433','47434','47435','47436','47437','47438','47439','47441',
  '47443','47445','47446','47448','47449','47451','47452','47453','47454','47455',
  '47456','47457','47458','47459','47460','47461','47462','47463','47464','47465',
  '47467','47468','47469','47470','47471','47490','47501','47512','47513','47514',
  '47515','47516','47519','47520','47521','47522','47523','47524','47525','47527',
  '47528','47529','47531','47532','47535','47536','47537','47541','47542','47545',
  '47546','47547','47549','47550','47551','47552','47553','47556','47557','47558',
  '47561','47562','47564','47567','47568','47573','47574','47575','47576','47577',
  '47578','47579','47580','47581','47584','47585','47586','47588','47590','47591',
  '47596','47597','47598','47601','47610','47611','47612','47613','47614','47615',
  '47616','47617','47618','47619','47620','47629','47630','47631','47633','47634',
  '47635','47637','47638','47639','47640','47647','47648','47649','47654','47660',
  '47665','47666','47670','47683','47699','47701','47702','47703','47704','47705',
  '47706','47708','47710','47711','47712','47713','47714','47715','47716','47719',
  '47720','47721','47722','47724','47725','47727','47728','47730','47731','47732',
  '47733','47734','47735','47736','47737','47739','47740','47741','47744','47747',
  '47750','47801','47802','47803','47804','47805','47807','47808','47809','47811',
  '47812','47833','47834','47836','47837','47838','47840','47841','47842','47845',
  '47846','47847','47848','47849','47850','47851','47852','47853','47854','47855',
  '47856','47857','47858','47859','47860','47861','47862','47863','47866','47868',
  '47869','47870','47871','47872','47874','47875','47876','47878','47879','47880',
  '47881','47882','47884','47885','47886','47887','47888','47889','47890','47891',
  '47893','47894','47895','47896','47897','47898','47899','47901','47902','47903',
  '47904','47905','47906','47907','47909','47916','47917','47918','47920','47921',
  '47922','47923','47924','47925','47926','47928','47929','47930','47932','47933',
  '47934','47935','47936','47937','47938','47939','47940','47941','47942','47943',
  '47944','47946','47948','47949','47950','47951','47952','47954','47955','47957',
  '47958','47959','47960','47962','47963','47964','47965','47966','47967','47968',
  '47969','47970','47971','47974','47975','47977','47978','47980','47981','47982',
  '47983','47984','47986','47987','47988','47989','47990','47991','47992','47993',
  '47994','47995','47996','47997','47998','47999','43001','43002','43003','43004','43005',
  '43006','43007','43008','43009','43010','43011','43013','43014','43015','43016',
  '43017','43018','43019','43021','43022','43023','43025','43026','43027','43028',
  '43029','43030','43031','43032','43033','43035','43036','43037','43040','43041',
  '43044','43045','43046','43047','43048','43050','43054','43055','43056','43058',
  '43060','43061','43062','43064','43065','43066','43067','43068','43069','43070',
  '43071','43072','43073','43074','43076','43077','43078','43080','43081','43082',
  '43083','43084','43085','43086','43093','43098','43101','43102','43103','43105',
  '43106','43107','43109','43110','43111','43112','43113','43115','43116','43117',
  '43119','43123','43125','43126','43127','43128','43130','43131','43135','43136',
  '43137','43138','43140','43142','43143','43144','43145','43146','43147','43148',
  '43149','43150','43151','43152','43153','43154','43155','43156','43157','43158',
  '43160','43162','43163','43164','43194','43195','43196','43198','43199','43201',
  '43202','43203','43204','43205','43206','43207','43209','43210','43211','43212',
  '43213','43214','43215','43216','43217','43218','43219','43220','43221','43222',
  '43223','43224','43226','43227','43228','43229','43230','43231','43232','43234',
  '43235','43236','43240','43251','43260','43265','43266','43268','43270','43271',
  '43272','43279','43287','43291','43299','43301','43302','43310','43311','43314',
  '43315','43316','43317','43318','43319','43320','43321','43322','43323','43324',
  '43325','43326','43330','43331','43332','43333','43334','43335','43336','43337',
  '43338','43340','43341','43342','43343','43344','43345','43346','43347','43348',
  '43349','43350','43351','43356','43357','43358','43359','43360','43362','43363',
  '43364','43365','43366','43367','43368','43369','43370','43371','43372','43373',
  '43374','43375','43376','43377','43378','43379','43380','43381','43382','43383',
  '43384','43385','43386','43387','43388','43389','43390','43391','43393','43394',
  '43395','43396','43397','43398','43399','43402','43403','43406','43407','43408',
  '43410','43412','43413','43414','43416','43420','43430','43431','43432','43433',
  '43434','43435','43436','43437','43438','43439','43440','43441','43442','43443',
  '43445','43446','43447','43449','43450','43451','43452','43456','43457','43458',
  '43460','43462','43463','43464','43465','43466','43467','43468','43469','43470'
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
    submitted_at: new Date().toISOString(),
    tags: ['fb lead']
  }
  
  const WEBHOOK = 'https://services.leadconnectorhq.com/hooks/dnOxsdCQQ8R9EijvSzj1/webhook-trigger/3aa2738e-b7a2-418b-a1dc-95024c6ddbec'
  
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
  
  // Redirect to confirmation page
  window.location.href = '/confirmation?' + tyParams.toString()
}

onMounted(() => {
  // Validate on autofill - use requestAnimationFrame for better performance
  const inputs = document.querySelectorAll('.survey-input')
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      requestAnimationFrame(() => {
        setTimeout(validate, 100)
      })
    })
    input.addEventListener('blur', () => {
      requestAnimationFrame(validate)
    })
  })
})
</script>
