<template>
  <div class="app">
    <header class="header">
      <h1 class="title">鬼灭之刃</h1>
      <nav class="nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/characters" class="nav-link">角色</router-link>
        <router-link to="/plot" class="nav-link">剧情</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <p>©  鬼灭之刃核心信息展示</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>