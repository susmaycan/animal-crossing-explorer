<template>
  <Container>
    <div class="box content">
      <img class="logo" src="~/static/logo.png" alt="Animal crossing logo">
      <h1 class="title">
        {{ $t("home_title") | capitalize }}
      </h1>
      <h2 class="subtitle">
        {{ $t("explore_categories") | capitalize }}:
      </h2>
      <div class="category-list">
        <div v-for="category in categories" :key="category.name" class="">
          <Category :item="category" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import { CATEGORIES } from '@/utils/constants.js'

export default {
  name: 'Home',
  data () {
    return {
      categories: CATEGORIES
    }
  }
}
</script>

<style scoped>
  a, p, h2 {
    font-family: 'Nanum Gothic', sans-serif;
  }

  .title {
    font-family: 'Nanum Pen Script', sans-serif;
    font-weight: 300;
    font-size: 50px;
  }

  .subtitle {
    font-weight: 100;
    font-size: 20px;
  }

  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
  }

  .logo {
    width: 200px;
  }

</style>
