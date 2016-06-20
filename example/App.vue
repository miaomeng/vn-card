<template>
  <vn-card title="我的卡片" extra="详情" icon="star">
    <p>aaaaaaaaa1</p>
    <p>aaaaaaaaa2</p>
    <p>aaaaaaaaa3</p>
  </vn-card>

  <vn-card title="我的卡片" icon="star" style="width:300px">
    <div slot="extra">
      <a href="#">我是详情1</a>
    </div>
    <p></p>
    <p>aaaaaaaaa3</p>
    <p>aaaaaaaaa4</p>
  </vn-card>

  <vn-card title="我的卡片" icon="star" style="width:300px">
    <div slot="extra">
      <a href="#">我是详情1</a>
    </div>
    <p>aaaaaaaaa1</p>
    <p>aaaaaaaaa2</p>
  </vn-card>

  <vn-card title="预加载卡片" icon="star" loading style="width:300px">
    <div slot="extra">
      <a href="#">我是详情2</a>
    </div>
    <p></p>
    <p>aaaaaaaaa3</p>
    <p>aaaaaaaaa4</p>
  </vn-card>
</template>

<script>
import vnCard from 'src/Card'
export default {
  components: {
    vnCard
  }
}
</script>

<style lang="less" src="ant-theme/index.less"></style>
