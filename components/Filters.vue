<template>
  <section class="m-2">
    <div class="field is-grouped is-grouped-multiline">
      <!-- Name -->
      <div class="control">
        <input v-model="filters.name" class="input" type="text" :placeholder="$t('search_by_name') | capitalize">
      </div>

      <!-- Month -->
      <div v-if="showAvailabilityFilters" class="control">
        <div class="select">
          <select v-model="filters.month">
            <option :value="0">
              {{ $t('select_month') | capitalize }}
            </option>
            <option v-for="month in monthList" :key="month.value" :value="month.value">
              {{ $t(month.name) | capitalize }}
            </option>
          </select>
        </div>
      </div>

      <!-- Time -->
      <div v-if="showAvailabilityFilters" class="control">
        <div class="select">
          <select v-model="filters.time">
            <option :value="-1">
              {{ $t('select_time') | capitalize }}
            </option>
            <option v-for="time in timeList" :key="time.value" :value="time.value">
              {{ time.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Rarity -->
      <div v-if="showAvailabilityFilters" class="control">
        <div class="select">
          <select v-model="filters.rarity">
            <option :value="''">
              {{ $t('select_rarity') | capitalize }}
            </option>
            <option v-for="rarity in rarityList" :key="rarity.value" :value="rarity.value">
              {{ $t(rarity.name) | capitalize }}
            </option>
          </select>
        </div>
      </div>

      <!-- Location -->
      <div v-if="showAvailabilityFilters" class="control">
        <div class="select">
          <select v-model="filters.location">
            <option :value="''">
              {{ $t('select_location') | capitalize }}
            </option>
            <option v-for="location in locationList" :key="location.value" :value="location.value">
              {{ $t(location.name) | capitalize }}
            </option>
          </select>
        </div>
      </div>

      <!-- Clear button -->
      <button class="delete is-large" @click="clearFilters" />
    </div>
  </section>
</template>

<script>
import { MONTHS, TIME, RARITY, LOCATIONS } from '@/utils/constants'

export default {
  name: 'Filters',
  props: {
    list: {
      type: Array,
      default () { return [] }
    },
    showAvailabilityFilters: {
      type: Boolean,
      default () { return true }
    }
  },
  data () {
    return {
      filters: {
        name: '',
        month: 0,
        time: -1,
        rarity: '',
        location: ''
      },
      filteredList: [],
      monthList: MONTHS,
      timeList: TIME,
      rarityList: RARITY,
      locationList: LOCATIONS
    }
  },
  watch: {
    list () {
      this.filteredList = this.list
    },
    'filters.name' () {
      this.applyFilters()
    },
    'filters.month' () {
      this.applyFilters()
    },
    'filters.time' () {
      this.applyFilters()
    },
    'filters.rarity' () {
      this.applyFilters()
    },
    'filters.location' () {
      this.applyFilters()
    }
  },
  methods: {
    applyFilters () {
      let filteredList = this.filterName(this.list)
      filteredList = this.filterMonth(filteredList)
      filteredList = this.filterTime(filteredList)
      filteredList = this.filterRarity(filteredList)
      filteredList = this.filterLocation(filteredList)
      this.filteredList = filteredList
      this.$emit('update-list', this.filteredList)
    },
    filterName (list) {
      const { name } = this.filters
      return list.filter(item => Object.entries(item.name).filter(([key, value]) => value.toLowerCase().includes(name.toLowerCase())).length > 0)
    },
    filterMonth (list) {
      const { month } = this.filters
      if (month === 0) { return list }
      return list.filter(item => item.availability.monthArrayNorthern.includes(month))
    },
    filterTime (list) {
      const { time } = this.filters
      if (time === -1) { return list }
      return list.filter(item => item.availability.timeArray.includes(time))
    },
    filterRarity (list) {
      const { rarity } = this.filters
      if (rarity === '') { return list }
      return list.filter(item => item.availability.rarity === rarity)
    },
    filterLocation (list) {
      const { location } = this.filters
      if (location === '') { return list }
      return list.filter(item => item.availability.location?.toLowerCase().includes(location.toLowerCase()))
    },
    clearFilters () {
      this.filters.name = ''
      this.filters.month = 0
      this.filters.time = -1
      this.filters.rarity = ''
      this.filters.location = ''

      this.filteredList = this.list
      this.$emit('update-list', this.list)
    }
  }
}
</script>
