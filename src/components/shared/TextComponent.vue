<template>
  <div class="text-slide">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TextComponent',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.text-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>