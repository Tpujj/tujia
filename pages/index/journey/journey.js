// pages/index/journey/journey.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: '厂里旅游度假区',
    messagea:'广州长隆旅行度假村',
    jname:'广州',
    inputValue:'',
    focus: true,
    hosList: [],
    introduction:[]

  },
  
  searchChange: function (e) {  //输入时实时调用搜索方法
    this.search(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    });
   
  },

  search: function (key) { //搜索方式key用于输入的查询字段
    var This = this;
    var hosList = wx.getStorage({
      key: 'hosList',
      success: function (res) { //从storage中取出数据
        if (key == "") {  //用户没有输入显示全部
          This.setData({
            hosList: res.data
          })
          return;
        }
        var arr = [];  //临时数据用于匹配到搜索的数据
        for (let i in res.data) {
          res.data[i].show = false;  //所有数据隐藏
          if (res.data[i].search.indexOf(key) >= 0) {  //查找
            res.data[i].show = true; //匹配到的数据显示
            arr.push(res.data[i])
          }
        }
        if (arr.length == 0) {
          This.setData({
          })
        } else {
          This.setData({
            hosList: arr  //找到数据在页面中显示
          })
        }
      },
    })
  },
  openHistorySearch: function () {
  
  },

  historyDelFn: function () {
    wx.clearStorageSync('introduction')
    this.setData({
      introduction: []
    })
  },
    pressView: function (e) {
      var viewId = e.target.id;
      var viewDataSet = e.target.dataset;
      var viewText = viewDataSet.text;
      console.log(viewText); //输出该文本
        this.setData({
      inputValue: viewText,
    })
  },

  searchDone(e){
    let inputValue = this.data.inputValue
    wx.setStorageSync("introduction", inputValue)
  },
  searchDone(e) {
    console.log('search', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hosList = [
      { id:101,name:"广州珠江新城",show:false,search:"101广州珠江新城"},
      { id:102,name:"新疆",show:false,search:"102新疆"},
      { id:103,name:"杭州",show:false,search:"103杭州"},
      { id:104,name:"北京",show:false,search:"104北京"},
      { id:105,name:"上海",show:false,search:"105上海"},
    ]
    wx.setStorage({
      key: 'hosList',
      data: hosList,
    })
    this.setData({
      hosList: hosList
    })
  },
  
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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