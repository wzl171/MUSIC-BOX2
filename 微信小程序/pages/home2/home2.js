// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: '',
    temp1: '',
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    setInterval(() => {
      var that = this;
      wx.request({
        url: `https://api.heclouds.com/devices/561784227/datapoints?datastream_id=Light,Temperature,Humidity&limit=20`,
        header: {
          'content-type': 'application/json',
          'api-key': "7pYkJuFhqYtwnZGjY4SH5fwt=a0="
        },
        success: function (res) {
          that.setData({
            temp: res.data.data.datastreams[1].datapoints[0].value,
            temp1: res.data.data.datastreams[1].datapoints,
            a1: res.data.data.datastreams[1].datapoints[0].value,
            a2: res.data.data.datastreams[1].datapoints[1].value,
            a3: res.data.data.datastreams[1].datapoints[2].value,
            a4: res.data.data.datastreams[1].datapoints[3].value,
            a5: res.data.data.datastreams[1].datapoints[4].value
          })

          
          if (res.data.data.datastreams[1].datapoints[0].value > 100) {
            wx.playBackgroundAudio({
              dataUrl: 'http://music.163.com/song/media/outer/url?id=1372526879',
              title: '报警'

            })
          }
          if (res.data.data.datastreams[1].datapoints[0].value < 100) {
            wx.stopBackgroundAudio()
          }
        }

      })
    }, 5000)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})