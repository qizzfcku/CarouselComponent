<template>
  <div class="image-slide">
    <img :src="src" alt="Carousel Image" />
  </div>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.image-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.image-slide img {
  max-width: 100%;
  max-height: 100%;
}
</style>