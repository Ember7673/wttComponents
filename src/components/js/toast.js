import Vue from 'vue';
import Toast from '@/components/Toast';
let ToastConstructor = Vue.extend(Toast)


let myToast = (option) => {
    if(Vue.prototype.$isServer) return;
    let toastDom = new ToastConstructor({
        el:document.createElement('div')
    })
    document.body.appendChild( toastDom.$el )

    option = option || {};
    if(typeof option === 'string') {
       option = {
           text: option
       }
    }
    if(option.type === undefined) {
        toastDom.type = 'default'
    }else {
        toastDom.type = option.type;
    }
    if(option.center === undefined) {
        toastDom.center = ''
    }else {
        toastDom.center = option.center
    }
    if(option.text === undefined) {
        toastDom.text = '这是一条提示信息！'
    }else {
        toastDom.text = option.text
    }
    if(option.close === undefined) {
        toastDom.close = false;
    }else {
        toastDom.close = option.close
        if(option.close) {
            toastDom.isCloseAnimation = false;
        }else {
            toastDom.isCloseAnimation = true;
        }
        
    }
    
}

export default myToast;