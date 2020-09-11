<template>
    <div class="grey darken-1 empty-layout">
      <router-view />
    </div>
</template>

<script>
import messages from '@/utils/messages'
export default {
  computed: {
    error () {
      console.log(this.$store.getters.error)
      return this.$store.getters.error
    }
  },
  watch: {
    error (fbError) {
      return this.$error(messages[fbError.code]) || 'Что-то пошло не так'
    }
  }
}
</script>
