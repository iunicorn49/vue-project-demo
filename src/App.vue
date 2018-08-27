<template>
  <div id="app">
    <nav-bar class="nav-bar"></nav-bar>
      <div class="content">
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
  </div>
</template>

<script>
import NavBar from '@/common/NavBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
.nav-bar
  position fixed
  top 0
  left 0
  z-index 20

.content
  margin-top 60px
</style>
