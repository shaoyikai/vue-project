<template>

    <header class="ui inverted menu">

        <a class="item" href="/">
            <img src="../../assets/logo.png" height="30"/> LOGO
        </a>
        <a class="item active" href="/snmp/list">
            SNMP
        </a>
        <a class="item" href="/http/list">
            HTTP
        </a>
        <div class="right menu">
            <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="搜索">
                    <i class="search link icon"></i>
                </div>
            </div>
            <a class="ui item">
                退出
            </a>
        </div>
    </header>

</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
