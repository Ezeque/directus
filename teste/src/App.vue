<template>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button{
        border-radius: 50%;
        width:44px;
        height: 44px;
        margin-right: 16px;
        border:none;
        background-color: #e3eaf1;
        transition: all ease 125ms;
    }

.button:hover{
  background-color: #f0f4f9;
}
</style>
