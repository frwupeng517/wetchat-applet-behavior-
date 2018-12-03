// components/event/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapclick: function(event) {
      let behavior = {
        id: 123456,
        name: 'Natasha',
        gender: 'female'
      }
      this.triggerEvent('customevent', {
        behavior: behavior
      }, {})
    }
  }
})
