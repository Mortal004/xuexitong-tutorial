import DefaultTheme from 'vitepress/theme'
import './custom.css'

import VisitorCounter from './components/VisitorCounter.vue'
import HomeHero from './components/HomeHero.vue'
import PageHero from './components/PageHero.vue'
import FeatureCard from './components/FeatureCard.vue'
import DownloadGrid from './components/DownloadGrid.vue'
import DownloadButton from './components/DownloadButton.vue'
import SupportCard from './components/SupportCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册自定义组件，Markdown 中可直接使用
    app.component('VisitorCounter', VisitorCounter)
    app.component('HomeHero', HomeHero)
    app.component('PageHero', PageHero)
    app.component('FeatureCard', FeatureCard)
    app.component('DownloadGrid', DownloadGrid)
    app.component('DownloadButton', DownloadButton)
    app.component('SupportCard', SupportCard)
  }
}
