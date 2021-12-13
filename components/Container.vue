<template>
  <div class="container">
    <NavBar />
    <div class="mt-5">
      <slot name="title">
        <h1 class="title">
          {{ title | capitalize }}
        </h1>
      </slot>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
