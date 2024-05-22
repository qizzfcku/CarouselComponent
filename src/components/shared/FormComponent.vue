<template>
  <div class="form-slide">
    <form>
      <div v-for="(field, index) in fields" :key="index">
        <label>{{ field.label }}</label>
        <input type="text" :placeholder="field.label" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.form-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
form {
  display: flex;
  flex-direction: column;
}
form div {
  margin-bottom: 10px;
}
</style>
