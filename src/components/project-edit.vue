<template>
    <div>
        <el-dialog title="技能编辑" :visible.sync="visible">
            <el-row>
                <el-form label-width="80px">
                    <el-form-item label="项目名称">
                        <el-input v-model="dataForm.name" placeHolder="请输入项目名称"></el-input>
                    </el-form-item>
                    <el-form-item label="项目描述">
                        <el-input v-model="dataForm.description" placeHolder="请输入项目描述"></el-input>
                    </el-form-item>
                    <el-form-item label="关键字">
                        <el-input v-model="dataForm.keywords" placeHolder="请输入关键字"></el-input>
                    </el-form-item>
                    <el-form-item label="项目链接">
                        <el-input v-model="dataForm.url" placeHolder="请输入项目链接"></el-input>
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
                    description: '',
                    keywords: '',
                    url: ''

                }
            }
        },
        methods: {
            init(project, index){
                console.log(project, index, 'ii')
                this.visible = true
                this.dataForm = project
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
                    this.$emit('projectEdited',this.dataForm,this.index)
                  }
                })
            },
        },
    }
</script>