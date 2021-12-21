<template>
  <div class="container-background">
    <NavBar v-if="showNavBar" />
    <div class="mt-5">
      <div class="container-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showNavBar: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .container-background {
    background-image: url('~/static/background.png');
    background-repeat: repeat;
    background-attachment: fixed;
    min-height: 100vh;
  }

  .container-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
