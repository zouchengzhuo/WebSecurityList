/**
 * Created by czzou on 2017/3/17.
 */
const express=require("express");
const Router=express.Router();

router.get('/',()=>{});
router.post('/',()=>{});

//修复方式：在cookie和页面里边分别加入csrf token，请求在header中添加csrf token，这样攻击者就没办法伪造get请求或表单了
router.get('/fix',()=>{});
router.post('/fix',()=>{});

module.exports=Router;
