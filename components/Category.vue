<template>
  <button
    class="btn-grad"
    @click="onClick"
  >
    {{ $t(item.name) | capitalize }}
  </button>
</template>
<script>
export default {
  name: 'Category',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$router.push({
        path: this.item.url
      })
    }
  }
}
</script>

<style scoped>
  .btn-grad {
  background-image: linear-gradient(to right, #2ad6c8 0%, #20A599  51%, #136962  100%)
  }
  .btn-grad {
    border: none;
    padding: 1em 2em;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 30px;
    display: block;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
  }

  .btn-grad:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
  }
</style>
