import DefaultTheme from 'vitepress/theme'
import './custom.css'
import VisitorCounter from './components/VisitorCounter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册 VisitorCounter 组件
    app.component('VisitorCounter', VisitorCounter)
  }
}