<template>
    <div>
        <el-dialog title="姓名编辑" :visible.sync="visible">
            <el-row>
                <el-form label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="dataForm.name" placeHolder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="应聘职位">
                        <el-input v-model="dataForm.jobTitle" placeHolder="应聘职位"></el-input>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-input v-model="dataForm.birthday" placeHolder="生日"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-input v-model="dataForm.gender" placeHolder="性别"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="dataForm.phone" placeHolder="电话"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="dataForm.email" placeHolder="邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input v-model="dataForm.address" placeHolder="地址"></el-input>
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
                dataForm: {
                    name: '',
                    jobTitle: '',
                    birthday: '',
                    gender: '',
                    phone: '',
                    email: '',
                    address: ''
                }
            }
        },
        methods: {
            init(resume){
                this.visible = true
                this.dataForm = resume
            },
            dataFormSubmit(){
                console.log(this.dataForm, 'ddd')
                this.$message({
                  message: '编辑成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('nameEdited',this.dataForm)
                  }
                })
            },
        },
    }
</script>