<template>
    <section class="update-block--wrapper">
        <h1 v-text="version" class="version"></h1>
        <time v-text="date" class="update-date"></time>
        <ul class="update-container">
            <li v-for="(info, index) in content" class="update-item" :key="index">
                <div class="item-content">
                    <p v-text="info.content" class="content custom"></p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    props: {
        date: {
            type: String
        },
        version: {
            type: String
        },
        content: {
            type: Array
        }
    }
}
</script>
<style lang="scss">
.update-block--wrapper {
    position: relative;
    width: 100%;
    padding-left: 20px;
    border-left: 1px solid #eee;
    .version {
        position: absolute;
        top: -5px;
        margin: 0;
        vertical-align: top;
        font-size: 20px;
        font-weight: normal;
    }
    &:before {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: -26px;
        vertical-align: top;
        border-radius: 100%;
        content: '';
        background: #fff;
        border: 2px solid #4193f9;
    }
     &:after {
        display: inline-block;
        width: 1;
        height: 5px;
        margin-left: -26px;
        vertical-align: top;
        content: '';
        background: #eee;
    }
    .update-date {
        position: absolute;
        top: 0;
        right: 5px;
        padding: 3px 5px;
        font-size: 12px;
        color: #666;
        background-color: #eee;
        border-radius: 4px;
    }
    .update-container {
        padding: 0;
        li.update-item {
            position: relative;
            line-height: 1;
            margin-top: 12px;
            color: #666;
            font-size: 14px;
            list-style: none;
            &:before {
                position: absolute;
                top: 10px;
                left: 0;
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 100%;
                content: '';
                vertical-align: middle;
                background-color: #888;
            }
            p.content {
                margin-left: 15px;
            }
        }
    }
}
</style>