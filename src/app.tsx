import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/my/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fafafa',
      borderStyle: 'white',
      selectedColor: '#b4282d',
      color: '#666',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/ic_menu_choice_nor.png',
          selectedIconPath: 'static/images/ic_menu_choice_pressed.png',
        },
        {
          pagePath: 'pages/my/index',
          text: '我的',
          iconPath: 'static/images/ic_menu_me_nor.png',
          selectedIconPath: 'static/images/ic_menu_me_pressed.png',
        }
      ]
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将被用于小程序位置接口的效果展示'
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
