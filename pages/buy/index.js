// pages/buy/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerOption:{
            bannerItem: [
                'http://www.h5css3.club/wp-content/uploads/2017/01/051-820x460.jpg',
                'http://www.h5css3.club/wp-content/uploads/2017/01/037-820x547.jpg',
                'http://www.h5css3.club/wp-content/uploads/2017/01/055-820x461.jpg'
                ],
            dots:true,
            color:"#f00",
            activeColor:"#ff0",
            autoplay:true,
            interval:5000,
            duration:500,
            circular:true
        },
        contentImg:[
            "http://www.h5css3.club/wp-content/uploads/2017/01/042-820x346.jpg",
            "http://www.h5css3.club/wp-content/uploads/2017/01/017-820x547.jpg",
            "http://www.h5css3.club/wp-content/uploads/2017/01/020-820x547.jpg"
        ]
    },

    viewImg:function(e){
        console.log(e);
        wx.previewImage({
            current: e.currentTarget.dataset.img,
            urls: [
                "http://www.h5css3.club/wp-content/uploads/2017/01/042-820x346.jpg",
                "http://www.h5css3.club/wp-content/uploads/2017/01/017-820x547.jpg",
                "http://www.h5css3.club/wp-content/uploads/2017/01/020-820x547.jpg"
                ],
            success:function(data){
                console.log(data)
            },
            fail:function(data){
                console.log(data)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("onload")
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
        console.log("离开了1")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("下拉刷新")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("到底了")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})