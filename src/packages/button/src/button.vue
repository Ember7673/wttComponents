<template>
  <div class="wtt-button">
      <div class="btn wtt-button--warning">
            {{msg}}
            <wttButton :count="count + 1" v-if="count < 3"></wttButton>
      </div>
  </div>
</template>

<script>
export default {
    name: 'wttButton',
    data() {
        return {
            msg: '默认按钮'
        }
    },
    props: {
        count: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.wtt-button {
    .btn {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        // background: #fff;
        // border: 1px solid #dcdfe6;
        // color: #606266;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        
    }
}

//默认按钮
.wtt-button--default {
    background-color: #fff;
    color: #606266;
    border: 1px solid #dcdfe6;
}
//主要按钮
.wtt-button--primary {
    background-color: #409EFF;
    border-color: #409EFF;
    color: #fff;
}
//危险按钮
.wtt-button--danger {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
}

//信息按钮
.wtt-button--info {
    background: #82848a;
    border-color: #82848a;
    color: #fff
}

//成功按钮
.wtt-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a
}

// 警告按钮
.wtt-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c
}
</style>
