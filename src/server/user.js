import request from './api'
export function getVerificationCode(mobile){
  return request({
    url: `/validateCode/mobile/${mobile}?scope=auth`
  })
}
export function Login(mobile,verifyCode){
  const params = {
    mobile,
    code : verifyCode,
    grant_type: 'validatecode',
    scope: 'source:member'
  };
  const formData = new FormData();
  // eslint-disable-next-line
  for(let k in params) {
    formData.append(k, params[k]);
  }
  return request({
    url: '/oauth-api/token',
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
      }],
    body: formData
  })
}
export function getMemberInfoByMobile(mobile){
  return request({
    url: `/api/h5/members/mobile/${mobile}`
  })
}