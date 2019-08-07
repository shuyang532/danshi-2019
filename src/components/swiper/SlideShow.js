import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './SlideShow.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'


class SlideShow extends Component {

    componentDidMount() {
      //可以加上你需要的条件等，然后生成Swiper对象，
      //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
      new Swiper('.swiper-container', {
        speed:300,
        effect : 'flip',
        autoplay:true, // 自动切换
        loop: true, // 循环模式选项
        pagination: { // 如果需要分页器
          el: '.swiper-pagination',
        },
        navigation: { // 如果需要前进后退按钮
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: { // 如果需要滚动条
          el: '.swiper-scrollbar',
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      });
    }

    render() {
      return(
          <div className="swiper-container swiper-container-initialized swiper-container-horizontal">

            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide-active"><img src={img1} className="imageShow"  alt="" /></div>
              <div className="swiper-slide swiper-slide-next"><img src={img2} className="imageShow"  alt="" /></div>
              <div className="swiper-slide"><img src={img3} className="imageShow" alt="" /></div>
              <div className="swiper-slide"><img src={img4} className="imageShow"  alt="" /></div>
              <div className="swiper-slide"><img src={img5} className="imageShow"  alt="" /></div>
              <div className="swiper-slide"><img src={img6} className="imageShow"  alt="" /></div>
            </div>

            {/*如果需要分页器*/}
            <div className="swiper-pagination"></div>
            {/*如果需要导航按钮*/}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            {/*如果需要滚动条*/}
            <div className="swiper-scrollbar"></div>
        </div>
      )
    }
}

export default SlideShow;
