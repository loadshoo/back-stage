<template>
    <div class="contanir">
        <el-container :style="'height:'+screenHeight+'px;border: 1px solid #eee'">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>所有文章</template>
                        <!-- <el-menu-item-group>
                            <template slot="title"></template>
                            <el-menu-item class="is-active" index="1-1" @click="swithTab('article','index')">首页精选</el-menu-item>
                            <el-menu-item index="1-2" @click="swithTab('article','other')">其它</el-menu-item>
                        </el-menu-item-group> -->
                        <el-menu-item-group>
                            <el-menu-item :class="type === 'article_index'?'is-active':''" index="1-1" @click="swithTab('article','index')">首页精选</el-menu-item>
                            <el-menu-item index="1-2" @click="swithTab('article','other')">其它</el-menu-item>
                        </el-menu-item-group>
                        <!-- <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                        </el-submenu> -->
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>分类</template>
                        <!-- <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group> -->
                        <el-menu-item-group>
                            <el-menu-item index="2-1" @click="swithTab('class','bootstarp')">bootstarp</el-menu-item>
                        </el-menu-item-group>
                        <!-- <el-submenu index="2-1">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu> -->
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>基础设置</template>
                        <!-- <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group> -->
                        <el-menu-item-group>
                            <el-menu-item index="3-1" @click="swithTab('set','indexNav')">首页导航栏</el-menu-item>
                        </el-menu-item-group>
                        <!-- <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu> -->
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="font-size: 12px">
                    <!-- <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span> -->
                </el-header>
                <el-main>
                    <articleStick :load="isLoading" :listData="listData"></articleStick>
                </el-main>
                <el-header style="font-size: 12px"></el-header>
            </el-container>
        </el-container>
    </div>
</template>
<script>

import {getArticle} from '../../config/apis.js';
import article_stick from '../components/article_stick.vue'

export default {
    components: {
        'articleStick': article_stick
    },
    data() {
        return {
            listData: [],
            screenHeight: '',
            type: "article_index",
            item: {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            },
            isLoading: true
        }
    },
    mounted() {
        this.getStickArticle();
        // this.swithTab('article', 'index');
        // this.screenWidth = document.body.clientWidth;
        this.screenHeight = window.innerHeight;
        // console.log(this.screenHeight)
        window.onresize = () => {
            return (() => {
                // this.screenWidth = document.body.clientWidth;
                this.screenHeight = document.body.clientHeight;
            })();
        };
    },
    //实例方法
    methods: {
        swithTab: function(tab, item) {
            this.type = tab + '_' + item;
            this.getStickArticle();
            // setTimeout(() => {
            //     this.item.type = item;
            //     this.type = tab + '_' + item;
            //     this.listData = Array(10).fill(this.item);
            //     this.isLoading = false;
            // }, 1000)
        },
        async getStickArticle() {
            this.isLoading = true;
            let params = {
                stick: 1
            };
            let res = await getArticle(params);
            this.listData =res.data;
            this.isLoading = false;
        }
    }
}
</script>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>