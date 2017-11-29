const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.set('port', process.env.PORT || 1377)

// 將 public 設定成靜態網頁目錄
app.use(express.static('public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//查詢資料

app.get('/query', function(req, res) {

    // 去 mongoDB 讀資料

    var response = {
        result: true,
        data: [{
                "name": "米家掃地機器人",
                "price": 8895,
                "count": 1,
                "image": 'http://i01.appmifile.com/webfile/globalimg/tw/cms/F9FD52B1-7023-0836-C512-D30D22EE7DE3.jpg?width=160&height=160'
            },
            {
                "name": "小米路由器 Pro",
                "price": 2295,
                "count": 1,
                "image": 'http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1490332273.78529474.png?width=160&height=160'
            }
        ]
    }
    res.json(response)
})

app.post('/insert',(req,res)=>{
  var data ={
    name:req.body.name,
    price: req.body.price,
    count: req.body.count,
    image: req.body.image
  }  
  //去mongo DB 將data新增進去
  var response = {
    result: true,
    data: data  
    }
    res.json(response);
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(app.get('port'), () => {
    console.log('Server listening on port http://127.0.0.1:' + app.get('port'))
})
/*const express = require('express')
const app = express()
//(key,value)
app.set('port',process.env.PORT||3000)
//將public 設定成靜態網頁目錄
app.use(express.static('public'))
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/query', (req, res) => {res.send('Hello World!')
//去讀mongpdb
var response = {
    result:true,
    data: [{
        "name": "米家掃地機器人",
        "price": 8895,
        "count": 1,
        "img": 'http://i01.appmifile.com/webfile/globalimg/tw/cms/F9FD52B1-7023-0836-C512-D30D22EE7DE3.jpg?width=160&height=160'
    },
    {
        "name": "小米路由器 Pro",
        "price": 2295,
        "count": 1,
        "img": 'http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1490332273.78529474.png?width=160&height=160'
    }
]   res.json(response)     }



})

app.listen(app.get('port'), () => console.log('Example app listening on port 3000! http://127.0.0.1:'+app.get('port')))*/