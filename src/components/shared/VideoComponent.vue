<template>
  <div class="video-slide">
    <video :src="src" controls></video>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.video-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
