/* eslint-disable vue/attribute-hyphenation */
<template>
  <Container :title="$t('art')">
    <ListLayout :list="artList" :show-availability-filters="false" :type="TYPES.ART" />
  </Container>
</template>

<script>
import { TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      artList: [],
      TYPES
    }
  },
  mounted () {
    this.$api.artList()
      .then(({ data }) => {
        this.artList = data
      })
      .catch(err => console.log('ERROR', err))
  }
}
</script>
