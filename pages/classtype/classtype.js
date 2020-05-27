// pages/classtype/classtype.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classType:[
      {
        "id":1,
        "name":"手机"
      },{
        "id": 2,
        "name": "数码"
      },{
        "id": 3,
        "name": "鲜花"
      },{
        "id": 4,
        "name": "服装"
      }, {
        "id": 5,
        "name": "电脑"
      }],
    productList:[],
    productAll:[{
      "id":1,
      "name":"华为Mate 30",
      "src":"/images/temp/cate1.jpg",
      "price":1099,
      "classid":1
    }, {
      "id": 2,
      "name": "蓝牙耳机",
      "src": "/images/temp/cate2.jpg",
      "price": 2099,
      "classid": 2
    }, {
      "id": 3,
      "name": "玫瑰",
      "src": "/images/temp/cate3.jpg",
      "price": 3099,
      "classid": 3
    }, {
      "id": 4,
      "name": "Jeep",
      "src": "/images/temp/cate4.jpg",
      "price": 4099,
      "classid": 4
    }, {
      "id": 5,
      "name": "联想",
      "src": "/images/temp/cate5.jpg",
      "price": 5099,
      "classid": 5
      }]
  },
  searchTab(e){
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    var list = [];
    for(var i = 0;i<p.length;i++){
      if(id == p[i].classid){
        list.push(p[i]);
      }
    }
    this.setData({
      productList:list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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