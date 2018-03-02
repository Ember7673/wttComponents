import Vue from 'vue'
import WttButton from './src/button'
WttButton.install = function (Vue) {
    Vue.component(WttButton.name, WttButton)
}

export default WttButton;