<template>
    <div class="fourteen wide column">
        <Breadcrumb />
        <h2 class="ui header">新建项目</h2>

        <form class="ui form" v-on:submit.prevent="onSubmit">
            <div class="inline field">
                <label>项目名称</label>
                <input type="text" v-model="projectName" placeholder="2 - 20个字符">
            </div>
            <div class="inline field">
                <label>项目编码</label>
                <input type="text" v-model="projectCode" placeholder="项目标识符">
            </div>

            <button class="ui button primary" type="submit">保存</button>
        </form>
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
        projectName: '',
        projectCode: ''
      }
    },
      methods:{
          onSubmit:function(){
              alert(this.projectName)
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
