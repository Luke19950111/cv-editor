<template>
    <div>
        <el-dialog title="技能编辑" :visible.sync="visible">
            <el-row>
                <el-form label-width="80px">
                    <el-form-item label="技能名称">
                        <el-input v-model="dataForm.name" placeHolder="请输入技能名称"></el-input>
                    </el-form-item>
                    <el-form-item label="技能描述">
                        <el-input v-model="dataForm.description" placeHolder="技能描述"></el-input>
                    </el-form-item>
                </el-form>
            </el-row>
            <span slot="footer">
                <el-button @click="visible=false">取消</el-button>
                <el-button @click="dataFormSubmit()" type="primary">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                visible: false,
                index: '',
                dataForm: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            init(skill, index){
                this.visible = true
                this.dataForm = skill
                this.index = index
            },
            dataFormSubmit(){
                console.log(this.dataForm, 'ddd')
                this.$message({
                  message: '编辑成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('skillEdited',this.dataForm,this.index)
                  }
                })
            },
        },
    }
</script>