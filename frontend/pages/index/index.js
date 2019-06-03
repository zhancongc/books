//index.js
const app = getApp()

Page({
  data: {
    current: 'tab1'
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function () { }
})
