<template>
  <div>
      <div v-time="timeNow"></div>
      <div v-time="timeBefore"></div>
  </div>
</template>

<script>
import './index'
export default {
    data() {
        return {
            timeNow: (new Date()).getTime(),
            timeBefore: 1419984546623,
        }
    },
    methods: {
        

    }
}
</script>

<style>

</style>
