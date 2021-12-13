<template>
  <div class="columns is-vcentered">
    <div class="column is-5">
      <figure class="image">
        <img :src="item.imageUri" :alt="item.id">
      </figure>
    </div>
    <div class="column is-7">
      <table class="table table-custom">
        <tbody>
          <tr>
            <th>{{ $t('price') | capitalize }}</th>
            <td>
              {{ item.price || item.buyPrice }} {{ $t('bells') }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('description') | capitalize }}</th>
            <td>
              {{ item.museumPhrase || item.museumDesc }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { MONTHS_OBJ } from '@/utils/constants'

export default {
  name: 'ObjectCardDetail',
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
  .custom-image {
    width: 30%;
  }
</style>
