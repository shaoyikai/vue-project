<template>
    <div class="twelve wide column" id="api-box">
        <Breadcrumb />
        <h2 class="ui header">新建接口</h2>
        <table class="ui celled table form">
            <tbody>
            <tr>
                <td class="two wide column right aligned"><h4 class="ui header">名称</h4></td>
                <td>
                    <input type="text" name="api-name" placeholder="2 - 20个字符" class="father-input">
                </td>
            </tr>
            <tr>
                <td class="right aligned"><h4 class="ui header">传参方式</h4></td>
                <td>
                    <select name="" id="" class="father-select">
                        <option value="1">GET</option>
                        <option value="2">POST</option>
                        <option value="3">GET & POST</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="right aligned"><h4 class="ui header">地址</h4></td>
                <td>
                    <input type="text" placeholder="输入相对于根目录的path地址，如 /user/login" class="father-input">
                </td>
            </tr>
            <tr>
                <td class="right aligned"><h4 class="ui header">描述</h4></td>
                <td>
                    <input type="text" placeholder="简短描述">
                </td>
            </tr>
            <tr>
                <td class="right aligned"><h4 class="ui header">参数</h4></td>
                <td>
                    <table class="ui table unstackable" id="table-wrap">
                        <thead>
                        <tr>
                            <th><h5 class="ui header">名称</h5></th>
                            <th><h5 class="ui header">类型</h5></th>
                            <th><h5 class="ui header">长度</h5></th>
                            <th><h5 class="ui header">说明</h5></th>
                            <th><h5 class="ui header yellow">操作</h5></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3433</td>
                            <td>3433</td>
                            <td>3433</td>
                            <td>3433</td>
                            <td>
                                <button class="ui small button primary"> - </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <select name="">
                                    <option value="a">Integer</option>
                                    <option value="b">String</option>
                                    <option value="c">Object</option>
                                </select>
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <button class="ui small button primary"> + </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="right aligned"><h4 class="ui header">返回值</h4></td>
                <td>
                    <textarea name="" cols="30" rows="10" placeholder="json example">

                    </textarea>
                </td>
            </tr>
            <tr>
                <td class="center aligned" colspan="2">
                    <button class="ui button" type="submit">保存</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  export default {
    name: 'Create',
    data () {
      return {}
    },
    components:{
      Breadcrumb
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form input.father-input {
        width: 600px;
    }

    select.father-select {
        width: 300px;
    }
</style>
