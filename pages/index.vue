<template>
  <div>
    <home-page />
    <skills-page id="skills" />
    <portfolio-page id="portfolio" />
  </div>
</template>

<script>
import homePage from '../components/homePage.vue'
import SkillsPage from '../components/skillsPage.vue'
import PortfolioPage from '../components/portfolioPage.vue'

export default {
  name: 'IndexPage',
  components: {
    homePage,
    SkillsPage,
    PortfolioPage,
  },
  mounted() {
    if (this.$route.hash) {
      const hash = this.$route.hash
      this.$router.push({ hash: `${hash}` })
    }

    let language = 'en'

    if (localStorage.lang) {
      language = localStorage.getItem('lang')
    }

    if (this.$i18n.locale !== language) {
      this.$i18n.locale = language
    }
  }
}
</script>
