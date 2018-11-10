// component/list/base_list/base_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mTitle: newVal });
      }
    },
    subTitle: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({ mSubTitle: newVal });
      }
    },
    lineColor: {
      type: String,
      value: '#E0E0E0'
    },
    icon: {
      type: String,
      value: 'back.png'
    },
    iconWidth: {
      type: String,
      value: '10'
    },
    iconHeight: {
      type: String,
      value: '20'
    },
    showIcon: {
      type: String,
      value: 'true'
    }
  },

  externalClasses: ['cus', 'cus-title', 'cus-subTitle'],

  /**
   * 组件的初始数据
   */
  data: {
    mTitle: '',
    mSubTitle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('base_list点击事件触发');
      console.log(e);
      this.triggerEvent('listtap', e, { bubbles: true });
    }
  }
})
