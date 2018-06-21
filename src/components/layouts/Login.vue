<template>

    <div>
        <img src="../../assets/logo.png">

        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui teal image header">
                    <!--<img src="assets/images/logo.png" class="image">-->
                    <div class="content">
                        登录系统
                    </div>
                </h2>
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="email" placeholder="输入邮箱">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="输入密码">
                            </div>
                        </div>
                        <div class="ui fluid large teal submit button">登录</div>
                    </div>

                    <div class="ui error message"></div>

                </form>

                <div class="ui message">
                    新用户？ <a href="#">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Login',
        data () {
            return {
                'username': 'test',
                'password': 'test'
            }
        }
    }
</script>

<style scoped>
    body {
        background-color: #DADADA;
    }

    body > .grid {
        height: 100%;
    }

    .image {
        margin-top: -100px;
    }

    .column {
        max-width: 450px;
    }
</style>
