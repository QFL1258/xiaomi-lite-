Page({
  /*轮播图*/
  getImageList:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/imagelist',
      success:(res)=>{
        this.setData({
         list:res.data
        })
      }
    })
  },
  /*导航*/ 
  getNavList:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/navlist',
      success:(res)=>{
        this.setData({
          navList:res.data
        })
      }
    })
  },
  /*product_1*/
  getProduct_1:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/product_1',
      success:(res)=>{
        this.setData({
          product_1:res.data
        
        })
      }
    })
  },
  /*every_day*/
  getEveryDay:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/every_day',
      success:(res)=>{
        this.setData({
          every_day:res.data
        })
        for(var i=0;i<this.data.every_day.length;i++){
          this.data.every_day[i].isShow=true
          if (this.data.every_day[i].money_list==null){
            this.data.every_day[i].isShow=false
          }
        }
        this.setData({
          every_day:this.data.every_day
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navList:[],
    product_1:[],
    every_day:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImageList();
    this.getNavList();
    this.getProduct_1();
    this.getEveryDay();
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