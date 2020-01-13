import clickoutside from '../../../../directives/clickoutside'
import focusDetector from './focusDetector'
import locale from '../../../../mixins/locale'

const TIME_CONST = {
  hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  minutes: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
  seconds: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default {
  mixins: [ locale ],
  inject: {
    NDatePicker: {
      default: null
    }
  },
  directives: {
    clickoutside
  },
  components: {
    focusDetector
  },
  data () {
    return {
      noTransition: false,
      memorizedValue: null,
      ...TIME_CONST
    }
  },
  created () {
    this.memorizedValue = this.value
  },
  computed: {
    weekdays () {
      return weekdays.map(weekday => this.localeNamespace[weekday])
    },
    localeNamespace () {
      return this.tns('DatePicker')
    }
  },
  methods: {
    clearValue () {
      this.$emit('input', null)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    disableTransitionOneTick () {
      if (this.active) {
        this.noTransition = true
        this.$nextTick().then(() => {
          if (this.$el) {
            this.$el.getBoundingClientRect()
          }
          this.noTransition = false
        })
      } else {
        this.noTransition = false
      }
    }
  }
}
