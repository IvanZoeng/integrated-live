<template>
    <div class='wrapper'>
        <div class='main'>
            <div class='website'>
                直播平台tag
            </div>
            <div class='lives'>
                <live v-for='(item, index) of currLives' :key="index" :liveInfo='item'></live>    
            </div>
        </div>
        <div class='sidebar'>
            <div v-for='key of categoryKey' :key='key' @click='getCategory(key)'>
                {{categoryMap[key]}}
            </div>
        </div>
    </div>
</template>

<script>
import {getAllCategories, getCategory} from '@/util/api'
import Live from '../components/Live'

export default {

    components: {
        'live': Live
    },
    data() {
        return {
            categoryMap: {},
            currLives: []
        }
    },
    computed: {
        categoryKey() {
            return Object.keys(this.categoryMap);
        }
    },

    methods: {
        async getCategory(category){
            this.currLives = await getCategory(category);
            console.log(this.currLives)
        }
    },

    async mounted() {
        this.categoryMap = await getAllCategories();
    }

}
</script>

<style scoped>
.wrapper {
    display: flex;
    height: 800px;
}

.main {
    flex: 5;
    order: 10;
}

.sidebar {
    min-width: 220px;
    flex: 1;
    order: 0;
    background-color: brown
}

.website {
    height: 80px;
    background-color: azure
}

.lives {
    background-color: blueviolet;
    height: 720px;
    widows: 100%;
    display: flex;
    flex-flow: wrap;
}

</style>
