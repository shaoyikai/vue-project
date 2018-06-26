<template>

  <div class="fourteen wide column">
    <Breadcrumb/>
    <h2 class="ui header">项目列表</h2>
    <table class="ui celled padded table" id="table1">
      <thead>
      <tr>
        <th class="single line">项目代号</th>
        <th>名称</th>
        <th>描述</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in projects">
        <td>
          {{item.code}}
        </td>
        <td class="single line">
          {{item.name}}
        </td>
        <td>
          {{item.description}}
        </td>
        <td class="right aligned">
          <a href="#">删除</a>
          <br>
          <router-link :to="'/api/list?code=' + item.code">接口列表</router-link>
        </td>

      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th colspan="4">
          <div class="ui right floated pagination menu">
            <a class="icon item">
              <i class="left chevron icon"></i>
            </a>
            <a class="item">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
            <a class="item">4</a>
            <a class="icon item">
              <i class="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  export default {
    name: 'List',
    data () {
      return {
        projects: [
          {name: '项目A', code: 'projectA', description: '这是第一个测试项目'},
          {name: '项目B', code: 'projectB', description: '这是第二个测试项目'},
          {name: '项目C', code: 'projectC', description: '这是第三个测试项目'},
        ],
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
