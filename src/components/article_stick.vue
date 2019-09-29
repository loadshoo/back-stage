<template>
    <div class="contanir">
        <el-table v-loading="load" stripe :data="listData">
            <el-table-column prop="updatedAt" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="category" label="路径">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="140">
                <template slot-scope="scope">
                    <!-- <el-button @click="checkView()" type="text" size="small">查看</el-button> -->
                    <el-button @click="edit(scope.row.code)" type="text" size="small">编辑</el-button>
                    <el-button @click="remove(scope.row.code)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import {getArticle} from '../../config/apis.js';
export default {

    data() {
        return {
            listData: [],
            load: true,
        }
    },
    methods: {
        async getStickArticle() {
            this.load = true;
            let params = {
                stick: 1
            };
            let res = await getArticle(params);
            this.listData =res.data;
            this.load = false;
        },
        edit(code) {
            this.$router.push({name:'edit', params: { id: code }});
        }
    },
    created() {

    },
    mounted() {
        this.getStickArticle();
    }
}
</script>
<style>
</style>