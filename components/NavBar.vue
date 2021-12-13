<template>
  <nav class="navbar p-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <NuxtLink to="/">
          {{ $t('home') | capitalize }}
        </NuxtLink>
      </div>

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
          <NuxtLink :to="navBarItem.url">
            {{ $t(navBarItem.name) | capitalize }}
          </NuxtLink>
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
export default {
  name: 'NavBar',
  data () {
    return {
      navBarItems: [
        {
          name: 'fish',
          url: '/fish'
        },
        {
          name: 'bugs',
          url: '/bugs'
        },
        {
          name: 'fossils',
          url: '/fossils'
        },
        {
          name: 'sea_creatures',
          url: '/sea'
        },
        {
          name: 'art',
          url: '/art'
        }
      ],
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
