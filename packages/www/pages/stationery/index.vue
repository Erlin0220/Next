<template>
  <div class="xt-content xt-stationery">
    <a-tabs :activeKey="activeKey" @change="tabsChange" class="xt-tabs-center">
      <a-tab-pane v-for="tab in PageStore.typelist" :key="String(tab.typeId)">
        <span slot="tab">
          <span v-text="tab.typeName"></span>
        </span>
      </a-tab-pane>
    </a-tabs>
    <a-spin :spinning="Pagination.loading">
      <a-row :gutter="16" v-viewer>
        <a-col v-for="item in Pagination.dataSource" :key="item.commodityId" :span="6">
          <!-- <nuxt-link :to="`/stationery/${item.commodityId}`"> -->
          <a-card class="xt-stationery-card" :bordered="false">
            <img class="xt-stationery-img" v-lazy="item.commodityCoverUrl" />
          </a-card>
          <!-- </nuxt-link> -->
        </a-col>
      </a-row>
    </a-spin>
    <xt-pagination :Pagination="Pagination" :toQuery="true" @change="onCurrentChange" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Context } from "@nuxt/types";
import { Observer } from "mobx-vue";
import lodash from "lodash";
@Observer
@Component({
  // 每次进入页面都会调用
  async fetch(ctx: Context) {
    await ctx.store.$storeStationery.onGetTypelist();
  },
  components: {},
})
export default class PageView extends Vue {
  get PageStore() {
    return this.$store.$storeStationery;
  }
  get Pagination() {
    return this.$store.$storeStationery.Pagination;
  }
  activeKey = lodash.get(this.$route.query, "active", "-1");
  tabsChange(activeKey) {
    this.$router.push({
      query: lodash.merge({}, this.$route.query, {
        active: activeKey,
        current: "1",
      }),
    });
  }
  /**
   *  初始化 和 页码 更改调用
   */
  onCurrentChange(current) {
    this.Pagination.onCurrentChange(current, {
      typeId: this.activeKey,
      commodityName: "",
    });
  }
  // 组件中 使用不了 生命周期 beforeRouteUpdate
  @Watch("$route.query.active")
  queryUpdate(to, from, next) {
    const { active, current } = this.$route.query;
    if (active && !lodash.eq(active, this.activeKey)) {
      this.activeKey = active as any;
      this.onCurrentChange(1);
    }
    // next();
  }
  mounted() {}
  updated() {}
  destroyed() {}
}
</script>
<style lang="less" >
.xt-stationery {
  &-card {
    .ant-card-body {
      padding: 20px 0;
    }
  }
  &-img {
    width: 230px;
    height: 230px;
    display: block;
    margin: auto;
  }
}
</style>
<i18n>
{
  "en": {
    "all": "All",
    "studyRoom": "Study Room",
    "book": "Book",
    "tea": "Tea",
    "fragrant": "Fragrant",
    "qin": "Qin",
    "furniture": "Furniture",
    "other": "Other"
  },
  "zh": {
    "all": "全部",
    "studyRoom": "文房",
    "book": "书",
    "tea": "茶",
    "fragrant": "香",
    "qin": "琴",
    "furniture": "家具",
    "other": "其他"
  }
}
</i18n>