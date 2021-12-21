<template>
  <Container>
    <ListLayout :title="$t('sea_creatures')" :list="seaCreatures" :type="TYPES.SEA_CREATURES" />
  </Container>
</template>

<script>
import { TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      seaCreatures: [],
      TYPES
    }
  },
  mounted () {
    this.$api.seaCreaturesList()
      .then(({ data }) => {
        this.seaCreatures = data
      })
      .catch(err => console.log('ERROR', err))
  }
}
</script>
