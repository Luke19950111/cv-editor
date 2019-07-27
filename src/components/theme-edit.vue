<template>
  <div>
    <el-dialog title="主题编辑" :visible.sync="visible">
        <el-row class="preview">
            <el-col :md="4" :lg="4" class="left" :style="leftBgStyle">
                <div class="left-item" :style="leftItemStyle">
                    <el-color-picker v-model="colors.leftItemColor" @active-change="onLeftItemColorChange" class="left-item-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
                    <p>左侧按钮</p>
                </div>
                <div class="left-bg">
                    <el-color-picker v-model="colors.leftBgColor" @active-change="onLeftBgColorChange" class="left-bg-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
                    <p>左侧背景</p>
                </div>
            </el-col>
            <el-col :md="20" :lg="20" class="right" :style="rightBgStyle">
                <div class="right-text" :style="rightTextStyle">
                    <h1 :style="rightTextStyle">张飞</h1>
                    <el-color-picker v-model="colors.rightTextColor" @active-change="onRightTextColorChange" class="right-text-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
                    <p>右侧文字</p>
                </div>
                <div class="right-item" :style="rightItemStyle">
                    <el-color-picker v-model="colors.rightItemColor" @active-change="onRightItemColorChange" class="right-item-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
                    <p>右侧卡片</p>
                </div>
                <div class="right-bg">
                    <el-color-picker v-model="colors.rightBgColor" @active-change="onRightBgColorChange" class="right-bg-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
                    <p>右侧背景</p>
                </div>
            </el-col>
        </el-row>

        <span slot="footer">
            <el-button @click="visible=false">取消</el-button>
            <el-button @click="dataFormSubmit()" type="primary">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        colors: {
            leftItemColor: 'rgb(255,255,255)',
            leftBgColor: 'rgb(243,243,243)',
            rightTextColor: 'rgb(0,0,0)',
            rightBgColor: 'rgb(255,165,0)',
            rightItemColor: 'rgb(255,255,255)'
        },
        leftItemStyle: {},
        leftBgStyle: {},
        rightTextStyle: {},
        rightBgStyle: {},
        rightItemStyle: {}
      }
    },
    methods: {
      init() {
        this.visible = true
        
      },
      dataFormSubmit() {
        console.log(this.colors, 'colorsss')
        this.$message({
          message: '编辑成功',
          type: 'success',
          center: true,
          duration: 1500,
          onClose: () => {
            this.visible = false
            this.$emit('themeEdited', this.colors)
          }
        })
      },
      onLeftItemColorChange(color){
        console.log(color, 'yyy')
        this.colors.leftItemColor = color
        this.leftItemStyle = {'background':color}
      },
      onLeftBgColorChange(color){
        this.colors.leftBgColor = color
        this.leftBgStyle = {'background':color}
      },
      onRightTextColorChange(color){
        this.colors.rightTextColor = color
        this.rightTextStyle = {'color':color}
      },
      onRightItemColorChange(color){
        this.colors.rightItemColor = color
        this.rightItemStyle = {'background':color}
      },
      onRightBgColorChange(color){
        this.colors.rightBgColor = color
        this.rightBgStyle = {'background':color}
      }
    },
  }

</script>

<style scoped>
    .preview{
        min-height: 300px;
        border: 1px solid #dddddd;
    }
    .left{
        border-right: 1px solid #dddddd;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .left-item{
        height: 3rem;
        border: 1px solid #dddddd;
        margin: .5rem;
        border-radius: 5px;
    }
    .left-bg{
        height: 3rem;
        margin: .5rem;
    }

    .right{
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right-item{
        height: 3rem;
        border: 1px solid #dddddd;
        margin: 0 .5rem;
        border-radius: 5px;
    }
    .right-bg{
        height: 3rem;
        margin: .5rem;
    }
</style>
