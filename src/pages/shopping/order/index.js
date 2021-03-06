import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput } from "taro-ui"
import './index.scss'

@inject('auth', 'shopping')
@observer
export default class Order extends Taro.Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillMount() {

  }

  render() {
    const { shopping: { sumPrice, puchaseGoods }} = this.props;
    const sumCount = puchaseGoods.length
    return (
      <View className='index'>
        <View className='content'>
          {/* 商品 */}
          <View className='good'>
            {this.props.shopping.puchaseGoods.map(good => (
              <View key={good.id} className='at-row at-row__align--center good-item'>
                <View className='at-col at-col-4'>
                  <View className='img-card'>
                    <Image src={good.imgUrl} className='good-img' />
                  </View>
                </View>
                <View className='at-col at-col-8'>
                  <View className='good-info'>
                    <View className='good-name'>{good.name}</View>
                    <View className='good-price-count'>
                      <View className='good-price'>￥{good.price}</View>
                      <View className='good-count'>×{good.count}</View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          {/* 总计 */}
          <View className='at-row at-row__justify--between'>
            <View className='at-col at-col-5 sumCount'>共{sumCount}件商品</View>
            <View className='at-col at-col-5 sumPrice'>小计：￥{sumPrice}</View>
          </View>
          {/* 备注 */}
          <View className='remark'>
            <View className='at-row at-row__justify--between pb20'>
              <View className='at-col at-col-5 '>优惠券：</View>
              <View className='sumCount'>5折优惠券</View>
            </View>
            <View className='pt20'>
              <AtInput title='订单备注：' placeholder='请输入订单备注' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}