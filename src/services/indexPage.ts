import request from "../utils/request";

const HOST = "http://47.97.211.83:5757/xiaohema";


export async function getIndex(params = {}) {
    return request(
        `${HOST}/index/index`,
        {
            method: 'GET',
            body: { params }
        }
        
    )
}