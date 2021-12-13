<template>
  <Container :title="$t('fish')">
    <ListLayout :list="fishList" :type="TYPES.FISH" />
  </Container>
</template>

<script>
import { TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      TYPES,
      fishList: []
    }
  },
  mounted () {
    this.$api.fishList()
      .then(({ data }) => {
        this.fishList = data
      })
      .catch(err => console.log('ERROR', err))
  }
}
</script>
