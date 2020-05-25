import Taro, { Component, Config } from "@tarojs/taro";
import {
  View,
  Navigator,
  Swiper,
  SwiperItem,
  Image,
  Block,
  Input,
  Form,
  Text,
  Button,
  ScrollView,
} from "@tarojs/components";
import "./index.less";
import { getIndex } from "services/indexPage";
import goPng from "../../static/images/right.png";
import rightbigPng from '../../static/images/rightbig.png'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      banner: [],
      channel: [],
      brandList: [],
      newGoods: [],
      topicList: [],
      newCategoryList: [],
      position: "上海",
      hotGoods: [],
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    this.fetch();
  }

  componentDidHide() {}

  public fetch = async () => {
    const res = await getIndex({});
    console.log(res);
    const {
      data: {
        banner,
        channel,
        brandList,
        newGoods,
        topicList,
        newCategoryList,
        hotGoods,
      },
    } = res;
    this.setState({
      banner,
      channel,
      brandList,
      newGoods,
      topicList,
      newCategoryList,
      hotGoods,
    });
  };

  public handleChange = (e) => {
    console.log(2);
  };

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  // config: Config = {
  //   navigationBarTitleText: "首页",
  // };

  render() {
    const {
      searchValue,
      banner,
      channel,
      position,
      brandList,
      newGoods,
      hotGoods,
      topicList,
      newCategoryList,
    } = this.state;
    return (
      <View className="index">
        <View className="indexTop">
          <Text className="position">{position}</Text>
          <View className="search">
            <Input
              name="value"
              title="搜索"
              type="text"
              placeholder="搜索商品"
              value={searchValue}
              onChange={this.handleChange}
            ></Input>
            <Image
              src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"
              className="search-image"
            />
            {/* <span className='search-image'></span> */}
          </View>
        </View>

        <View className="swiper">
          <Swiper
            className="swiper-container"
            indicatorDots
            indicatorColor="#999"
            indicatorActiveColor="#333"
            vertical={false}
            circular
            autoplay
            interval={3000}
          >
            {banner.map((item) => {
              return (
                <SwiperItem className="swiper-item" key={item.id}>
                  <Image src={item.image_url} className="swiper-image" />
                </SwiperItem>
              );
            })}
          </Swiper>
        </View>
        <View className="channel">
          {channel.map((item) => {
            return (
              <Navigator key={item.id} className="channel-item">
                <Image src={item.icon_url} className="channel-img" />
                <p>{item.name}</p>
              </Navigator>
            );
          })}
        </View>
        <View className="brand">
          <Navigator className="head">品牌制造商直供</Navigator>
          <View className="content">
            {brandList.map((item) => {
              return (
                <View key={item.id}>
                  <View>
                    <Text>{item.name}</Text>
                    <Text>低至{item.floor_price}元起</Text>
                  </View>
                  <Image src={item.new_pic_url} />
                </View>
              );
            })}
          </View>
        </View>
        <View className="newgoods">
          <Navigator className="newgoods-head">
            <View className="newgoods-text">新品首发</View>
            <View className="newgoods-text">查看全部</View>
          </Navigator>
          <ScrollView className="scroll-content" scrollX>
            {newGoods.map((item) => {
              return (
                <View key={item.id} className="scroll-item">
                  <Image src={item.list_pic_url} />
                  <View className="scroll-text">
                    <Text>{item.name}</Text>
                    <Text>{item.goods_brief}</Text>
                    <Text>¥{item.retail_price}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="newgoods hotgoods">
          <Navigator className="newgoods-head">
            <View className="newgoods-text">
              人气推荐<View className="point"></View>好物推荐
            </View>
            <View className="newgoods-text">查看全部</View>
          </Navigator>
          <ScrollView className="scroll-content" scrollX>
            {hotGoods.map((item) => {
              return (
                <View key={item.id} className="scroll-item">
                  <Image src={item.list_pic_url} />
                  <View className="scroll-text">
                    <Text>{item.name}</Text>
                    <Text>{item.goods_brief}</Text>
                    <Text>¥{item.retail_price}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="topicList">
          <Navigator className="topicList-head">
            <Text>专题精选</Text>
            <Image src={goPng} />
          </Navigator>
          <ScrollView className="scroll-content" scrollX>
            {topicList.map((item) => {
              return (
                <View key={item.id} className="scroll-item">
                  <Image src={item.item_pic_url} />
                  <View className="scroll-text">
                    <View className="scroll-text1">
                      <Text>{item.title}</Text>
                      <Text>{item.subtitle}</Text>
                    </View>
                    <View className="scroll-text2">
                      <Text>{item.price_info}元起</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="newcategory">
          {newCategoryList.map((item) => (
            <View className="list">
              <View className="head">
                <Text>{item.name}好物</Text>
              </View>
              <View className="sublist">
                {(item.goodsList || []).map((subitem) => (
                  <View className="subcontent">
                    <Image src={subitem.list_pic_url} />
                    <Text>{subitem.name}</Text>
                    <Text>¥{subitem.retail_price}</Text>
                  </View>
                ))}
                <View className="last">
                  <Text>{item.name}好物</Text>
                  <Image src={rightbigPng} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
