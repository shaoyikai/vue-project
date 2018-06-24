<template>
    <div class="fourteen wide column">
        <Breadcrumb />
        <h2 class="ui header">新建项目</h2>

        <div class="ui form">
            <div class="inline field">
                <label>项目名称</label>
                <input type="text" name="project-name" placeholder="2 - 20个字符">
            </div>
            <div class="inline field">
                <label>项目编码</label>
                <input type="text" name="project-code" placeholder="项目标识符">
            </div>

            <button class="ui button primary" type="submit">保存</button>
        </div>
    </div>
</template>

<script>
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  export default {
    name: 'Create',
    components:{
      Breadcrumb
    },
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
