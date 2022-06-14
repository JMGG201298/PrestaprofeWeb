import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css"
import Vue from 'vue'
import Vuetify from 'vuetify'

//import es from "../../node_modules/vuetify/src/locale/es.ts"

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
}

export default new Vuetify(opts)
