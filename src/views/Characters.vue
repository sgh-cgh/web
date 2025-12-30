<template>
  <div class="characters">
    <!-- 页面标题 -->
    <h2 class="page-title">角色列表</h2>

    <!-- 分类筛选按钮 -->
    <div class="category-filter">
      <button 
        v-for="category in categories" 
        :key="category.value"
        class="filter-btn"
        :class="{ active: selectedCategory === category.value }"
        @click="selectedCategory = category.value"
      >
        {{ category.label }}
      </button>
    </div>

    <!-- 角色列表 -->
    <div class="character-list">
      <div 
        v-for="character in filteredCharacters" 
        :key="character.id"
        class="character-card"
        @click="showCharacterDetail(character)"
      >
        <img 
          :src="character.avatar" 
          :alt="character.name" 
          class="character-avatar"
        >
        <div class="character-info">
          <h3 class="character-name">{{ character.name }}</h3>
          <p class="character-identity">{{ character.identity }}</p>
        </div>
      </div>
    </div>

    <!-- 角色详细介绍弹窗 -->
    <div class="modal" v-if="selectedCharacter" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeModal">&times;</span>
        <div class="character-detail">
          <img 
            :src="selectedCharacter.avatar" 
            :alt="selectedCharacter.name" 
            class="detail-avatar"
          >
          <div class="detail-info">
            <h2 class="detail-name">{{ selectedCharacter.name }}</h2>
            <p class="detail-identity">{{ selectedCharacter.identity }}</p>
            <div class="detail-description">
              <h3>详细介绍</h3>
              <p>{{ getCharacterDescription(selectedCharacter.id) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'Characters',

  // 响应式数据
  data() {
    return {
      // 选中的分类
      selectedCategory: 'all',
      // 选中的角色（弹窗用）
      selectedCharacter: null,
      // 分类选项
      categories: [
        { label: '全部', value: 'all' },
        { label: '主角团', value: 'main' },
        { label: '柱', value: 'pillar' },
        { label: '鬼', value: 'villain' }
      ],
      // 角色数据（修正语法错误+补全字段）
      characters: [
        // 主角团
        { 
          id: 1, 
          name: '灶门炭治郎', 
          identity: '鬼杀队队员', 
          category: 'main', 
          avatar: new URL('../assets/images/炭治郎2.webp', import.meta.url).href 
        },
        { 
          id: 2, 
          name: '灶门祢豆子', 
          identity: '鬼（已克服阳光）', 
          category: 'main', 
          avatar: new URL('../assets/images/倪豆子.webp', import.meta.url).href 
        },
        { 
          id: 3, 
          name: '我妻善逸', 
          identity: '鬼杀队队员', 
          category: 'main', 
          avatar: new URL('../assets/images/上衣.webp', import.meta.url).href 
        },
        { 
          id: 4, 
          name: '嘴平伊之助', 
          identity: '鬼杀队队员', 
          category: 'main', 
          avatar: new URL('../assets/images/伊之助.webp', import.meta.url).href 
        },
        { 
          id: 5, 
          name: '栗花落香奈乎', 
          identity: '鬼杀队队员', 
          category: 'main', 
          avatar: new URL('../assets/images/香奈乎1.webp', import.meta.url).href 
        },
        { 
          id: 6, 
          name: '不死川玄弥', 
          identity: '鬼杀队队员', 
          category: 'main', 
          avatar: new URL('../assets/images/玄1.webp', import.meta.url).href 
        },
        { 
          id: 7, 
          name: '甘露寺蜜璃', 
          identity: '恋柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/蜜梨.jpg', import.meta.url).href 
        },
        { 
          id: 8, 
          name: '不死川实弥', 
          identity: '风柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/风柱.jpg', import.meta.url).href 
        },
        // 柱
        { 
          id: 9, 
          name: '富冈义勇', 
          identity: '水柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/富冈义勇.jpg', import.meta.url).href 
        },
        { 
          id: 10, 
          name: '蝴蝶忍', 
          identity: '虫柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/蝴蝶忍.jpg', import.meta.url).href 
        },
        { 
          id: 11, 
          name: '炎柱·炼狱杏寿郎', 
          identity: '炎柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/炼狱.jpg', import.meta.url).href 
        },
        { 
          id: 12, 
          name: '时透无一郎', 
          identity: '霞柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/无一郎.jpg', import.meta.url).href 
        },
        { 
          id: 13, 
          name: '音柱·宇髄天元', 
          identity: '音柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/音柱.jpg', import.meta.url).href 
        },
        { 
          id: 14, 
          name: '岩柱·悲鸣屿行冥', 
          identity: '岩柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/岩住.jpg', import.meta.url).href 
        },
        { 
          id: 15, 
          name: '蛇柱·伊黑小芭内', 
          identity: '蛇柱', 
          category: 'pillar', 
          avatar: new URL('../assets/images/蛇.webp', import.meta.url).href 
        },
        // 鬼
        { 
          id: 16, 
          name: '鬼舞辻无惨', 
          identity: '鬼之始祖', 
          category: 'villain', 
          avatar: new URL('../assets/images/午餐.webp', import.meta.url).href  
        },
        { 
          id: 17, 
          name: '黑死牟', 
          identity: '上弦之壹', 
          category: 'villain', 
          avatar: new URL('../assets/images/1.png', import.meta.url).href  
        },
        { 
          id: 18, 
          name: '童磨', 
          identity: '上弦之贰', 
          category: 'villain', 
          avatar: new URL('../assets/images/2.webp', import.meta.url).href 
        },
        { 
          id: 19, 
          name: '猗窝座', 
          identity: '上弦之叁', 
          category: 'villain', 
          avatar: new URL('../assets/images/3.webp', import.meta.url).href 
        },
        { 
          id: 20, 
          name: '半天狗', 
          identity: '上弦之肆', 
          category: 'villain', 
          avatar: new URL('../assets/images/4.webp', import.meta.url).href 
        },
        { 
          id: 21, 
          name: '鸣女', 
          identity: '上弦之肆', 
          category: 'villain', 
          avatar: new URL('../assets/images/5.webp', import.meta.url).href 
        },
        { 
          id: 22, 
          name: '玉壶', 
          identity: '上弦之伍', 
          category: 'villain', 
          avatar: new URL('../assets/images/6.webp', import.meta.url).href 
        },
        { 
          id: 23, 
          name: '妓夫太郎', 
          identity: '上弦之陆', 
          category: 'villain', 
          avatar: new URL('../assets/images/7.webp', import.meta.url).href 
        },
        { 
          id: 24, 
          name: '堕姬', 
          identity: '上弦之陆', 
          category: 'villain', 
          avatar: new URL('../assets/images/8.webp', import.meta.url).href 
        },
        { 
          id: 25, 
          name: '狯岳', 
          identity: '下弦之壹', 
          category: 'villain', 
          avatar: new URL('../assets/images/9.webp', import.meta.url).href 
        },
        { 
          id: 26, 
          name: '魇梦', 
          identity: '下弦之壹', 
          category: 'villain', 
          avatar: new URL('../assets/images/10.webp', import.meta.url).href 
        }
      ]
    }
  },

  // 方法
  methods: {
    /**
     * 展示角色详情弹窗
     * @param {Object} character - 选中的角色对象
     */
    showCharacterDetail(character) {
      this.selectedCharacter = character
    },

    /**
     * 关闭角色详情弹窗
     */
    closeModal() {
      this.selectedCharacter = null
    },

    /**
     * 获取角色详细介绍
     * @param {Number} characterId - 角色ID
     * @returns {String} 角色介绍文本
     */
    getCharacterDescription(characterId) {
      const descriptions = {
        1: '灶门炭治郎是鬼灭之刃的主人公，灶门家的长子。为了让变成鬼的妹妹祢豆子变回人类，加入鬼杀队。性格温柔善良，嗅觉敏锐，使用水之呼吸和火之神神乐。',
        2: '灶门祢豆子是炭治郎的妹妹，因鬼舞辻无惨的血而变成鬼。但通过自身努力克服了吃人的欲望，能够在阳光下活动，是鬼杀队的重要战力。',
        3: '我妻善逸是炭治郎的同伴，鬼杀队队员。平时胆小懦弱，一旦睡着就会觉醒雷之呼吸的力量，擅长雷之呼吸·一之型。',
        4: '嘴平伊之助是炭治郎的同伴，鬼杀队队员。从小在山林长大，性格暴躁，使用自创的兽之呼吸，头戴野猪头套。',
        5: '栗花落香奈乎是鬼杀队队员，蝴蝶忍的义妹。性格沉默寡言，使用花之呼吸，擅长远距离攻击。',
        6: '不死川玄弥是鬼杀队队员，风柱·不死川实弥的弟弟。能够通过吃掉鬼的血肉获得鬼的能力，使用血鬼术。',
        7: '甘露寺蜜璃是鬼杀队的恋柱，性格开朗活泼，拥有超强的怪力，使用恋之呼吸。',
        8: '不死川实弥是鬼杀队的风柱，性格暴躁，但内心温柔，非常关心弟弟玄弥。使用风之呼吸。',
        9: '富冈义勇是鬼杀队的水柱，炭治郎的师兄。性格沉默寡言，但内心温柔，认同祢豆子的特殊性并帮助炭治郎加入鬼杀队。',
        10: '蝴蝶忍是鬼杀队的虫柱，蝴蝶香奈惠的妹妹。外表温柔，但内心坚定，擅长使用毒和虫之呼吸。',
        11: '炼狱杏寿郎是鬼杀队的炎柱，性格热情开朗，充满正义感。在无限列车篇中与上弦之叁猗窝座战斗，最终壮烈牺牲。',
        12: '时透无一郎是鬼杀队的霞柱，拥有通透世界的能力。虽然年纪轻轻，但实力强大，使用霞之呼吸。',
        13: '宇髄天元是鬼杀队的音柱，原是忍者，擅长使用音之呼吸。性格豪放，喜欢华丽的事物。',
        14: '悲鸣屿行冥是鬼杀队的岩柱，是柱中实力最强的。性格沉稳，使用岩之呼吸。',
        15: '伊黑小芭内是鬼杀队的蛇柱，与甘露寺蜜璃关系密切。使用蛇之呼吸，性格冷静。',
        16: '鬼舞辻无惨是鬼的始祖，鬼杀队的最终敌人。性格残忍无情，为了寻找克服阳光的方法而不断残杀人类。',
        17: '黑死牟是上弦之壹，原是鬼杀队的剑士，使用月之呼吸。性格高傲，实力强大。',
        18: '童磨是上弦之贰，是万世极乐教的教主，使用冰之呼吸。外表温和，内心冷酷无情。',
        19: '猗窝座是上弦之叁，原是人类格斗家，使用破坏杀拳法。追求强大的力量，对弱者毫无怜悯。',
        20: '半天狗是上弦之肆，性格怯懦，使用分裂之血鬼术。可以分裂出多个具有不同性格的分身。',
        21: '鸣女是上弦之肆，鬼舞辻无惨的亲信，使用空间血鬼术。负责管理无限城。',
        22: '玉壶是上弦之伍，喜欢制作艺术作品，使用水之血鬼术。性格扭曲，残忍嗜杀。',
        23: '妓夫太郎是上弦之陆，堕姬的哥哥，使用血鬼术。性格暴躁，非常保护妹妹。',
        24: '堕姬是上弦之陆，妓夫太郎的妹妹，使用血鬼术。性格高傲，喜欢美丽的事物。',
        25: '狯岳是下弦之壹，我妻善逸的师兄，使用雷之呼吸。背叛了鬼杀队，成为了鬼。',
        26: '魇梦是下弦之壹，能够操控梦境，使用梦之血鬼术。在无限列车篇中被炭治郎击败。'
      }
      return descriptions[characterId] || '暂无详细介绍'
    }
  },

  // 计算属性：筛选角色
  computed: {
    filteredCharacters() {
      // 全部分类返回所有角色
      if (this.selectedCategory === 'all') {
        return this.characters
      }
      // 按选中分类筛选
      return this.characters.filter(character => character.category === this.selectedCategory)
    }
  }
}
</script>

<style scoped>
/* 基础布局 */
.characters {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 页面标题 */
.page-title {
  color: #e53935;
  margin-bottom: 20px;
  font-size: 24px;
}

/* 分类筛选按钮 */
.category-filter {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e53935;
  border-radius: 4px;
  background: #fff;
  color: #e53935;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active {
  background: #e53935;
  color: #fff;
}

/* 角色列表 */
.character-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* 角色卡片 */
.character-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  cursor: pointer;
}

.character-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.character-avatar {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: #f5f5f5;
}

.character-info {
  padding: 10px;
}

.character-name {
  font-size: 18px;
  margin-bottom: 5px;
  color: #212121;
}

.character-identity {
  font-size: 14px;
  color: #666;
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative; /* 修复关闭按钮定位 */
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #e53935;
}

/* 角色详情 */
.character-detail {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.detail-avatar {
  width: 300px;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.detail-info {
  flex: 1;
}

.detail-name {
  font-size: 28px;
  color: #e53935;
  margin-bottom: 10px;
}

.detail-identity {
  font-size: 18px;
  color: #212121;
  margin-bottom: 20px;
}

.detail-description {
  margin-top: 20px;
}

.detail-description h3 {
  font-size: 20px;
  color: #212121;
  margin-bottom: 10px;
}

.detail-description p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .character-detail {
    flex-direction: column;
    align-items: center;
  }
  
  .detail-avatar {
    width: 200px;
    height: 250px;
  }
}
</style>