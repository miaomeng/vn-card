<template>
  <div :class="[wrapCls,cls]">
    <div class="vn-card-head">
      <h3 class="vn-card-head-title">{{title}}</h3>
    </div>
    <div class="vn-card-extra">
      <slot name="extra"><a href="#">{{extra}}</a></slot>
    </div>
    <div class="vn-card-body">
      <div v-if="loading">
        <p>████████████████████████</p>
        <p>██████　███████████████████</p>
        <p>██████████████　██████████</p>
        <p>█████　██████　█████████████</p>
        <p>███████████　██████████　███</p>
      </div>
      <slot v-else>
      </slot>
    </div>
  </div>
</template>

<script>
import cn from 'classnames'
export default {
  props: {
    cls: {
      type: String
    },
    title: {
      type: String
    },
    extra: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapCls () {
      return cn({
        'vn-card': 1,
        'vn-card-bordered': !!this.bordered,
        'vn-card-loading': this.loading
      })
    }
  }
}
</script>
