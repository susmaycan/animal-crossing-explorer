<template>
  <Container>
    <ListLayout :title="$t('fossils')" :list="fossilList" :show-availability-filters="false" :type="TYPES.FOSSILS" />
  </Container>
</template>

<script>
import { TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      fossilList: [],
      TYPES
    }
  },
  mounted () {
    this.$api.fossilList()
      .then(({ data }) => {
        this.fossilList = data
      })
      .catch(err => console.log('ERROR', err))
  }
}
</script>
