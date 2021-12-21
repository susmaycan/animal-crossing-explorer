<template>
  <Container>
    <ListLayout :list="fishList" :type="TYPES.FISH" :title="$t('fish')" />
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
