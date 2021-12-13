<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-5">
        <figure class="image">
          <img :src="item.imageUri" :alt="item.id">
        </figure>
      </div>
      <div class="column is-7">
        <table class="table table-custom">
          <tbody>
            <tr v-if="item.catchPhrase">
              <th>{{ $t('catch_phrase') | capitalize }}</th>
              <td>
                {{ item.catchPhrase }}
              </td>
            </tr>
            <tr v-if="hasAvailability">
              <th>{{ $t('date_availability') | capitalize }}</th>
              <td>
                {{ availabilityDate }}
              </td>
            </tr>
            <tr v-if="hasAvailability">
              <th>{{ $t('time_availability') | capitalize }}</th>
              <td>
                {{ availabilityTime }}
              </td>
            </tr>
            <tr v-if="hasAvailability && item.availability.rarity">
              <th>{{ $t('rarity') | capitalize }}</th>
              <td>
                {{ item.availability.rarity }}
              </td>
            </tr>
            <tr v-if="hasAvailability && item.availability.location">
              <th>{{ $t('location') | capitalize }}</th>
              <td>
                {{ item.availability.location }}
              </td>
            </tr>
            <tr>
              <th>{{ $t('price') | capitalize }}</th>
              <td>
                {{ item.price || item.buyPrice }} {{ $t('bells') }}
              </td>
            </tr>
            <tr v-if="item.shadow">
              <th>{{ $t('shadow') | capitalize }}</th>
              <td>
                {{ item.shadow }}
              </td>
            </tr>
            <tr v-if="item.speed">
              <th>{{ $t('speed') | capitalize }}</th>
              <td>
                {{ item.speed }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <p><strong>{{ $t('description') | capitalize }}</strong></p>
      <p>{{ item.museumPhrase || item.museumDesc }}</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { MONTHS_OBJ } from '@/utils/constants'

export default {
  name: 'CardDetail',
  props: {
    item: Object
  },
  data () {
    return {
      showDetailModal: false
    }
  },
  computed: {
    hasAvailability () {
      return !!this.item.availability
    },
    currentLanguageCode () {
      return this.$i18n.localeProperties.code
    },
    availabilityDate () {
      const { availability } = this.item
      if (availability?.isAllYear) {
        return Vue.filter('capitalize')(this.$i18n.t('all_year'))
      }
      let date = ''

      availability?.monthArrayNorthern.forEach((month, index) => {
        const stringMonth = MONTHS_OBJ[month]

        if (index === availability?.monthArrayNorthern.length - 1) {
          date += stringMonth
        } else {
          date += stringMonth + ' - '
        }
      })

      return date
    },
    availabilityTime () {
      const { availability } = this.item
      if (availability?.isAllDay) {
        return Vue.filter('capitalize')(this.$i18n.t('all_day'))
      }
      return this.item.availability?.timeArray
    },
    cardName () {
      console.log(this.item)
      return this.item.name[`name${this.currentLanguageCode}`]
    }
  },
  methods: {
    toggleDetailModal () {
      this.showDetailModal = !this.showDetailModal
    }
  }
}
</script>
<style>
  .custom-table {
    width: 100%;
  }
</style>
