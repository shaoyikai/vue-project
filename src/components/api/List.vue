<template>
    <div class="fourteen wide column" id="api-box">

        <Breadcrumb/>

        <div class="ui grid">
            <LeftMenu/>
            <div class="three wide column"></div>
            <div class="eleven wide column">
                <h1 class="ui header">ProjectA接口</h1>


                    <router-link to="/api/create?code=projectA">
                        <button class="create-btn ui button small primary">添加 </button>
                    </router-link>


                <div v-for="item in [1,2]">
                    <h3 class="ui header blue">
                        Name
                    </h3>
                    <p class="action-box" v-if="1">
                        [
                        <router-link to="">编辑</router-link> |
                        <router-link to="">删除</router-link>
                        ]
                    </p>
                    <table class="ui table celled">
                        <tr>
                            <td class="right aligned">Method</td>
                            <td>get</td>
                        </tr>
                        <tr>
                            <td class="right aligned">Params</td>
                            <td>
                                <table class="ui table unstackable " v-if="1">
                                    <thead>
                                    <tr>
                                        <th class="ui header green">name</th>
                                        <th class="ui header green">type</th>
                                        <th class="ui header green">length</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>11111</td>
                                        <td>11111</td>
                                        <td>11111</td>
                                    </tr>
                                    <tr>
                                        <td>11111</td>
                                        <td>11111</td>
                                        <td>11111</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <span v-else>无</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="right aligned">Description</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td class="right aligned">Example</td>
                            <td><pre>
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
                        </pre>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  import LeftMenu from '../../components/widget/LeftMenu.vue'
  export default {
    name: 'List',
    data () {
      return {
        msg: ''
      }
    },
    components:{
      Breadcrumb,
      LeftMenu
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #api-box {
        text-align: left;
    }

    #api-box h1 {
        text-align: center;
    }

    #api-box h3 {
        margin-top: 20px;
        text-align: left;
        float: left;
    }

    p.action-box {
        margin-top: 20px;
        float: right;
    }

    .table tr th {
        width: 80px;
    }

    button.create-btn {
        position:fixed;
        right: 50px;
        top: 162px;
    }
    button.create-btn a{
        color:rgba(255,255,255,.9);
    }
</style>
