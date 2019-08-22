let express = require('express');

let api = express();



api.use('/js',express.static(__dirname + '/www/js'));
api.use('/css',express.static(__dirname + '/www/css'));
api.use('/images',express.static(__dirname + '/www/images'));


//首页导航栏
api.get('/api/home/homeNav',(req,res)=>{
    res.json({
        data:require(('./Date/home/homeNav.json')),
        code:0,
    });
});

//首页banner图
api.get('/api/home/homeBanner',(req,res)=>{
    res.json({
        data:require(('./Date/home/homeBanner.json')),
        code:0,
    });
});

//网易自营品牌
api.get('/api/home/policyDescList',(req,res)=>{
    res.json({
        data:require(('./Date/home/policyDescList.json')),
        code:0,
    });
});

//首页新品首发
api.get('/api/home/kingKongList',(req,res)=>{
    res.json({
        data:require(('./Date/home/kingKongList.json')),
        code:0,
    });
});

//海外商品
api.get('/api/home/homeTag',(req,res)=>{
    res.json({
        data:require(('./Date/home/homeTag.json')),
        code:0,
    });
});

//类目热销榜
api.get('/api/home/categoryList',(req,res)=>{
    res.json({
        data:require(('./Date/home/categoryList.json')),
        code:0,
    });
});

//人气推荐
api.get('/api/home/popularItemList',(req,res)=>{
    res.json({
        data:require(('./Date/home/popularItemList.json')),
        code:0,
    });
});

//限时购
api.get('/api/home/itemList',(req,res)=>{
    res.json({
        data:require(('./Date/home/itemList.json')),
        code:0,
    });
});

//新品首发列表
api.get('/api/home/newItemList',(req,res)=>{
    res.json({
        data:require(('./Date/home/newItemList.json')),
        code:0,
    });
});

//99超值
api.get('/api/home/sceneLightShoppingGuideModule',(req,res)=>{
    res.json({
        data:require(('./Date/home/sceneLightShoppingGuideModule.json')),
        code:0,
    });
});
//底部展示分类
api.get('/api/home/categoryModule',(req,res)=>{
    res.json({
        data:require(('./Date/home/categoryModule.json')),
        code:0,
    });
});

//首页导航分处理
api.get('/api/home/categoryItemList',(req,res)=>{
    let urls = {
        //居家生活
       'k1005000':'categoryItemList.json',
       //服包鞋饰
       'k1010000':'categoryClothing.json',
        //美食酒水
       'k1005002':'categorycate.json',
       //个人清洁
       'k1013001':'categoryclean.json',
       //母子婴亲
       'k1011000':'categorymother.json',
       //运动旅行
       'k109243029':'categorymotion.json',
       //数码家电
       'k1043000':'categorydigital.json',
       //全球特色
       'k1019000':'categoryglobal.json',
    }
    id = 'k' + req.query.id;
    let url =urls[id];
    res.json({
        data:require(('./Date/home/' + url)),
        code:0,
    });
});

const bodyParser = require('body-parser');
api.use(bodyParser.json());//数据JSON类型
api.use(bodyParser.urlencoded());
api.post('/xhr/search/searchAutoComplete.json',(req,res)=>{
    //console.log( req.body.keywordPrefix);  
    //res.sendFile(__dirname + '/www/index.html');
        let requestData = {keywordPrefix:req.body.keywordPrefix}
        //
        console.log(requestData)
        let options = {
            hostname: 'https://m.you.163.com',
            port: '443',
            path: '/xhr/search/searchAutoComplete.json',
            method: "POST",
            body:requestData
        }
         //向猫眼服务器发送请求
        //创建请求
        // url: url,
        // method: "POST",
        // json: true,
        // headers: {
        //     "content-type": "application/json",
        // },
        // body: requestData
        // 向猫眼服务器发送请求
        // 创建请求
        let http = require('http');

        let request = http.request(options, (response)=>{
            //response猫眼服务器响应的响应对象
            console.log('接收到了猫眼服务器的响应');
            // 接收数据
            let data = '';
            response.on('data', (buffer)=>{
               
                data += buffer;
                res.write(buffer);
            })
            // 接收完成
            response.on('end', ()=>{
                console.log('接收数据完成 ');
                //处理最终的数据
                // fs.writeFileSync('./test.json', data);
                res.end();

            })
        });
        request.end();//发送请求
    
})

//以上为首页数据接口
api.get('*',(req,res)=>{
    console.log(123)
    res.sendFile(__dirname + '/www/index.html');
});



api.listen('9000',(err)=>{
    err ? console.log(err) : console.log('服务器启动成功')
});