<template>
  <div class="fourteen wide column">
    <Breadcrumb/>
    <h2 class="ui header">新建项目</h2>

    <form class="ui form" v-on:submit.prevent="onSubmit">
      <div class="inline field required form-item">
        <label>项目名称</label>
        <input type="text"
               v-model="projectName"
               name="projectName"
               placeholder="2 - 20个字符"
               v-validate="'required|min:2|max:20'">
        <b>{{errors.first('projectName')}}</b>
      </div>
      <div class="inline field required form-item">
        <label>项目编码</label>
        <input type="text"
               v-model="projectCode"
               name="projectCode"
               placeholder="2 - 20个字母或数字"
               v-validate="'required|alpha_num|min:2|max:20'">
        <b>{{errors.first('projectCode')}}</b>
      </div>

      <button class="ui button primary" type="submit">保存</button>
    </form>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  export default {
    name: 'Create',
    components: {
      Breadcrumb
    },
    data () {
      return {
        projectName: null,
        projectCode: null
      }
    },
    methods: {
      onSubmit: function () {
        let vm = this
        this.$validator.validate().then(function (result) {
          if (result) {

            let uri = '/local/static/data/login.json';
            // 提交数据到api进行处理
            vm.axios.post(uri, {
                  projectName: vm.projectName,
                  projectCode: vm.projectCode
                })
                .then(function (res) {
                  console.log(22,res)
                  //vm.$router.push({path: '/project/list'})
                })
                .catch(function (err) {
                  vm.answer = 'Error! Could not reach the API. ' + err
                })
          }
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-item {
    position: relative;
  }

  .form-item b {
    position: absolute;
    float: right;
    color: #9f3a38;
    line-height: 36px;
    padding-left: 10px;
  }
</style>
