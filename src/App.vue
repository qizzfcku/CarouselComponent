<template>
  <div id="app">
    <Carousel :items="carouselItems" />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Carousel
  },
  data() {
    return {
      carouselItems: [
        { type: 'TextComponent', props: { text: 'Hello, this is a text slide!' } },
        { type: 'ImageComponent', props: { src: 'https://via.placeholder.com/300' } },
        { type: 'FormComponent', props: { fields: [{ label: 'Name' }, { label: 'Email' }] } },
        { type: 'VideoComponent', props: { src: 'https://www.w3schools.com/html/mov_bbb.mp4' } }
      ]
    };
  }
};
</script>