<template>
    <div class="content">
        <div class="toast" :class="[type, center ? 'is-center' : '', isCloseAnimation ? 'mymove1' : 'mymove2']">
            <div class="toast-div">{{text}}</div>
            <span :class="close ? 'isClose': 'hidden'" @click="closed">x</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '这是一条提示信息',
            duration: 3000,
            type: 'default',
            center: '',
            close: false,
            isCloseAnimation: true,
        }
    },
    // props: ['type'],
    methods: {
        handleType() {
            switch (this.type) {
                case 'default': 
                    this.type = 'default';
                    break;
                case 'alert' :
                    this.type = 'alert';
                    break;
                case 'success':
                    this.type = 'success';
                    break;
                case 'error': 
                    this.type = 'error';
                    break;
                default:
                    this.type = 'default';
            }
        },
        closed() {
            document.body.removeChild( this.$el )
        },
        startTimer() {
            setTimeout(()=> {
                document.body.removeChild( this.$el )
            }, this.duration)
        }
    },
    mounted() {
        if(this.close === false) {
            this.isCloseAnimation = true;
            this.startTimer();
        }
    }
}
</script>

<style lang="scss" scoped>
.toast{
    width: 350px;
    height: 50px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5rem;
    line-height: 0.7rem;
    color: #999;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    line-height: 50px;
    opacity: 0;
    padding-left: 10px;
}
.mymove1 {
    animation: 3s mymove1 forwards;
}
.mymove2 {
    animation: 2s closeMove forwards;
}
@keyframes mymove1 {
    0% {
        top: 0px;
        opacity: 0;
    }
    40% {
        top: 100px;
        opacity: 1;
    }
    80% {
        top: 100px;
        opacity: 1;
    }
    100% {
        top: 0px;
        opacity: 0;
    }
}
@keyframes closeMove {
    from {
        top: 0px;
        opacity: 0;
    }
    to {
        top: 100px;
        opacity: 1;
    }
}
.default {
    background-color: rgba(204, 204, 255, .7);
    border: 1px solid rgba(204, 204, 255, .9);
}
.alert {
    background-color: rgba(255, 204, 204, .3);
    border: 1px solid rgba(255, 153, 153, .4);
    color: rgb(204, 102, 0);
}
.success {
    background-color: rgba(204, 255, 204, .4);
    border: 1px solid rgba(204, 255, 153, .9);
}
.error {
    background-color: rgba(255, 51, 51, .2);
    border: 1px solid rgba(255, 51, 51, .3);
}

/* 居中 */
.is-center {
     text-align: center;
     padding: 0;
}

/* 关闭按钮 */
.isClose {
    width: 20px;
    height: 20px;
    line-height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    padding-right: 12px;
    cursor: pointer;
}

/* 隐藏 */
.hidden {
    display: none;
}
</style>
