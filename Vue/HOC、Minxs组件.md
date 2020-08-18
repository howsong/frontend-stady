# Mixins
> 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
- 列表常规逻辑
```vue
<template>
  <div v-if="error">列表请求失败 <span>重试</span></div>
  <div v-else-if="loading">数据加载中</div>
  <div v-else>{{result.name}}</div>
</template>
<script>
export default {
  data() {
    return {
        result: {
          name: '',
        },
        loading: false,
        error: false,
    },
  },
  async created() {
      try {
        // 管理loading
        this.loading = true
        // 取数据
        const data = await this.$axios('/api/user')  
        this.data = data
      } catch (e) {
        // 管理error
        this.error = true  
      } finally {
        // 管理loading
        this.loading = false
      }
  },
}
</script>
```
- 
# HOC(Higher-order component 高阶组价)
> 在 Vue 的世界里，组件是一个对象，所以高阶组件就是一个函数接受一个对象，返回一个新的包装好的对象
> 类比到 Vue 的世界里，高阶组件就是 f(object) -> 新的object