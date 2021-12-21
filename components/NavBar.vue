<template>
  <nav class="navbar p-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/static/logo.png" alt="Animal crossing logo" width="28" height="28">
      </a>
      <a
        role="button"
        :class="`navbar-burger ${isBurguerNavBarShown ? 'is-active' :''}`"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="onClickBurgerNavBar"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" :class="`navbar-menu ${isBurguerNavBarShown ? 'is-active' :''}`">
      <div class="navbar-start">
        <div
          v-for="navBarItem in navBarItems"
          :key="navBarItem.url"
          class="navbar-item"
        >
          <a :href="navBarItem.url">
            {{ $t(navBarItem.name) | capitalize }}
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="select">
          <select v-model="selectedLanguage" @change="onClickLanguage($event)">
            <option
              v-for="language in languages"
              :key="language.code"
              :value="language.code"
            >
              {{ language.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { CATEGORIES } from '@/utils/constants.js'

export default {
  name: 'NavBar',
  data () {
    return {
      navBarItems: CATEGORIES,
      selectedLanguage: this.$i18n.localeProperties?.code || 'EUes',
      isBurguerNavBarShown: false
    }
  },
  computed: {
    languages () {
      return this.$i18n.locales
    }
  },
  methods: {
    onClickLanguage (event) {
      this.selectedLanguage = event.target.value
      this.$i18n.setLocale(this.selectedLanguage)
    },
    onClickBurgerNavBar () {
      this.isBurguerNavBarShown = !this.isBurguerNavBarShown
    }
  }
}
</script>

<style scoped>

  a {
    color: black;
    text-decoration: none;
    font-family: 'Nanum Gothic', sans-serif;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #20A599;
    font-weight: 700;
  }

  select {
    font-family: 'Nanum Gothic', sans-serif;
  }
</style>
