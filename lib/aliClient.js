
'use strict';

const assert = require('assert')

const RPCClient = require('./../lib/core')

exports.getMobileByAliyun = function (data) {

    const params = data.params
    let alicloudClient = data.alicloudConfig
    const requestOption = data.requestOption

    assert(params, 'must pass "params"')
    assert(alicloudClient, 'must pass "alicloudClient"')
    assert(requestOption, 'must pass "requestOption"')

    alicloudClient = new RPCClient(alicloudClient)

    return alicloudClient.request('GetMobile', params, requestOption).then((result) => {
        return {
            ok: result.Code === 'OK',
            msg: 'success',
            mobile: result.GetMobileResultDTO.Mobile
        }
    }).catch((err) => {
        return {
            ok: false,
            msg: err.data,
            mobile: ''
        }
    })
}