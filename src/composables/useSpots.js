import { ref, computed } from 'vue'

export function useSpots() {
  const now = new Date()
  const month = now.getMonth()
  const day = now.getDate()
  const year = now.getFullYear()
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December']
  
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  
  // Calculate spots remaining based on day of month
  let spotsRemainingCount = Math.round(15 - (day / daysInMonth) * (15 - 3)) + ((day % 3) - 1)
  if (spotsRemainingCount > 15) spotsRemainingCount = 15
  if (spotsRemainingCount < 3) spotsRemainingCount = 3
  
  const spotsFilled = 15 - spotsRemainingCount
  const progressPercent = (spotsFilled / 15) * 100
  
  const spotsRemaining = ref(spotsRemainingCount)
  const currentMonth = computed(() => months[month])
  
  const seasonalMessages = {
    0: "<strong>Winter roof check time:</strong> Freeze-thaw cycles can expose hidden damage. Get a free inspection before small leaks become big problems.",
    1: "<strong>Pre-spring prep:</strong> February is the perfect time to assess winter damage before the busy season hits. Schedule your free inspection now.",
    2: "<strong>Spring is here:</strong> March rains can reveal hidden leaks. Get ahead of the problem with a free roof inspection today.",
    3: "<strong>Peak season approaching:</strong> April showers mean roof problems. If you've noticed any issues, now is the time to act.",
    4: "<strong>Ideal roofing weather:</strong> May offers the best conditions for roof work. Book now for fastest scheduling.",
    5: "<strong>Summer schedule filling fast:</strong> Our busiest season is here. Lock in your spot before we're fully booked.",
    6: "<strong>Prime installation weather:</strong> July's dry weather means perfect roofing conditions. Don't wait—spots are limited.",
    7: "<strong>Summer's end approaching:</strong> Beat the fall rush and get your roof done while the weather cooperates.",
    8: "<strong>Fall prep time:</strong> September is your last chance before the winter weather. Protect your home now.",
    9: "<strong>Winter is coming:</strong> October's weather can expose weak spots in your roof. Schedule your inspection today.",
    10: "<strong>Last call before winter:</strong> November is your final chance to address roof issues before the snow arrives.",
    11: "<strong>Year-end savings:</strong> Lock in owner-direct pricing before the new year. Limited spots remaining at this rate."
  }
  
  const seasonalMessage = computed(() => seasonalMessages[month] || '')
  
  return {
    spotsRemaining,
    currentMonth,
    spotsFilled,
    progressPercent,
    seasonalMessage
  }
}
