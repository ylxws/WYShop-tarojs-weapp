import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

class User extends Component {

  config: Config = {
    navigationBarTitleText: "我的",
  };

  render() {
    return (
      <View className="User">
        <Text>User</Text>
      </View>
    );
  }
}

// const User = () => {
//     return (
//         <View className='User'>
//           <Text>User</Text>
//         </View>
//       )
// }
export default User;
