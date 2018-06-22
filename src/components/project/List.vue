<template>

    <div class="fourteen wide column">
        <p id="breadcrumb">
            <a href="/">首页</a>
            >
            工程管理
        </p>

        <table class="ui celled padded table" id="table1">
            <thead>
            <tr>
                <th class="single line">项目代号</th>
                <th>名称</th>
                <th>操作</th>
                <th>描述</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <h2 class="ui center aligned header">A</h2>
                </td>
                <td class="single line">
                    Power Output
                </td>

                <td class="right aligned">
                    80% <br>
                    <a href="#">18 studies</a>
                </td>
                <td>
                    Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="ui center aligned header">A</h2>
                </td>
                <td class="single line">
                    Weight
                </td>
                <td class="right aligned">
                    100% <br>
                    <a href="#">65 studies</a>
                </td>
                <td>
                    Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        msg: '',
      }
    },
    mounted(){
      // this.$parent.showLeftMenu = 0
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #breadcrumb {
        text-align: left;
    }

    #table1{
        width:100%;
    }
</style>
