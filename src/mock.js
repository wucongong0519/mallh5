const Mock = require('mockjs')
const loginResponse = function() {
    return {
        code: 1,
        uToken: 'logined',
    }
}
Mock.mock('/login','post',loginResponse)