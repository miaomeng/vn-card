import Vue from 'vue'
import Card from 'src/Card'

describe('Card.vue', () => {
  let card, el
  beforeEach(function () {
    el = document.createElement('div')
    document.body.appendChild(el)
    Card.el = function () {
      return el
    }
    card = new Vue(Card)
  })

  afterEach(function () {
    card.$destroy(true)
  })

  it('不同状态的 wrapCls', () => {
    expect(card.wrapCls).toEqual('vn-card vn-card-bordered')

    card.bordered = false
    expect(card.wrapCls).toEqual('vn-card')

    card.loading = true
    expect(card.wrapCls).toEqual('vn-card vn-card-loading')
  })
})
