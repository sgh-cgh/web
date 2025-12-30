<template>
  <div class="home">
    <!-- 主海报区域 -->
    <div class="poster-container">
      <img src="../assets/images/炭治郎1.png" alt="鬼灭之刃主海报" class="poster">
      <div class="poster-overlay">
        <h2 class="poster-title">鬼灭之刃</h2>
        <p class="poster-subtitle">当绝望笼罩，火焰将照亮希望之路</p>
      </div>
    </div>

    <!-- 故事简介区域 -->
    <div class="info">
      <h2 class="subtitle">故事简介</h2>
      <p class="description">
        时值日本大正时代，灶门炭治郎原本是个善良的卖炭少年，但家人被鬼杀害后，他的日常生活发生了翻天覆地的变化。炭治郎家人中唯一的幸存者是他的妹妹灶门祢豆子，但祢豆子已变成了凶暴的鬼。为了让祢豆子恢复原状，并杀掉害死家人的鬼，炭治郎和祢豆子踏上了旅程
      </p>
    </div>

    <!-- 核心标签区域 -->
    <div class="tags-section">
      <h2 class="subtitle">核心标签</h2>
      <div class="tags">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <!-- 主要角色展示 -->
    <div class="characters-section">
      <h2 class="subtitle">主要角色</h2>
      <div class="characters-grid">
        <div 
          v-for="character in mainCharacters" 
          :key="character.id"
          class="character-card"
          @click="$router.push('/characters')"
        >
          <div class="character-avatar-container">
            <img :src="character.avatar" :alt="character.name" class="character-avatar">
          </div>
          <div class="character-info">
            <h3 class="character-name">{{ character.name }}</h3>
            <p class="character-identity">{{ character.identity }}</p>
          </div>
        </div>
      </div>
      <router-link to="/characters" class="more-characters-btn">查看更多角色 →</router-link>
    </div>

    <!-- 精彩瞬间 -->
    <div class="highlights-section">
      <h2 class="subtitle">精彩瞬间</h2>
      <div class="highlights-slider">
        <div 
          v-for="highlight in highlights" 
          :key="highlight.id"
          class="highlight-item"
        >
          <img :src="highlight.image" :alt="highlight.title" class="highlight-image">
          <div class="highlight-content">
            <h3 class="highlight-title">{{ highlight.title }}</h3>
            <p class="highlight-description">{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 快速导航 -->
    <div class="quick-nav">
      <h2 class="subtitle">快速导航</h2>
      <div class="nav-cards">
        <router-link to="/characters" class="nav-card characters-card">
          <div class="nav-card-content">
            <h3>角色介绍</h3>
            <p>了解鬼杀队与鬼的世界</p>
          </div>
        </router-link>
        <router-link to="/plot" class="nav-card plot-card">
          <div class="nav-card-content">
            <h3>剧情篇章</h3>
            <p>跟随炭治郎的冒险旅程</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tags: ['热血', '冒险', '奇幻', '大正时代', 'ufotable', '9.2分'],
      mainCharacters: [
        {
          id: 1,
          name: '灶门炭治郎',
          identity: '鬼杀队队员',
          avatar: new URL('../assets/images/炭治郎2.webp', import.meta.url).href
        },
        {
          id: 2,
          name: '灶门祢豆子',
          identity: '鬼/炭治郎的妹妹',
          avatar: new URL('../assets/images/倪豆子1.jpeg', import.meta.url).href
        },
        {
          id: 3,
          name: '我妻善逸',
          identity: '鬼杀队队员',
          avatar: new URL('../assets/images/伊之助.webp', import.meta.url).href
        },
        {
          id: 4,
          name: '富冈义勇',
          identity: '水柱/鬼杀队队员',
          avatar: new URL('../assets/images/富冈义勇.jpg', import.meta.url).href
        }
      ],
      highlights: [
        {
          id: 1,
          title: '灶门炭治郎立志',
          description: '为了妹妹祢豆子，炭治郎踏上了成为鬼杀队的道路',
          image: new URL('../assets/images/海报1.webp', import.meta.url).href
        },
        {
          id: 2,
          title: '无限列车之战',
          description: '炎柱炼狱杏寿郎与上弦之叁猗窝座的壮烈战斗',
          image: new URL('../assets/images/无限列车篇.jpg', import.meta.url).href
        },
        {
          id: 3,
          title: '游郭篇',
          description: '与上弦之陆堕姬和妓夫太郎的激烈对决',
          image: new URL('../assets/images/游锅篇.jpg', import.meta.url).href
        }
      ]
    }
  }
}
</script>