// 引入express
const express = require('express')
// 创建实例
const app = express()
// 创建监听端口
const port = 3000
// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*') //允许所有的请求源
//     res.header('Access-Control-Allow-Headers', '*') //允许所有的请求源 X-Token
//     res.header('Access-Control-Allow-Methods', '*') //允许所有的请求源 get post put delete
//     next()
// })
// 定义接口
app.get('/api/getData', (req, res) => {
    // 获取前端参数
    // const { cb } = req.query
    // res.send(`${cb}(${JSON.stringify({
    //     code: 10000,
    //     data: {
    //         msg: 'hello world'
    //     }
    // })})`)
    // 返回的结果
    res.send({
        code: 10000,
        data: {
            msg: 'hello world'
        }
    })
})
// 监听当前的端口
app.listen(port, () => {
    console.log(`server start! port:${port}`)
})