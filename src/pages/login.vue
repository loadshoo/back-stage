<template>
    <div class="contanir">
        <el-form class="demo-ruleForm" :model="formLabelAlign">
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="formLabelAlign.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {login} from '../../config/apis.js'
export default {
    data() {
        return {
            formLabelAlign: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        async submitForm() {
            let userinfo = await login(this.formLabelAlign);
            if(userinfo.code === 0) {
                 localStorage.setItem('token', userinfo.data.token);
                 this.$router.go(-1);
                 // console.log(this);
                 // console.log(this)
            }
        },
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped>
.demo-ruleForm {
    width: 400px;
    margin: 300px auto 0;

}
</style>