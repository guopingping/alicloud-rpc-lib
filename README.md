# alicloud-rpc-lib

```sh

The alicloud SDK to getMobile of api

```

## Installation

```sh

npm install alicloud-rpc-lib -S

```


## Prerequisite

```sh

Node.js >= 4.x

```

## Usage

```js
    const AlicloudRPCClient = require('alicloud-rpc-lib').AliRPCClient

    const alicloudConfig = {
        "accessKeyId": "accessKeyId",
        "accessKeySecret": "accessKeySecret",
        "endpoint": "https://dypnsapi.aliyuncs.com",
        "apiVersion": "2017-05-25"
    }

    const params = {
        'RegionId': "cn-hangzhou",
        'AccessToken': "accessToken",
    }

    const requestOption = {
        method: "POST"
    }

    return AlicloudRPCClient.getMobileByAliyun({ alicloudConfig, params, requestOption }).then((result) => {

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


```