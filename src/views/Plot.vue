<template>
  <div class="plot">
    <h2 class="page-title">剧情篇章</h2>
    <div class="plot-list">
      <div 
        v-for="arc in arcs" 
        :key="arc.id"
        class="plot-item"
      >
        <div class="plot-header" @click="toggleArc(arc.id)">
          <h3 class="arc-title">{{ arc.title }}</h3>
          <span class="toggle-icon">{{ arc.expanded ? '▼' : '▶' }}</span>
        </div>
        <div class="plot-content" v-if="arc.expanded">
          <p class="arc-description">{{ arc.description }}</p>
          <div class="arc-image-container">
            <img :src="arc.avatar" :alt="arc.title" class="arc-image">
          </div>
          <div class="key-characters">
            <h4 class="key-characters-title">关键角色</h4>
            <div class="character-tags">
              <span 
                v-for="character in arc.keyCharacters" 
                :key="character"
                class="character-tag"
              >
                {{ character }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plot',
  data() {
    return {
      arcs: [
        {
          id: 1,
          title: '灶门炭治郎立志篇',
          description: '炭治郎的家人被鬼杀害，妹妹祢豆子变成鬼。为了让妹妹变回人类，炭治郎决定成为鬼杀队队员，踏上了消灭鬼的道路。',
          keyCharacters: ['灶门炭治郎', '灶门祢豆子', '富冈义勇'],
          avatar: new URL('../assets/images/海报1.webp', import.meta.url).href,
          expanded: false
        },
        {
          id: 2,
          title: '那田蜘蛛山篇',
          description: '炭治郎一行人前往那田蜘蛛山执行任务，遇到了强大的鬼家族。在这里，炭治郎第一次展现了他的火之神神乐。',
          keyCharacters: ['灶门炭治郎', '我妻善逸', '嘴平伊之助', '富冈义勇'],
          avatar: new URL('../assets/images/那田蜘蛛山篇.jpg', import.meta.url).href,
          expanded: false
        },
        {
          id: 3,
          title: '无限列车篇',
          description: '炭治郎与炎柱·炼狱杏寿郎一同登上无限列车，调查失踪事件。他们遭遇了上弦之叁·猗窝座，展开了激烈的战斗。',
          keyCharacters: ['灶门炭治郎', '炼狱杏寿郎', '猗窝座'],
          avatar: new URL('../assets/images/无限列车篇.jpg', import.meta.url).href,
          expanded: false
        },
        {
          id: 4,
          title: '游郭篇',
          description: '炭治郎一行人潜入游郭，调查失踪的队士。在这里，他们遇到了上弦之陆·堕姬和妓夫太郎，展开了生死之战。',
          keyCharacters: ['灶门炭治郎', '我妻善逸', '嘴平伊之助', '宇髄天元'],
          avatar: new URL('../assets/images/游锅篇.jpg', import.meta.url).href,
          expanded: false
        },
        {
          id: 5,
          title: '锻刀村篇',
          description: '炭治郎前往锻刀村修复日轮刀，同时保护锻刀师们免受鬼的袭击。在这里，他获得了新的刀和更强大的力量。',
          keyCharacters: ['灶门炭治郎', '灶门祢豆子', '时透无一郎', '甘露寺蜜璃'],
          avatar: new URL('../assets/images/刀匠村篇.jpg', import.meta.url).href,
          expanded: false
        }
      ]
    }
  },
  methods: {
    toggleArc(id) {
      const arc = this.arcs.find(arc => arc.id === id)
      if (arc) {
        arc.expanded = !arc.expanded
      }
    }
  }
}
</script>