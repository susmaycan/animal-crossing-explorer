<template>
  <Container :title="$t('bugs')">
    <ListLayout :list="bugList" :type="TYPES.BUGS" />
  </Container>
</template>

<script>
import { TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      bugList: [],
      TYPES
    }
  },
  mounted () {
    this.$api.bugList()
      .then(({ data }) => {
        this.bugList = data
      })
      .catch(err => console.log('ERROR', err))
  }
}
</script>
