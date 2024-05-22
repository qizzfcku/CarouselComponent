import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import TextComponent from './components/shared/TextComponent.vue';
import ImageComponent from './components/shared/ImageComponent.vue';
import FormComponent from './components/shared/FormComponent.vue';
import VideoComponent from './components/shared/VideoComponent.vue';

const app = createApp(App);

app.component('TextComponent', TextComponent);
app.component('ImageComponent', ImageComponent);
app.component('FormComponent', FormComponent);
app.component('VideoComponent', VideoComponent);

app.mount('#app');
