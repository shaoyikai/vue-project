<template>
    <div class="fourteen wide column">
        <p id="breadcrumb">
            <a href="/">首页</a>
            >
            新建项目
        </p>

        <div class="ui grid">
            <div class="five wide column">

                <form class="ui form">
                    <div class="field">
                        <label>Project Name</label>
                        <input type="text" name="project-name" placeholder="Project Name">
                    </div>
                    <div class="field">
                        <label>Project Code</label>
                        <input type="text" name="project-code" placeholder="Project Code">
                    </div>

                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Create',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #breadcrumb {
        text-align: left;
    }
    label{
        text-align:left;
    }
    form{
        text-align:left;
    }
</style>
