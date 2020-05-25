import Taro from '@tarojs/taro';


function request(url, optipns) {
    const { method, params } = optipns;
   return Taro.request({
        url,
        data: params,
        method,
        header: {
          'content-type': 'application/json' // 默认值
        }
      }).then(response => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
            return response;
        }
        const errorText = response.statusText || '';
        const error = new Error(errorText);
        error.code = response.statusCode;
        throw error;
      }).catch(error => {
          console.log(error);
          return error.failAction
      })
}

export default request;