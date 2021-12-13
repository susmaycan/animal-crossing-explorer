<template>
  <div :class="`modal ${showModal ? 'is-active is-clipped' : ''}`">
    <div class="modal-background" />
    <div class="modal-card custom-modal">
      <header class="modal-card-head">
        <p v-if="title" class="modal-card-title">
          {{ title | capitalize }}
        </p>
        <button class="delete" aria-label="close" @click="closeSelf" />
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    isShown: Boolean,
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  watch: {
    isShown () {
      this.showModal = this.isShown
    }
  },
  methods: {
    closeSelf () {
      this.showModal = false
    }
  }
}
</script>
<style scoped>
  .custom-modal {
    width: 70%;
  }
</style>
