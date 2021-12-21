<template>
  <section class="box list-container">
    <slot name="title">
      <h1 class="title">
        {{ title | capitalize }}
      </h1>
    </slot>
    <Filters :list="list" :show-availability-filters="showAvailabilityFilters" @update-list="filterList" />
    <div v-if="filteredList.length === 0">
      <div class="notification is-danger">
        {{ $t('no_results') | capitalize }} :(
      </div>
    </div>
    <div v-else class="columns is-multiline is-narrow m-3 is-vcentered is-centered">
      <div v-for="item in filteredList" :key="item.id" class="column is-one-fifth-desktop">
        <Card :item="item" :type="type" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListLayout',
  props: {
    list: {
      type: Array,
      default () { return [] }
    },
    showAvailabilityFilters: {
      type: Boolean,
      default () { return true }
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      filteredList: []
    }
  },
  watch: {
    list () {
      this.filteredList = this.list
    }
  },
  methods: {
    filterList (newList) {
      this.filteredList = newList
    }
  }
}
</script>

<style scoped>
  .list-container {
    margin: 2em;
    width: 90%;
  }

  .title {
    font-family: 'Nanum Pen Script', sans-serif;
    font-weight: 300;
    font-size: 50px;
  }
</style>
