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
                        <!-- <el-input v-model="dataForm.birthday" placeHolder="生日"></el-input> -->
                        <el-date-picker
                          v-model="dataForm.birthday"
                          type="date"
                          placeholder="选择日期"
                          @change="getBirthday"
                          style="width: 100%;"
                          :clearable="true"
                          :editable="true"
                          format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd"
                        >
                          
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="性别" class="gender-radio">
                        <!-- <el-input v-model="dataForm.gender" placeHolder="性别"></el-input> -->
                        <el-radio-group v-model="radio" @change="getGender">
                          <el-radio :label="3">男孩</el-radio>
                          <el-radio :label="6">女孩</el-radio>
                          <el-radio :label="9">都不是</el-radio>
                          <el-radio :label="12">secret</el-radio>
                        </el-radio-group>
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
                },
                radio: 9
            }
        },
        methods: {
            init(resume){
                this.visible = true
                this.dataForm = JSON.parse(JSON.stringify(resume))
            },
            dataFormSubmit(){
                this.$message({
                  message: '编辑成功',
                  type: 'success',
                  center: true,
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('nameEdited',this.dataForm)
                  }
                })
            },
            getBirthday(time){
                this.dataForm.birthday = time
                /* this.dataForm.birthday = this.getTimeMethod(time)
                console.log(this.getTimeMethod(time), 'xxx') */
            },

            //value-format="yyyy-MM-dd" 报错？默认填入的日期格式无法解析（约165年）
            /* getTimeMethod(time){
                let timeA = new Date(time);
                let year = timeA.getFullYear();
                let month = timeA.getMonth() + 1;
                let date = timeA.getDate();
                let hours = timeA.getHours();
                let minutes = timeA.getMinutes();
                let seconds = timeA.getSeconds();
                let newD = year + '-' + this.addSureTime(month) + '-' + this.addSureTime(date) + ' ' + this.addSureTime(hours) + ':' + this.addSureTime(minutes) + ':' + this.addSureTime(seconds);
                return newD
            },
            addSureTime(m) {
              return m<10?'0'+m:m
            } */

            getGender(radio){
                if(radio == 3){
                    this.dataForm.gender = '男'
                }else if(radio == 6){
                    this.dataForm.gender = '女'
                }else if(radio == 9){
                    this.dataForm.gender = '???'
                }else if(radio == 12){
                    this.dataForm.gender = 'secret'
                }
            }
        },
    }
</script>

<style>
    .gender-radio{
        text-align: left;
    }
</style>