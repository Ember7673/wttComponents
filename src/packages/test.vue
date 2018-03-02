<template>
  <div>
      <wttButton :count="1"></wttButton>
  </div>
</template>

<script>
export default {
    mounted() {
        var slot1 = this.$slots.slot1
        var slot2 = this.$slots.slot2
        console.log(slot1)
        console.log(slot2)
    }
}
</script>

<style>

</style>
