// components/child/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA: String,
    propB: Boolean,
    propC: Number,
    hidden: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached: function() {
    console.log('child attached')
  },
  ready: function() {
    console.log('child ready')
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
