import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer,
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})