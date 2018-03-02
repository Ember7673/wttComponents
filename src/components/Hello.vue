<template>
  <div class="hello">
      <button @click="showToast">按钮</button>
      <wtt-button></wtt-button>
  </div>
</template>

<script>
import Vue from 'vue';
import toast from './js/toast';
Vue.prototype.$toast = toast;
export default {
    name: 'Hello',
    data() {
        return {

        }
    },
    methods: {
        showToast() {
            this.$toast({
                text: '你好',
                close: false,
                type: 'error'
            });
        }
    }
}
</script>

<style>

</style>
