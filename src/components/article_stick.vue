<template>
    <div class="contanir">
        <el-table v-loading="load" stripe :data="listData">
            <el-table-column prop="updatedAt" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="category" label="路径">
            </el-table-column>
            <!-- <el-table-column prop="type" label="类别">
            </el-table-column> -->
        </el-table>
    </div>
</template>
<script>
export default {
    props: {
        load: {
            type: Boolean
        },
        listData: {
            type: Array
        }
    },
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
}
</script>
<style>
</style>