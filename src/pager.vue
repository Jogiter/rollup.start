<template>
    <div v-show="totalPage > 1">
        <div v-if="totalPage > max">
            <div v-if="pageNum <= max - 1">
                <a href="#" class="prev" @click.prevent="goPrev" v-show="showBtn ? true : pageNum > 1">&lt;</a>
                <a href="javascript: void(0);" v-for="i in (max - 1)" v-text="i" :class="i === pageNum ? 'cur' : ''" @click.prevent="goPage(i)"></a>
                <a href="javascript: void(0);">...</a>
                <a href="javascript: void(0);" v-text="totalPage" @click.prevent="goPage(totalPage)"></a>
                <a href="#" class="next" @click.prevent="goNext" v-show="showBtn ? true : pageNum < totalPage">&gt;</a>
            </div>
            <div v-else-if="pageNum >= totalPage - max + 2">
                <a href="#" class="prev" @click.prevent="goPrev" v-show="showBtn ? true : pageNum > 1">&lt;</a>
                <a href="javascript: void(0);" @click.prevent="goPage(1)">1</a>
                <a href="javascript: void(0);">...</a>
                <a href="javascript: void(0);" v-for="i in (max - 1)" v-text="totalPage - max + i + 1" :class="totalPage - max + i + 1 === pageNum ? 'cur' : ''" @click.prevent="goPage(totalPage - max + i + 1)"></a>
                <a href="#" class="next" @click.prevent="goNext" v-show="showBtn ? true : pageNum < totalPage">&gt;</a>
            </div>
            <div v-else>
                <a href="#" class="prev" @click.prevent="goPrev" v-show="showBtn ? true : pageNum > 1">&lt;</a>
                <a href="javascript: void(0);" @click.prevent="goPage(1)">1</a>
                <a href="javascript: void(0);">...</a>
                <a href="javascript: void(0);" v-text="pageNum - 1" @click.prevent="goPage(pageNum - 1)"></a>
                <a href="javascript: void(0);" v-text="pageNum" class="cur" @click.prevent="goPage(pageNum)"></a>
                <a href="javascript: void(0);" v-text="pageNum + 1" @click.prevent="goPage(pageNum + 1)"></a>
                <a href="javascript: void(0);">...</a>
                <a href="javascript: void(0);" v-text="totalPage" @click.prevent="goPage(totalPage)"></a>
                <a href="#" class="next" @click.prevent="goNext" v-show="showBtn ? true : pageNum < totalPage">&gt;</a>
            </div>
        </div>
        <div v-else>
            <a href="#" class="prev" @click.prevent="goPrev" v-show="showBtn ? true : pageNum > 1">&lt;</a>
            <a href="javascript: void(0);" v-for="i in totalPage" v-text="i" :class="i === pageNum ? 'cur' : ''" @click.prevent="goPage(i)"></a>
            <a href="#" class="next" @click.prevent="goNext" v-show="showBtn ? true : pageNum < totalPage">&gt;</a>
        </div>
    </div>
</template>

<script>
    /**  totalPage > max
    * x > 5 && x < max - 5 => 1...234..max
    * x <= 5 => 123456...max
    * x >= max - 5 => 1...23456max
    * ======
    * totalPage <= max
    * 123max
    */
    export default {
        props: {
            totalPage: { // 总页数
                type: Number,
                default: 1
            },
            max: { // 显示的页数数字
                type: Number,
                default: 5
            },
            clickNum: { // 是否允许点击数字
                type: Boolean,
                default: false
            },
            showBtn: { // pageNum = 1或者totalPage时，是否隐藏两侧按钮
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                pageNum: 1 // 当前页数
            };
        },
        watch: {
            startPage (val) { // 默认显示的页数
                this.pageNum = val;
            }
        },
        methods: {
            goPrev () {
                if (this.pageNum > 1) {
                    this.pageNum -= 1;
                    this.$emit('fetchJSON', this.pageNum);
                }
            },
            goNext () {
                if (this.pageNum < this.totalPage) {
                    this.pageNum += 1;
                    this.$emit('fetchJSON', this.pageNum);
                }
            },
            goPage (n) {
                if (this.clickNum) {
                    this.pageNum = n;
                    this.$emit('fetchJSON', n);
                }
            }
        }
    }
</script>

<style scoped>

</style>