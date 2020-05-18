
import {  } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    categoryList:[],
    floorList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      success:(result)=>{
        this.setData({
          floorList:result.data.message
        })
      }
    });
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      success:(result)=>{
        this.setData({
          categoryList:result.data.message
        })
      }
    });
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result)=>{
        this.setData({
          swiperList:result.data.message
        })
      },
    });



    // this.getSwiper();
    // this.getCategory();  
    // this.getFloor();
  }

})

// // 获取楼层
// function getFloor(){
//   wx.request({
//     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
//     success:(result)=>{
//       this.setData({
//         floorList:result.data.message
//       })
//     }
//   })
// }

  
// // 获取分类
// function getCategory(){
//   wx.request({
//     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
//     success:(result)=>{
//       this.setData({
//         categoryList:result.data.message
//       })
//     }
//   })
//   }


  
//            // 获取轮播图
//   function getSwiper(){
//     // 使用promise处理请求 它这个有毛病吧？这都请求失败？？？
//     // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
//     // .then(result =>{
//     //   this.setData({
//     //     swiperList:result.data.message
//     //   })
//     // })
//     wx.request({
//           url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
//           success: (result)=>{
//             this.setData({
//               swiperList:result.data.message
//             })
//           },
//         });
//       }
