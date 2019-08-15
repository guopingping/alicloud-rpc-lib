
const AlicloudRPCClient = require('alicloud-rpc-lib').AliRPCClient

function getMobile() {

    const alicloudConfig = {
        "accessKeyId": "accessKeyId",
        "accessKeySecret": "accessKeySecret",
        "endpoint": "https://dypnsapi.aliyuncs.com",
        "apiVersion": "2017-05-25"
    }

    const params = {
        'RegionId': 'cn-hangzhou',
        'AccessToken': data.accessToken,
    }

    const requestOption = {
        method: 'POST'
    }

    return AlicloudRPCClient.getMobileByAliyun({ alicloudConfig, params, requestOption }).then((result) => {
        console.log(result)
        // success get mobile:

        // result = {
        //     ok: true,
        //     msg: 'success',
        //     mobile: 131********    
        // }

        // err and err message:

        // result = {
        //     ok: false,
        //     msg: err.data,
        //     mobile: ''
        // }

        return result
    })
}


getMobile()