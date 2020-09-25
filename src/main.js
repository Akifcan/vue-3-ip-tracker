import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import googleMap from 'googlemaps-vue3'

const googleMapOption = {
    apiKey: 'AIzaSyCw6vyCFtiMltdbyu6Mng2nwF5I6pfMVeo'
}

const app = createApp(App)

app.use(store)
app.use(googleMap, googleMapOption)
app.use(router)
app.mount('#app')
