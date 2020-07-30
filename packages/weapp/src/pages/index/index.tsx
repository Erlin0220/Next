import { Image, Swiper, SwiperItem, View } from '@tarojs/components'
import { ControllerHome } from "@xt/client/entities"
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { AtButton, AtMessage } from 'taro-ui'
import './index.scss'

@inject('$storeHome')
@observer
class Index extends Component<any> {
  get PageStore(): ControllerHome {
    return this.props.$storeHome
  }
  componentDidMount() {
    this.PageStore.onGetBanners()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  renderSwiper() {
    const { Banners } = this.PageStore;
    if (Banners.length) {
      return <Swiper
        circular
        indicatorDots
        autoplay>
        {Banners.map(img => <SwiperItem key={img.id}>
          <Image
            style='width:100%'
            src={img.pictureUri}
          />
        </SwiperItem>)}

      </Swiper>
    }
  }
  render() {
    return (
      <View className='index'>
        <AtMessage />
        {this.renderSwiper()}
        <AtButton type='primary' >获取数据</AtButton>
      </View>
    )
  }
}

export default Index
