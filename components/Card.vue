<template>
  <div>
    <div class="card" @click="toggleDetailModal">
      <div class="card-image">
        <figure class="image">
          <img :src="item.iconUri || item.imageUri" :alt="item.id">
        </figure>
      </div>
      <div class="card-content">
        <div class="content is-centered">
          <h2>{{ cardName | capitalize }}</h2>
        </div>
      </div>
    </div>
    <Modal :is-shown="showDetailModal" :title="cardName" s>
      <component :is="cardDetailComponent" :item="item" />
    </Modal>
  </div>
</template>
<script>
import ObjectCardDetail from './ObjectCardDetail.vue'
import AnimalCardDetail from './AnimalCardDetail.vue'

import { TYPES } from '@/utils/constants'

const ANIMAL_TYPES = [TYPES.FISH, TYPES.BUGS, TYPES.SEA_CREATURES]

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showDetailModal: false
    }
  },
  computed: {
    currentLanguageCode () {
      return this.$i18n.localeProperties.code
    },
    cardName () {
      return this.item.name[`name${this.currentLanguageCode}`]
    },
    cardDetailComponent () {
      return ANIMAL_TYPES.includes(this.type) ? AnimalCardDetail : ObjectCardDetail
    }
  },
  methods: {
    toggleDetailModal () {
      this.showDetailModal = !this.showDetailModal
    }
  }
}
</script>
