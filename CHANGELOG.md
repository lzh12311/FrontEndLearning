## [0.2.50](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.49...v0.2.50) (2021-12-06)


### Bug Fixes

* --task=1076996 修复跨页勾选全选在分页切换被覆盖问题及当前刷新方法修改 ([ea6c998](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ea6c998a5d341510e30231b2a63c195a31214165))
* --task=1079253 跨页勾选-监听全选清除及反选记录修复 ([a1cd908](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a1cd908011ae608ee8df4915b4edbb5e218b0225))
* 优化名称及冗余检查 ([12cd71b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/12cd71b3712c1439f9974d42f4eb8d1133b755fb))
* 当前二级表格全选取消时重新获取当前已勾选的数据重新生成已勾选记录 ([3a2f498](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3a2f498bb97ce12b7ec57650774cff9cfe7c6924))


### Features

* --task=1078482 搜索组合增加手动重置某一个默认值条件 ([dc396fd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dc396fd43fc90b56458c13e3c22579443adc9a21))
* selectKeys改为selectedRows命名 ([098b360](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/098b360a81c6fcdce6a884293bb4e6ec67bda18f))
* 增加slotFlag将prop作为插槽名支持/增加勾选支持checkList的set监听 ([8ed6447](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8ed64471a2871cf3c290bd2dd7546f227d0624fa))
* 防抖延迟调整为100及checkList冲突去掉 ([3edc576](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3edc5767a71db1a62db7507ba98dbf4d8a6d4436))



## [0.2.49](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.48...v0.2.49) (2021-11-30)


### Bug Fixes

* 修复开始时间选择时间后无法选择当天为结束日期的问题 ([9e94fd3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9e94fd3e6b1bfc0b9f5e38ca2d01199bc80a7b8b))



## [0.2.48](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.47...v0.2.48) (2021-10-29)


### Features

* 搜索框重置自定义事件-支持手动更新form同步 ([b3e4119](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b3e4119cc5f9cd609c2008962922987c60535929))
* 搜索框重置自定义事件-支持手动更新form同步 ([dad9992](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dad99927643254be38407c08b073aab91480d997))



## [0.2.47](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.46...v0.2.47) (2021-10-22)


### Bug Fixes

* 操作日志底部间距去掉 --story=1037404 ([60cd680](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/60cd680940ca5a3cb090149081b8c0a1ff78cbe4))
* 详情组件去除分页器上间距 --story=1037404 ([0946a28](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0946a28ae096bf05ab2ec1de132fd1c288863685))



## [0.2.46](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.45...v0.2.46) (2021-10-22)


### Bug Fixes

* 关于搜索日期范围配置dateRangeKeys[指定字段名为对象的某个属性值]-优化首次请求及重置不生效问题 ([e534eef](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e534eef35d5d476ba2764a6aa68ef27a3f5ded0d))



## [0.2.45](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.44...v0.2.45) (2021-10-19)


### Bug Fixes

* --task=1065734 搜索框文案调整/去除console ([827aabc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/827aabc52ccf2fe0df566df818399d3e16fb378c))
* --task=1065734 搜索框日期支持年份及文案取placeholder ([32f16e6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/32f16e60ad60d9c0597151734aaab5ec154c413c))
* --task=1065734 搜索框日期添加范围校验必填配置及日期时间placeholder文案修改 ([b877c25](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b877c258c2fcb196b870a6beb5ff449ef14e0b79))
* --task=1065734 搜索框日期添加范围校验必填配置及日期时间placeholder文案修改 ([036b024](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/036b024104db3cd467ee55376f75f67481f7ef90))
* --task=1065734 搜索框日期添加范围校验必填配置及日期时间placeholder文案修改 ([d8f0fdb](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d8f0fdb2cb977cc54fd489e8a16299a686ff66e9))
* placeholder调整 ([b7fbd2c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b7fbd2c4dc645eecc9e5b4a9e2590e2086b0b025))
* 日期校验配置名修改-isRequired：都不能为空，两者都必填/isBothExistOrNot：都可以为空，填之后两者都必填 ([856df38](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/856df38ddef878cf1aa75132483214f0312857b0))



## [0.2.44](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.43...v0.2.44) (2021-10-15)


### Features

* --task=1065369 优化搜索日期输入框数字右侧显示遮挡问题 ([9602c29](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9602c29336265b54e78c1226930b336cc42152cb))



## [0.2.43](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.42...v0.2.43) (2021-10-13)


### Bug Fixes

* --task=1063275 select[limt分页加载功能]-支持多选靠前展示及大小写输入 ([8178bfd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8178bfd506320585f573466e2478c3407363a2ff))



## [0.2.42](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.41...v0.2.42) (2021-10-13)


### Features

* add alt property to images ([2a87112](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2a87112a1d232b2084c34367dd8a51ad2acafb6f))



## [0.2.41](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.40...v0.2.41) (2021-10-09)


### Features

* select监听options添加immediate方式 ([c1c1f7e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c1c1f7e662096e6adb1ffe7a6089801fe12f39ae))



## [0.2.40](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.39...v0.2.40) (2021-09-30)


### Bug Fixes

* --task=1061720 修复表格操作栏适配展示不一致问题 ([e921c60](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e921c6048b06566c625cc46d52fafdf20eb783c6))
* 优化option处理 ([b01eb62](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b01eb629b14b2a60f6123ab013f62debd28d87f0))


### Features

* --tas=1061025 添加select支持limitdemo效果 ([375f528](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/375f528ec0fc96fa2dca88cd06dd5e23353e21d6))
* --task=1060150,1060151 选择框下拉增加limit支持-解决下拉数据过大渲染卡顿问题 ([cee71dd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/cee71dd4ac2a3d4503e6f07064d11ca705cd85bf))



## [0.2.39](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.38...v0.2.39) (2021-09-28)


### Bug Fixes

* 修复驼峰写法找不到值的问题 --story=1057175 ([adbd7fb](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/adbd7fb52ffc03737088edbef9324d98f9259b7b))



## [0.2.38](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.37...v0.2.38) (2021-09-24)


### Bug Fixes

* 不能覆盖完全，loading只能显示部分页面 ([38e7acb](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/38e7acbe95462e53514f53acbbeec0ab1a792dd9))



## [0.2.37](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.36...v0.2.37) (2021-09-18)


### Bug Fixes

* add back default value-format ([a42cab2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a42cab2084bbe7b34ced05e327f4dba65fee35ae))
* remove ` ([fd8442c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fd8442ce510368ebd518ce687efc5d2ea8ed2771))
* 修复timestamp 问题 ([e5e77af](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e5e77af03bb2b2577d4b34930b84ae6d1ce8666c))
* 修复清空置空的问题 ([9d34955](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9d34955933b99efa6e4d1fcd6102a98cb50d708b))


### Features

* remove console.log ([1c5d867](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1c5d8675c4e94a3b9273b92b4fd38bd97ddd730a))
* remove fcForm ([0ed2206](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0ed22062a0bd7d348796b299289bbd56b156b5eb))
* 兼容fcForm 和 pickerOptiions disabledDate ([48f1d43](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/48f1d433fa188fd4556ba147faf60930b465eb53))
* 增加date range picker 组件 ([2b75ce9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2b75ce9fc72ffffd0e55d5537a0790c4fb741e47))
* 文档更新，picker-options修改 ([394cf2c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/394cf2c1f2b6e8af4564b59c4d2bdd3d106045ac))
* 监听清空 ([57ef083](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/57ef083f70c5780ce2abb0c23d3515101afb554e))



## [0.2.36](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.35...v0.2.36) (2021-09-17)


### Bug Fixes

* 跨页勾选异步不显示问题 ([3c63958](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3c63958292bea866ad19f1f2be84dc5cba16788f))



## [0.2.35](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.34...v0.2.35) (2021-09-16)


### Bug Fixes

* --task=1058241 操作栏适配点击事件获取修复 ([251f10c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/251f10cdd229cf1ae04063011b685f38613181e8))
* fc-dialog-form代码整理 ([2edf7af](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2edf7af7c599107a9ddd2f3f4b0f3aa2ae9c1b97))
* 去除多余文件 ([978caec](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/978caecb22ed309ca52a9940e75dc4f6c2114998))
* 规范命名及setForm方法添加，统一控件size大小 ([237f0e8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/237f0e82a04873e5e3d023ab52f2ad7fc9c6ef79))



## [0.2.34](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.33...v0.2.34) (2021-09-10)


### Features

* 表格大数据导出增加对switch的支持 --story=1037404 ([b51ca21](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b51ca21d44ff263192dc5d4a5db14293ad2f2c04))



## [0.2.33](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.32...v0.2.33) (2021-09-02)


### Bug Fixes

* update pizza ([ffe4a96](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ffe4a96c07e7237d12136a287812a14b21b43686))



## [0.2.32](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.31...v0.2.32) (2021-09-02)


### Features

* lock element ([7f990f7](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7f990f723ca09f680695544299a0ae44d746077e))
* 解决form层级对象绑定失效问题及添加手动修改form响应数据 ([17afce0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/17afce01e14ad355e555190c56573361f972359a))



## [0.2.31](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.30...v0.2.31) (2021-08-30)


### Bug Fixes

* table-search 表格部分内容显示可配置 ([fdbb74e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fdbb74eea80dd4a39b1566ef103d7999199c100c))
* table-search 表格部分内容显示可配置 ([2f6028e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2f6028e942080cf5416545c6dec5b6737bde500c))
* 操作日志组件-去除高度限制以及dialog额外样式，采用pizza库样式 --story=1037404 ([bc3b722](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bc3b72265723d781c37746754a3eeb782e9a6aeb))
* 表格formatter增加快速formatter方法 --story=1037404 ([3ceecf9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3ceecf9557e25d67e0dfa43ec8151693cd1f7c9e))



## [0.2.30](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.29...v0.2.30) (2021-08-26)


### Bug Fixes

* 详情组件添加预置格式化类型，如date、datetime、time、money --story=1037404 ([f0da33a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f0da33aaa115e8545004697fe0c1ec507f30ddd9))



## [0.2.29](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v1.8.8...v0.2.29) (2021-08-25)


### Bug Fixes

* --task=1050010 --user=颜晓飞 ui规范样式调整及prop为undefind问题 ([f96654a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f96654a9f0d370a2aa8279471e1e510f6c93dc59))
* --task=1050024 内部处理visibie默认true/命名优化/深拷贝方法切lodash库 ([04525d0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/04525d045a5a5cd9355d44722742fcbf22ce154d))
* 上传组件增减默认文件名 ([ec33a68](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ec33a6826dc5fb0f744cf3e8b071afa6247023f1))
* 整理代码 ([080edc4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/080edc4bdf348586dbc861144d214a99854f5ff0))


### Features

* --task=1048279 增加FcDialogForm增删改查组合组件 ([eec5100](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/eec51000ed3c9851a02cf76f6a9f3e046f07a39f))
* --task=1049884 表格组合增加内嵌inline布局/columns增加options形式枚举/搜索输入input增加默认清除属性 ([2fa876e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2fa876e2a00ffad7a6551f15fa2d3b29f03e2afb))
* inline时补充按钮上边距去除 ([ad5db07](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ad5db07951d52aa009eefb64ea05bcedf366d776))
* 发布beta版本 ([5df6628](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5df662853e8acd025bfe5657990e987c5d65eff0))
* 合并dialogForm及feat新功能发布正式版 ([1610b25](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1610b25c13578cdb01772f5bbff72ee735fa81bf))
* 新增表单弹窗组合组件 ([9196cdd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9196cdd011d3f4a76319ea48e55e649c09c7bf56))
* 根据UI规范调整搜索布局排版个数，大于分辨率1680px[最新阀值]为一行四个，小于等于为一行三个 ([e372a89](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e372a89181da2827f9a895a1dcf4dd15fa85d851))



## [1.8.8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.28...v1.8.8) (2021-08-20)


### Bug Fixes

* 修改viewer默认index值 ([e7ee77c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e7ee77c8770a6ffddb8bb9be44686c8c3609cd62))
* 名称更改 ([143e305](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/143e30586bcd129e79ffd3df125679ba2f6775d8))



## [0.2.28](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.27...v0.2.28) (2021-08-19)


### Features

* 1.详情组件每个card间距16px;2.操作日志组件-详情弹框内容按照表格样式走，外部操作日志字体14px,距离下方表格16px，详情按钮字体14px --story=1037404 ([0e1482c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0e1482cf48cd5cd8abf9f70bba8fb6cda2b50739))



## [0.2.27](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.26...v0.2.27) (2021-08-17)


### Bug Fixes

* 详情组件，content部分，下padding去掉 --story=1037404 ([b10e28b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b10e28b62f82134381c5255dd8ad4b0ed7756547))
* 详情组件，最后一个card去掉底部margin --story=1037404 ([f821d8d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f821d8d4a8f74ad0f3f6d691400eae2c02887441))


### Features

* update pizza version ([2d6da0e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2d6da0ef8cb53f508318747d2cceb56b00040639))



## [0.2.26](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.25...v0.2.26) (2021-08-13)


### Bug Fixes

* 解决windows电脑列表出现滚动条的问题 --story=1037404 ([7dfb71a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7dfb71a79d7f0de5484ed1323a5e4d4f65a1627d))



## [0.2.25](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.24...v0.2.25) (2021-08-09)


### Bug Fixes

* --task=1045426 规范名称及代码错误 ([f8da32d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f8da32daf62f795100f15d8f72eb57cdaa4edd0b))
* --task=1045426 解决slot嵌套问题，优化slot判断name，调整位置 ([94d2f00](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/94d2f0062717523d40b0997b09fdf55b51ea8897))



## [0.2.24](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.23...v0.2.24) (2021-08-09)


### Bug Fixes

* 操作日志只展示表格不折叠 ([6aa83a6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6aa83a675a3b3ebcdc3d46e43429a851453e1fed))



## [0.2.23](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.22...v0.2.23) (2021-08-06)


### Bug Fixes

* 整理代码 ([692b97d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/692b97da89639480cf8ff1b770e695de6f0ad047))
* 文件后缀名补充 ([18577d4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/18577d49535f164a8829c08a822a0ee3427ae4d2))
* 添加个beta标记 ([3e69665](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3e6966532fbc846d6eaf94412f64bc8cbd3d5ecb))
* 规范命名修改 ([9652660](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/965266035297c7741712ca4d586d243299bf8a93))
* 配合saas-ui分页样式调整，去除多余-16px ([0921032](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0921032139dd7bd8db4555fdd8f420e823590559))


### Features

* --task=1043114 增加操作栏自适应配置组件 ([f557fa1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f557fa1438c2f88f713b23039cf7424d098004f7))
* change pub to release ([0beeb41](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0beeb41a3d51fd2ce071e33c297c60d9b5a9604d))



## [0.2.22](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.21...v0.2.22) (2021-08-04)


### Bug Fixes

* 数据值拷贝和容错，用于重置数据 ([c1a4b73](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c1a4b7350be05384a880a39f349d4cb7d1fa4625))



## [0.2.21](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.20...v0.2.21) (2021-08-02)


### Bug Fixes

* 修复上传组件loginPlatform ([e2df5e6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e2df5e65e91b29d26ec185bacee7a96e9709c728))



## [0.2.20](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.19...v0.2.20) (2021-07-30)


### Features

* 大数据导出 级联多选 搜索描述转换 ([8c0b1c1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8c0b1c1470c0c3f37fc7d28a1625e37381583a55))



## [0.2.19](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.18...v0.2.19) (2021-07-21)


### Features

* remove lodash chain to normal operation ([e29a4b2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e29a4b29b29e5157bbbe71a923145ada4f145f77))
* update ci ([3165a0f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3165a0f204558075de813d5a52f537a7a11bf3c7))
* 修复发线上环境chain().map 不被识别的问题 ([5c35c66](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5c35c66fe8b7573ed036a3c0539f01e1b3c70b60))



## [0.2.18](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.17...v0.2.18) (2021-07-20)


### Bug Fixes

* --story=1037404 详情组件，table支持点击行事件 ([c936aed](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c936aed4d2bef2ac36732e749f328694599713a1))



## [0.2.17](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.16...v0.2.17) (2021-07-19)


### Bug Fixes

* 修复控制台warning ([4769d4e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4769d4edc1f9475fe08af3a902551dfeb5b9c523))


### Features

* fc-detail-form 3个案例 ([b4bf069](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b4bf069f2cbb2fbf96a4b364610c802af106c5b4))
* fc-detail-form-panel 中增加table对于 slot 的支持 ([6f200ad](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6f200ad38e6ab64acf86269ee6f7634e9efda2f3))
* 增加动态展示字段案例 ([66e4d5d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/66e4d5ddf6301ed122bc7698856fd7835e53bb99))



## [0.2.16](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.15...v0.2.16) (2021-07-15)


### Bug Fixes

* 补充refs获取判断条件 ([57ca286](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/57ca2865ebf445f176860ee554ab36359d89098e))
* 金额格式化补充千位符展示 ([94f3dfc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/94f3dfc2a0836676901f3305a28b0ad5a51e189e))



## [0.2.15](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.14...v0.2.15) (2021-07-14)


### Bug Fixes

* 修复search的label未定义 ([3efa350](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3efa3503be4dcc8ed7bcb20815675d4b303a13af))
* 解决动态label时不更新监听dom渲染问题及代码优化 ([8ee428a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8ee428a9ed02b2cadc797c43a1767200b0ff6646))



## [0.2.14](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.13...v0.2.14) (2021-07-12)


### Bug Fixes

* --story=1037404 1、详情组件外框有个描边去掉；2、测试输入框校验问题 ([cd3b587](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/cd3b587f3255265fadac490dd05c2d10a0b31172))
* resolved更正 ([ea0968b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ea0968bd3bd6261c1c5fb819c2ea76fc295bf499))
* 优化命名及顶部滚动 ([d758520](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d758520fccaf8a08bb4b03531bf88542511a5ec5))
* 修改支持大小写转化下划线支持 ([c136cb9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c136cb9b2b18ce58619b6f58f3ed0682c7521491))
* 去除date多余的冗余方法 ([99e3172](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/99e3172376c57dd974a9215ff5669579a5a1888c))
* 命名代码优化 ([b33bf38](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b33bf380bd0aaa3ac3cc2b5d51db96190778d18f))
* 命名代码优化 ([9ea7d50](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9ea7d50109759def230ba75fda3d9494abaaaa78))
* 整理优化代码 ([44566de](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/44566de7cd49cd7bdd44ab5a887b9b8345636eb6))
* 查询v-bind去除 ([621eddd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/621eddd60eea53d98c64e5685286ab23de9e7913))
* 补充全局默认分页配置及异步条数更新高度 ([fa29a0e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fa29a0ea69794d316ecd737956fbbabb3975c95a))


### Features

* input添加回车及select默认属性去除，添加自定义全局属性配置，table的refs容错处理 ([771063c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/771063c34b5e13a14f2aa3f9bbd35ad50536e2ae))
* 仅判断默认一行是否包含日期范围格子 ([ce34190](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ce341902db0cc009f6555a68998ebcaecd6cbcfe))
* 增加formLabel自适应宽度，保留外部配置 ([54cfc72](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/54cfc720fc8bc158ea10222b29404fa60e5cda01))
* 展开折叠图标添加过渡效果 ([4fbceff](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4fbceff2ad0ebc0860901c26ce79d9120196352d))
* 异步请求添加自定义loading，用于特殊场景自定义loading ([d7af00e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d7af00e3b05d230f0c5799230521f0dfd7f46f6d))
* 日期范围增加字段别名及日期时分秒控件布局占两格 ([8154700](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/81547006bc567cbec30c59d05c53bada9f25e703))
* 添加跨页勾选，静态分页支持及高度自适应优化 ([75da215](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/75da215d39daea8c7dd6c2f87a16d3d6b087f691))



## [0.2.13](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.12...v0.2.13) (2021-07-02)


### Bug Fixes

* --story=1017388 详情组件底部按钮层级放低，避免影响弹窗模态框 ([a2c5469](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a2c546982364adf50755289158892cfd61c66bb4))


### Features

* remove run build ([7f26945](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7f269453b1ac1971a93e4b4bea74523ae6e47c4c))
* update main entry ([7361af0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7361af05b073343de6e686ceb91c92b684eab650))



## [0.2.12](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.11...v0.2.12) (2021-06-30)


### Bug Fixes

* 显示当前图，根据name判断图片类型 ([c826759](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c826759e49b1d3e92c1cb28dfdf12eb754e8f26b))


### Features

* remove dist as output ([6199f67](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6199f67270a30975eab4a5ba0bd95bf170e6a23d))
* revert comment change ([2652250](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/26522506e8f9ce87b79e73b423995509e17b38b0))



## [0.2.11](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.10...v0.2.11) (2021-06-28)


### Bug Fixes

* --story=1017388 1.详情组件，表尾总计改为合计；2.表格相关配置改为兼容驼峰及-写法 ([f18f403](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f18f4030862b7d5af9145fe92176a8d92d7b36c6))
* --story=1017388 formConfig类型修正 ([88df773](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/88df773859e2a2135b7ebb9695f42d0ad9a0cb03))



## [0.2.10](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.9...v0.2.10) (2021-06-24)


### Bug Fixes

* --story=1017388 1.表头支持自定义配置headerRender;2.二级标题支持alert提示；3.tableConfig给默认值，可为空；4.columnConfig代码提取优化 ([c205fd0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c205fd0b5cd933bbf8632fca04a1d2ead6a939df))



## [0.2.9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.8...v0.2.9) (2021-06-22)


### Bug Fixes

* 解决table组件，表格上方操作栏按钮过多换行问题 ([2f4c0bf](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2f4c0bfa62daa66f8df2140bec98545e8736bdd0))



## [0.2.8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.7...v0.2.8) (2021-06-21)


### Features

* 针对125%调整搜索框自适应布局 ([9605195](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9605195cd87922c202b01d1b48d18f1666c0051b))



## [0.2.7](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.6...v0.2.7) (2021-06-17)


### Bug Fixes

* --story=1017388 --user=wanglingzhi 详情组件样式完善 ([1871241](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1871241d0371e5069133db1e9e13a0ae2f9ec61b))


### Features

* 修改文件链接的hover样式 ([04372d0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/04372d0907df9eb2a97155eb74669bd17937a709))



## [0.2.6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.5...v0.2.6) (2021-06-16)


### Features

* 表单搜索层级数据深拷贝，避免分页同步 ([a0eb728](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a0eb728eceb64558170ee5c963708056f566947e))
* 表单搜索层级数据深拷贝，避免分页同步 ([46b9f8f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/46b9f8f16f34b4960e24e05696858605d5013e32))



## [0.2.5](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.4...v0.2.5) (2021-06-16)


### Bug Fixes

* make line-height inherit, comment text 12px ([f90671e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f90671ec7b16eccea01cc6cc91f5818390ffbba4))



## [0.2.4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.3...v0.2.4) (2021-06-16)


### Features

* add default PREFIX ([032a172](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/032a172b7290136c58a8a277801fc039c382f1a8))
* update cookie default PREFIX to MD_ ([0130137](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0130137e5804e225f3b1a3a914dfe40357235aef))



## [0.2.3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.2...v0.2.3) (2021-06-15)


### Bug Fixes

* remove console ([194cae6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/194cae6fbae71e781b0721d764221ce622a909a5))


### Features

* add comment below image ([415de59](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/415de597fad81dd053b604ad5697e1893f09bc3c))



## [0.2.2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.1...v0.2.2) (2021-06-11)


### Bug Fixes

* 1.修复form-item设置labelWidth无效的问题；2.增加el-form和el-form-item的原生属性自定义;3.修复展开折起按钮不居中问题 ([bf4b024](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bf4b02468aa0d10a0544869bf7a86eba774ea65d))



## [0.2.1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.2.0...v0.2.1) (2021-06-09)


### Bug Fixes

* 补充Number类型 ([37958be](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/37958be77baf1867bf9c8f91db5b15e22f450b47))


### Features

* 添加请求方式区分，首次进入0时，不调用查询接口处理 ([8112409](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/81124096847464e4c6e1770d967a8ad309b490eb))



# [0.2.0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.69...v0.2.0) (2021-06-07)


### Features

* 添加viewer 到上传组件图片预览 ([d44d01e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d44d01e41bf5319006180e256e74b873c278b6bc))



## [0.1.69](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.68...v0.1.69) (2021-06-07)


### Bug Fixes

* fix error when fileList is null ([3f013f8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3f013f859b913d95e0e93b3eb5087f5fd3eb9ddb))



## [0.1.68](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.67...v0.1.68) (2021-06-04)


### Bug Fixes

* build 成功才执行publish， 调整push changelog 和 tag的位子 ([3ccf4b3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3ccf4b3f0c8a3b30f5b3991ef1800365ecd8b517))
* 优化UI规范搜索框一 行小于1440/3个，大于1440/4个，因col布局规则不一致，根据分辨率响应lg变化 ([ba594fd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ba594fdffdfbd5fdcefc3f420521979de42d0636))



## [0.1.67](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.66...v0.1.67) (2021-06-04)



## [0.1.66](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.65...v0.1.66) (2021-06-04)



## [0.1.65](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.64...v0.1.65) (2021-06-04)


### Bug Fixes

* 去除多余的expand代码组件插槽 ([a811397](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a8113975ad26230176423c0c7fb689095acd1de7))
* 解决深拷贝导致外部数据被变更的问题 ([ee480c9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ee480c9aebf5859557e6713e6ba38fa3fdc49231))



## [0.1.64](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.63...v0.1.64) (2021-06-03)



## [0.1.63](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.62...v0.1.63) (2021-06-03)



## [0.1.62](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.61...v0.1.62) (2021-06-03)


### Bug Fixes

* 兼容详情没有raw的问题 ([bb1ef57](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bb1ef572a18311cf949dae6525384ffccfa29a81))


### Features

* revert.ci ([5ac6dc4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5ac6dc4f91315365e68f1d194c215a27a9fbe449))
* test ci ([b1b811b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b1b811bae8e1227b8e9e91acf279f3edd45a84bb))
* update ci ([b7116ce](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b7116cea6c401e6ef4db573c532e8ec8eb6bbfd0))
* update gitlab-ci ([7fa5e93](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7fa5e935036baba720fa67410006de357aec3c4e))
* 支持图片pdf 同时以图片形式展示 ([7e56f9e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7e56f9e7770b195daad4833f3831d4cbc14f59ea))
* 添加rollup/plugin-image,非dev环境执行uglify ([9128530](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9128530b8a6f5ac3a91d6d9bd06f6a4571126ebd))
* 用cdn 图片 ([04bf2ad](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/04bf2ad9e48c4216f596582e47d1ca3740b20236))



## [0.1.61](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.60...v0.1.61) (2021-06-01)


### Features

* 表单搜索支持层级数据 ([dee889c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dee889cd67937bc2cd15ee39c0f01430b32fdb0c))
* 表单搜索支持层级数据 ([c7d6ff7](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c7d6ff7eec88c6dc4997d56acf2fbf689facf661))
* 表单搜索支持层级数据 ([c90ebdd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c90ebdd3535884ef4dd1ce079cc7ad1eebdc0ebd))



## [0.1.60](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.59...v0.1.60) (2021-05-28)


### Bug Fixes

* select没有传options值时，不执行下方代码 ([9785f47](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9785f47a3e0aa14fda74a6603f9c9104fa9a09c7))
* 判断options值为数组时，才执行 ([9f09340](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9f093409fc1b902e7d3a325cce27565c4bd916d9))



## [0.1.59](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.58...v0.1.59) (2021-05-27)



## [0.1.58](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.57...v0.1.58) (2021-05-27)


### Bug Fixes

* 容错处理 ([7023fb9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7023fb93118986cbf15063de51eb92db0408fe55))



## [0.1.57](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.56...v0.1.57) (2021-05-26)


### Features

* 大数据导出平台增加级联选择的转化 ([6fca43c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6fca43c1867caf00f9f19cc4a3170ab27ca45e37))



## [0.1.56](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.55...v0.1.56) (2021-05-26)


### Features

* update current version in msg ([fe994f9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fe994f90e69c6063a64d4aeb7504f9676ef72fa1))



## [0.1.55](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.54...v0.1.55) (2021-05-26)


### Features

* 大数据导出转化方法里，input如果没有label,就取placeholder ([99d8c88](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/99d8c881d03097e901bf2132032393ae49412613))



## [0.1.54](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.53...v0.1.54) (2021-05-25)


### Features

* update notification message and version ([1dd6b7b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1dd6b7bb2770f5b31bec345bb902c87e4851c599))



## [0.1.53](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.52...v0.1.53) (2021-05-25)


### Bug Fixes

* revert code ([49f6d35](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/49f6d35d33f918f5ac0764414e5f51613eddaf9f))
* syntax error ([eb8c539](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/eb8c539b00150f4cf02140272e3dc104f6de8501))


### Features

* before commit, check local status. ([5237ac6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5237ac65eb4a5e8f463212168c74fe0f0fd2e279))
* update msg ([c05a409](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c05a409aa9ed10b389660e3203667f9f8d7d260c))



## [0.1.52](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.51...v0.1.52) (2021-05-25)


### Features

* update ci, notification and publish ([be86ddb](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/be86ddbfa6ed10f79cb36c306ae1d61838f6d227))



## [0.1.51](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.50...v0.1.51) (2021-05-25)


### Features

* 搜索重置增加自定义事件方法提供 ([348ccc3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/348ccc39b33b6e3adf428251e9fc3f551d179b74))



## [0.1.50](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.49...v0.1.50) (2021-05-24)



## [0.1.49](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.48...v0.1.49) (2021-05-24)



## [0.1.48](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.47...v0.1.48) (2021-05-24)



## [0.1.47](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.46...v0.1.47) (2021-05-24)



## [0.1.46](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.45...v0.1.46) (2021-05-24)



## [0.1.45](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.44...v0.1.45) (2021-05-24)



## [0.1.44](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.43...v0.1.44) (2021-05-24)



## [0.1.43](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.42...v0.1.43) (2021-05-24)



## [0.1.42](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.41...v0.1.42) (2021-05-24)



## [0.1.41](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.38...v0.1.41) (2021-05-24)


### Bug Fixes

* 解决label中间空格换行问题 ([e030e78](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e030e7894edfecd2a50e542f7b7c8301b5835029))



## [0.1.38](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.37...v0.1.38) (2021-05-24)


### Bug Fixes

* add tags ([f983bda](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f983bda1816c7fd2a9e01b91b4ff6f6f443eba6f))
* commit branch ([ea7f6a0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ea7f6a08ff47ae9d38619936d605f9c2e5794500))
* fix 路径 ([76df5b9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/76df5b94dbede457ef9f7a51480ea7fd13892948))
* remove sudo ([9199b20](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9199b20138743ed8e8a7dc785be459a1072d904a))
* tabs组件dom元素同步更换class名 ([c4559c4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c4559c427e07bddba6ef593bbf29126725b2fd54))
* test commit branch ([6b78000](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6b7800013f5441d1e2ee82018c4508eb745ef49a))
* test push ([e441001](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e441001b02d1380f4e337a34a88c86363e43c57a))
* test push ([7008883](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7008883c07c857c5af9c3d63ed86dfe2851afc2b))
* update package.json ([b06eecf](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b06eecfef8ac4aa7aee60528d66b9f562f2953d3))
* work in workspace ([7ca7ce4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7ca7ce471a9417bfe7b0679abcfb11264578751b))
* 全局替换element-ui依赖 ([24a5f41](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/24a5f41571c0f0678d59efa8f08dcb77c1b2f49f))
* 提交 ([80de8c1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/80de8c1b2892f0981e883eefa350821b606ce2e0))
* 更换runner ([d17c05e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d17c05e54ad876997e2d7428fb54d8dc1b9e2ec8))
* 测试before script ([d01c4fd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d01c4fdb21c58c77f86e29887b80e2f84e3c0f72))
* 测试分支提交 ([079bef9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/079bef965e3418db1040e63fe864024f237ff8b7))
* 测试权限 ([29a6924](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/29a6924d45daed1ec507ab5c5437a7417da04029))
* 继续用element-ui ([9c412c4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9c412c402795268e8f821a4f4dfee50b957dd3ca))
* 详情组件样式更改 ([7c934a8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7c934a8b29b3895bb986123e2bb0537c4ed4f76a))


### Features

* add three ways of pulbish ([afc4a2d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/afc4a2d05028bb33be16706d153c883ae043958f))



## [0.1.37](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.36...v0.1.37) (2021-05-20)


### Bug Fixes

* notification on master set to manual ([fef3e4f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fef3e4ffdffeb5b28319951b940c4e90fec62a40))
* test push ([9370798](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/93707989099cbc0f3098e3ad632032dbe19e174b))
* 修复搜索数据事件处理及添加布局自定义，命名规范优化 ([0558711](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/055871153a25863ab85980ac9b2c6da2010d19bb))
* 去除多余的height:100% ([2878957](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2878957f62cef46bad939653f5b326ef8e2145b6))


### Features

* test push ([e79673f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e79673f9c842b7b032eed09758604e5fe40f4be3))



## [0.1.36](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.35...v0.1.36) (2021-05-19)


### Bug Fixes

*  pull master before send msg ([9ab753b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9ab753bea49492fc2a4bed6db5dc043de4b0f09a))



## [0.1.35](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.34...v0.1.35) (2021-05-19)


### Bug Fixes

* don't send msg on master ([de257be](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/de257bef2471b74a5cf71e44339dd90446afed35))



## [0.1.34](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.33...v0.1.34) (2021-05-19)


### Bug Fixes

* when send notification update to master first ([cad0e59](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/cad0e596a0c36b8ec9801a2e3a935e110f534267))
* 测试消息 ([a91dab9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a91dab924ec583fe2704820ca90decfca10b3e97))



## [0.1.33](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.32...v0.1.33) (2021-05-19)


### Bug Fixes

* publish 在tag 分支上自动触发 ([1a24c14](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1a24c142f5b5b73f731b3e112db2896541e0264c))



## [0.1.32](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.31...v0.1.32) (2021-05-19)


### Bug Fixes

*  测试消息 ([0a347f0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0a347f0508fd802c02d47550f2c7b1fe9c31a9bb))
* add quotation ([b33cb27](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b33cb2769709b47e0e5c84cc2dfea2021a3b2824))
* ci  参数设置 ([903b734](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/903b7344b1c4d145e6dd5206e0f90e29347256d2))
* fix ci script ([80f6e7e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/80f6e7ef38ad935a26928fd7355b333f86364100))
* fix git log output ([64e23e4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/64e23e432777a83b9c3a97631b754028de345d60))
* fix publish syntax error ([4c5d739](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4c5d73939bfb65aaa15e22533e91025469d20649))
* remove uselsess code ([80b2c94](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/80b2c94c052a2c82ef2f9a3918f12dd3ad96c737))
* test git log ([68caa2b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/68caa2b446df759d26f5b709e199b01db60529ca))
* 修复消息参数 ([d2b33da](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d2b33dad711e15a393ea5d28cf5dc6fb58d8fa3d))
* 修复第三个参数 ([9f45c7c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9f45c7c13d2655122fc07b95fe0d1a59b233839c))
* 修改信息 ([b0566a0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b0566a0467dd52048b3094926b6bb2d44343e062))
* 修改消息 ([8ada07d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8ada07dccb58354ba1433398e90a85be96ff3a9a))
* 修改消息体 ([a967402](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a967402ca5e8991d739e2afbec666e066f0f7067))
* 去掉commit id ([4bebb2f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4bebb2fdb683096081ceb5abd5fdae0a056881cf))
* 测试commit 信息 ([3db4cc3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3db4cc391f6e20152c9574a41a71ef69f2cb8230))
* 测试冒号消息 ([7effca9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7effca9493acd156c4bdd1a5bb5838d5a3e3a519))
* 测试消息 ([bbbd1d3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bbbd1d3055dd4ecc0f9c76a7a7b5bdfb9f5827f2))
* 测试消息 ([565766e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/565766ea9e979090291a123295fbb6baf6dd38ab))
* 测试消息发送 ([61c852c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/61c852ce737327f10114e2ca6f94530a9a81ec38))
* 测试消息格式 ([4639378](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4639378f5cfe9977fa5a70bc771cbff04b84173d))
* 测试静态消息 ([b104e57](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b104e574d5c914652a7afaceb250b7fbe4f4e47f))
* 消息体内部冒号识别问题 ([d5da9f0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d5da9f07a5e686eba925b5a8fa06083a1f0d8461))
* 调整消息格式 ([792963b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/792963bb283fbf600ad9edf209e1beae73f6b067))


### Features

* 测试git log in CI ([4d2df1c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4d2df1c61f4aea486456545c9a9e2b9d8a162872))



## [0.1.31](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.30...v0.1.31) (2021-05-18)


### Bug Fixes

* update notification ([1fc66c1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1fc66c13b426cce026a7fd66f067645a30f33980))



## [0.1.30](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.29...v0.1.30) (2021-05-18)


### Bug Fixes

* update ci publish ([0902661](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0902661409da98632da0a8104158d7bc7c17eccf))



## [0.1.29](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.28...v0.1.29) (2021-05-18)


### Features

* updat ci ([dd82834](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dd828340bb0f68e8e61e2848596badbb3442833c))
* 添加commit 信息 ([ac82a21](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ac82a21e69c6e87c33bb37cb6a3aa3fd59341d22))



## [0.1.28](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.27...v0.1.28) (2021-05-18)


### Features

* update pizza version ([b35e71c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b35e71cd97e37d60da4cad528ec6b610b5d731a7))
* 添加微信机器人 ([179be2c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/179be2c64b41aec77538ada7fb73ea148d0e9fcd))
* 添加文件类型判断 ([09b5e39](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/09b5e3945304e80be3c2e885c57e835f487726dd))



## [0.1.27](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.26...v0.1.27) (2021-05-17)


### Bug Fixes

* cache里slot取name问题导致监听失效 ([3946766](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/394676603be5921bc6a53f35a0e81579ba0771d3))



## [0.1.26](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.25...v0.1.26) (2021-05-14)


### Bug Fixes

* cache保留 ([42e8792](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/42e87927aff9602e703df66021da298a782918f0))
* 去除冗余代码 ([13bcef9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/13bcef90e9de2209a34195018bfe7bb9447e9334))


### Features

* tabs全部与单个切换时，添加keepAlive属性配置，命名规范 ([d6303c8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d6303c85b0a47ea3480fc7b82cc387c6c5bc5dfa))



## [0.1.25](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.24...v0.1.25) (2021-05-12)


### Bug Fixes

* 修复搜索框统一高度form-item ([0c5d74e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0c5d74ebd32c0661204b06624dd0111895f722ae))
* 补充search显隐hide属性丢失问题 ([4eea00f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4eea00fc5ac40541a044bd9fb6296a607dc7f0f5))



## [0.1.24](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.23...v0.1.24) (2021-05-12)


### Features

* 允许修改上传按钮文字，超过数量限制不显示按钮 ([a6a2350](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a6a235068969e4304fa0dc19d5632d456e9bd888))



## [0.1.23](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.22...v0.1.23) (2021-05-11)


### Bug Fixes

* 优化不同类型控件描述处理，高度默认自适应 ([e5f5a8e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e5f5a8e0bc35296c88c445739f74d3fc60f211bd))
* 调整搜索slot位置及table为0不作处理，通过css給-- ([7f628be](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7f628be5577816cb6a53bd25778a54d807476006))


### Features

* update release ci ([fe9cf6c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fe9cf6c32f03d3c18acbec7c8f3caae597ec5fca))



## [0.1.22](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.21...v0.1.22) (2021-05-10)


### Bug Fixes

* 修复select多选时渲染高度问题，默认给定所有控件size为small，符合UI规范高度 ([a1cc293](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a1cc293feffc4762a601c2c8133f76ad9c0abd38))
* 完善formitem参数及获取搜索枚举对象值 ([c670e21](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c670e2117eee95fe403725659776007c34ea8bb8))
* 搜索框布局根据UI规范制定超出屏幕1920px一行为4个，低于1920px为3个 ([4255f96](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4255f962559a58a6340bf4d629b6edc509063f9d))


### Features

* 监听ref里的form方法属性，暴露派出实现 ([2c240d1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2c240d1c98b1ca2f20089b42ce6342b96701a424))



## [0.1.21](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.20...v0.1.21) (2021-05-06)


### Bug Fixes

* 解决table及search动态适配监听方法导致渲染更新问题 ([381a277](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/381a277744ae78a3e59213756572f05652604849))


### Features

* 支持cache保留原组件及高度48px优化 ([5dc4efa](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5dc4efa68353108d448236bdeb05dc6cf71dfd92))
* 添加表头自定义slot，列为空給---默认值，解决获取refs节点深问题 ([bdc5ae0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bdc5ae0b5f61a1c8f860a536c66dea2a9371f3e6))



## [0.1.20](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.19...v0.1.20) (2021-04-28)


### Features

* add CI release script ([6f23222](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6f232221a5cf0e0a24642def5498ba7d391004b5))
* change UI lib to pizza ([dc84a4a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dc84a4a5b6e8c9acd7b5269ecb6a246b644bf930))
* update yml ([04c7a14](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/04c7a1498f50f2e99ed7550edd3fc76cfa1260de))



## [0.1.19](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.17...v0.1.19) (2021-04-27)


### Bug Fixes

* remove set origin url locally ([3adba9e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3adba9e0da6f87b169fc0c586910cc1e34041b18))
* 详情组件样式调整 ([327ad65](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/327ad65cabd3b16d7ec1eff69db539f8c3d98576))


### Features

* update package-lock ([dafe17a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/dafe17a0319871de46cc286eba3f57902a73bbe6))



## [0.1.17](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.16...v0.1.17) (2021-04-25)


### Bug Fixes

* select自定义placholder ([e7f44eb](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e7f44eb23be07f6bb96e9a4a681cc7d47e3e4181))
* table里maxHeight为false时，不使用自动高度 ([be6adaa](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/be6adaa12fa2b92cb608dffabe89f6bf10fb7f28))
* 增加分页默认自定值 ([958140a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/958140ae1a7af042839a30c7ab46e759bbb34d9a))
* 解决打包时出现的警告 ([46190cc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/46190cce9abd2f37987619e293c81cdd524aa483))


### Features

* update commit info ([9b8e406](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9b8e406f442704fc152c9b1c74fb6226a5fdb9d5))
* update pull with rebase ([c710470](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c710470ed5534c0de57d1284f165828e83bc4576))
* update release ([5a62a7d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5a62a7dd296bd85dcb1e98e7759b7c94ff158539))
* update user email ([27c992c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/27c992c8a7d95d2aef0112d66dc2fb59c3ba238d))
* 发布放入到ci ([1a20c40](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1a20c40a345e6034dc69940a18e012fdb84c6b75))



## [0.1.16](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.15...v0.1.16) (2021-04-22)


### Bug Fixes

* 详情组件table判空处理 ([1f4e4dd](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1f4e4dde8cfcde88139ad97b4841f81b1cde7316))



## [0.1.15](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.14...v0.1.15) (2021-04-21)


### Bug Fixes

* res回调处理空对象及story补充 ([0204054](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/02040548033ac9957091a40e3509b80d6fc52b17))
* 搜索布局优化及select里key换value取值 ([3d800bc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3d800bc74945a1ba664a809ec4e7e528bee4e2dd))



## [0.1.14](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.13...v0.1.14) (2021-04-21)


### Bug Fixes

* 优化解决maxHeight高度控制问题 ([a6e5693](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a6e56938d0b778b95eff87dbaf725160ca319046))



## [0.1.13](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.12...v0.1.13) (2021-04-16)


### Bug Fixes

* formSearch默认字段值回显，提供itemAttrs自定义属性 ([43a7873](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/43a7873dcbdec4bd5cc52c1f6efdc1a3ce8f949c))
* 搜索框级联控件设置100% ([03aecd3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/03aecd38c2b5f065f89f808fb3c2b05e2fa7c93b))



## [0.1.12](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.11...v0.1.12) (2021-04-15)


### Bug Fixes

* $message替换Mesaage引入方法 ([30e8919](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/30e891936035bf5da4bdd47c4c04b6562adf3c1e))
* remove css link ([44b3401](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/44b34017cba724c0a1dcd1b2318fe973ddf867ca))
* 去掉跳转方式，不支持this.$router内置方法 ([f6e82c4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f6e82c4769e0c02556839084de3a1dd9bc505b42))



## [0.1.11](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.10...v0.1.11) (2021-04-15)



## [0.1.10](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.9...v0.1.10) (2021-04-14)


### Features

* change default action ([4cbd021](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4cbd0216d6454fa5d1cb08c1a8e253a2d27d4146))



## [0.1.9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.8...v0.1.9) (2021-04-14)


### Bug Fixes

* remove $message ([bb795ad](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bb795ad591c52b070a6821efd05bbb4bc9582bc5))
* 修改onReset重置不更新问题 ([bd5aba8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bd5aba85fd2ae7aec967d86bcb28113744dede51))
* 修改tip方法使用$message提示 ([c03618e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c03618eb6ab03387eca18869de253367539d0d85))
* 指令存在才执行 ([3a7000a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3a7000ab03779b6aafe5d2dc2ce88943c7fbcb56))


### Features

* don't lerna publish when release ([766117f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/766117f6ac7c9a03f4afed250ba7f212dfccaaba))
* import element theme, use Message instead ([c9f8e28](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c9f8e28a426a0fbbe82073b0151dd8e2670c7f36))
* 修改打包配置 ([23bfd6e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/23bfd6e8ae476713abdf4c2e9ad8570d6c8447df))
* 完善打包配置 ([85fe483](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/85fe483380760689b39c7377b12a000a9fb7eb04))



## [0.1.8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.7...v0.1.8) (2021-04-13)


### Bug Fixes

* 底部按钮层级放低，避免遮盖左边导航条 ([7b3c7a0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7b3c7a0be9d6607514c15a67470f8b5f8f56946a))
* 详情组件值为0时需要特殊处理 ([c8e01e3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c8e01e3e08af038a264a9df05b898c7ddd083a35))



## [0.1.7](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.6...v0.1.7) (2021-04-12)


### Bug Fixes

* 修改formItem引用控件路径问题 ([ff9471e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ff9471eb0c1d0fd187f834cb06f36563b1e3abde))
* 去除不必要的文件 ([42b87d2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/42b87d2018cce84e3f82d09e88720de9c47a4ff1))
* 更改form及search，select，time版本为0.0.0 ([297daf6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/297daf6d835da4e718de7422e344a555e9abcc87))
* 更改业务依赖路径为相对 ([4eaa6f9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4eaa6f9a2ba5782b7cc6316dacea0bac4df8b1fd))


### Features

* script补充componet导出 ([5837261](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/583726159b2a5f8195aec24428b30afd4eb26838))
* 添加基础业务组件库 ([be61244](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/be612441e564f29b282c5ad4b568bc68eb86b7af))
* 添加搜索组件依赖 ([f5f5723](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f5f57232cf04fc49d081c4e5d242f46cefe39cd1))
* 添加搜索组件依赖 ([0544d32](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/0544d326770883c2de5f1ce54e4c6df3fa7ba417))
* 补充tableSearch及formSearch的api ([4868684](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4868684d3e5104c769e3b0b61f7ba2ecb1cd105c))



## [0.1.6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.5...v0.1.6) (2021-04-12)


### Bug Fixes

* table增加指令v-loading以及v-virtual ([3b43713](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3b437130e1c77dbb531d92ac18cfcc3fa3d1f700))
* 底部按钮层级增加 ([df77627](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/df776279dfb2b84f8a43e8439a7c47948f7acc27))
* 解决组件之间slot作用域问题 ([613d59f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/613d59f436cdc48034c6a7d9aecc9bcb97b8a9f0))



## [0.1.5](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.4...v0.1.5) (2021-04-08)


### Bug Fixes

* 日志组件，引用名更新为fcRecords ([5cc9b40](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5cc9b4029bda6ed6b4f5c2f5ec75a437416a4a95))



## [0.1.4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.3...v0.1.4) (2021-04-07)


### Features

* update notification message ([a97c9a4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a97c9a40fbe38d96c7231473a659603e254d4982))



## [0.1.3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.2...v0.1.3) (2021-04-07)


### Bug Fixes

* 去除操作日志的border ([cd7b04c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/cd7b04c30572e041a065473530b5f6e987d56aa2))
* 文件名规范 ([ea63495](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ea63495f33fb81ce9eda9f9edd73f0fd178a59e9))


### Features

* add judgement for commit ([121abc0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/121abc03ed9dca864b580446ed477d955afef925))



## [0.1.2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.19-beta.2...v0.1.2) (2021-04-07)


### Bug Fixes

* 操作日志的时间展示，改为用dayjs ([44f3336](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/44f33363181397109966b80297fafccd0cf3a60b))
* 还原package version ([fc9c17e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fc9c17ee560c09c1532aa24f1ea0d809ea8ed6a4))



## [0.0.19-beta.2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.1...v0.0.19-beta.2) (2021-04-07)



## [0.1.1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.1.0...v0.1.1) (2021-04-07)


### Features

* update login platform name ([f4f7ac8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f4f7ac8a42ccb6c35f4e3845106ea8d9588271f5))



# [0.1.0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.19-beta.1...v0.1.0) (2021-04-07)


### Bug Fixes

* 操作日志改为单独的组件,再引用 ([5d8e02d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5d8e02da164202239fd490935327991617fe3cef))
* 详情组件增加slotName属性 ([5114198](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5114198be690a18bba838522ca3b391e1c1089a4))


### Features

* 1.详情组件拆分出独立子组件 ([5282af2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5282af262c99406d520e0ee1bf5ab017d1f10d2a))
* change back version ([bbf517d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bbf517db865cc1d04562e727fd2907b46a0519bb))
* 详情组件 ([604a24e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/604a24e9e2a3ec688a9c88235a6d32531f8d0403))



## [0.0.19-beta.1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.19-beta.0...v0.0.19-beta.1) (2021-04-07)


### Bug Fixes

* change back tag ([750e86d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/750e86d722dea62d904853dcfcd028a83aac28ac))
* change beta version ([36a53d2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/36a53d258840768ccbfb781a4493b39ddb41100d))


### Features

* update action url ([fd37f14](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/fd37f148bf7b2ecdccb9d0d51a1e5a71f9eb83b8))



## [0.0.19-beta.0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.19...v0.0.19-beta.0) (2021-04-07)


### Features

* allow only master to publish ([2f8c03a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/2f8c03aca08c5b6bdc51922a94d490b30fae6c4a))



## [0.0.19](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.18...v0.0.19) (2021-04-06)


### Bug Fixes

* hide remove when disabled,  coop token update ([446ea69](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/446ea692a07368a8ea5d8ceaf102ca0e3c667fe1))



## [0.0.18](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.17...v0.0.18) (2021-04-06)


### Bug Fixes

* add hide ([b767aad](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b767aadcacf40b474d7f57de2f4bb9a15e8e6bb4))



## [0.0.17](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.16...v0.0.17) (2021-04-02)


### Bug Fixes

* remove  code which is tested ([7d986b1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7d986b1a89133b081c388a5f74a5605a3da5fb40))



## [0.0.16](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.15...v0.0.16) (2021-04-02)


### Bug Fixes

* formSearch引入formItem解决 ([291325c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/291325c63a111c461e754f4d182870258f39d43d))
* release syntax error ([da791b9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/da791b9e89b0d9e0f32dbb556664b47de1d785c1))
* tableSearch添加formItem搜索条件 ([d00dd9a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d00dd9aa16461967a4d440decafb5b992c8b8ab3))
* tag publish automatically ([7e698d6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7e698d678b17bf8ca4928c6afe3714ad104efe89))
* 优化命名规范，添加前缀fc标识 ([971cc52](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/971cc5235451a08128404e52897d6fad443ee7b4))
* 去除不必要的文件 ([8490766](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8490766ac6b6a13f134702e6ea1f5c7f32b9b07d))
* 解决tableSearch引入依赖formSearch库 ([c583f4f](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c583f4fcb68fdad2088474718752ff1e63f901bf))



## [0.0.15](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.13...v0.0.15) (2021-04-01)


### Bug Fixes

* bug ([c5aa87d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/c5aa87d19e0223d0083f3594d3b3a2f23e15a546))
* ci.yml ([eac134a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/eac134a66fb09eb5dc8577e3413ed510e7d52312))
* ci.yml ([4df681c](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4df681ca79235ed4cce7ec013de7f5ae3bbecd57))
* remove console ([57eb1ea](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/57eb1eae725063f6bc9cfa45e758aeeb4e3f7bd4))
* update publish ([92d6d22](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/92d6d22ad0ac338c5d477de61899e7a3d26aeb58))
* use path resolve ([eaec1bc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/eaec1bc4b62511217ab55f06a51c067112758ee4))
* 当发布成功才执行，且显示version ([7cb0cb9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/7cb0cb9b8eef96488f39aef7ee3f8896420d94c2))


### Features

* update release ([3a26638](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/3a26638a31b94a91ce7aa8a280b8144523cf7038))
* update release and change publish to notify ([78d5c92](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/78d5c927c2c094f0068c5e9352ba4fe3afad04e9))
* update yaml ([1a9d2f6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1a9d2f6332cd1a80715659806a0b28bdd8d99179))



## [0.0.13](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.12...v0.0.13) (2021-04-01)


### Bug Fixes

* ajax callback ([95e5c37](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/95e5c37b7b9acc7be94a002f51cd97a7f5a4a4dc))
* 修改package包名统一 ([4e46020](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4e4602033029df6dbfd10733f6364c15ac7748c7))


### Features

* 引入form其余控件 ([e3d9297](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e3d9297c8df66b904bbea25d00d21e1e36b9b163))
* 新增form及table业务组件 ([5d529e3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5d529e3f5327167413a339d65d82f458c05a230b))



## [0.0.12](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.11...v0.0.12) (2021-04-01)


### Bug Fixes

* tabs组件注册 ([a9606c0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a9606c0c0adc05f0305117e51f3d984845298e4c))



## [0.0.11](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.10...v0.0.11) (2021-04-01)


### Features

* comment commit command ([f3fa2d0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/f3fa2d041e760de0f4c6d29abaff302936df2aa6))
* 支持业务中status 为200的报错提醒 ([9b71b02](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/9b71b02042210b867006a6735f96cb24f6b0e4ac))



## [0.0.10](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.9...v0.0.10) (2021-04-01)


### Bug Fixes

* init tab version ([604a583](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/604a583519157d4dff7ff599121ef89dadae40ea))
* 将tabs组件导出 ([b06e0ad](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/b06e0ad8b59039ccec4afac6ae2f5dcef88bcf58))
* 更改组件name ([8ed24b8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8ed24b8228682a11108636825e1180979ae1b0d9))


### Features

* tabs组件 ([23c26aa](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/23c26aaf074e88bb68e636c700dcaea85beb6bda))



## [0.0.9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.8...v0.0.9) (2021-04-01)


### Features

* add form disable ([cd98bab](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/cd98baba0686285c682af61489831b88714c0888))



## [0.0.8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.7...v0.0.8) (2021-03-31)


### Bug Fixes

*  删除cookie 中的json.parse ([a8f7ed4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a8f7ed41df2a1b64faf8f5e8d1fb0b69fad8b057))



## [0.0.7](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.6...v0.0.7) (2021-03-31)


### Bug Fixes

* remove default in index.js ([40706f1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/40706f17a54a482e5e50ef774f89f94c16ee84df))



## [0.0.6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.5...v0.0.6) (2021-03-31)



## [0.0.5](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.4...v0.0.5) (2021-03-30)



## [0.0.4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.3...v0.0.4) (2021-03-30)



## [0.0.3](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.2...v0.0.3) (2021-03-30)



## [0.0.2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/v0.0.1...v0.0.2) (2021-03-30)


### Bug Fixes

* add token, fix post error ([1e45e29](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1e45e2967ce20bcf7ac78ca831327050cca8dc1e))
* fix handleError ([e3d030a](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e3d030a2f060391716c4556d6742fd3a4b3d09cc))
* get token name correction ([11504df](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/11504dfeaf7c3ccbe0c7702c599f633866916563))
* header 中登陆平台参数修改 ([52db8a4](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/52db8a49ecb9976fbc186e6f4f47ed30e6a95654))
* icon style fix, accept value, slot position ([753084b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/753084b51e9fd2de805da2b69bbecdc34f5796fa))
* remove action required ([15b7f07](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/15b7f0713cd8c9e9a0b5d361f14044b3f8423af6))
* type 为 picture 进度条显示问题 ([86e2e42](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/86e2e42607c611d2d9ded21fe273f16d52caca47))
* update release command ([71076ba](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/71076ba0149cea103973b9a7468ed0c4ff3222c6))
* update release command, change tips position ([d939413](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/d93941389a3437ce7640fd0f5e5d6a641881936f))
* 添加limit， size 默认值，修改参数名 ([93ec785](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/93ec785fde5b6c981172608f115f59285c1a34f2))
* 超过大小没有报错 ([12f370e](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/12f370eb7262682e9df284b1fdb5778bfc5fb29d))


### Features

* add default action ([634a6b0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/634a6b02a802ab88a34850c106ab99c9df9e8d7e))
* add showFileList prop ([1e275e9](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/1e275e98014df75f856923fcafb5a78ef7cbb8fd))
* build and publish ([4fc64f0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/4fc64f0e67116c29ec851554483eeec7aa66b35c))
* integrated with rollup ([5a15179](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5a15179dab97c859ae8d6b2b8331f5458a7bc732))
* maxSize support MB ([77c5ad2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/77c5ad24b6e6b65c4d90c4ea6c468c0eab46ee16))
* remove allowBranch temporally ([902d309](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/902d309171cf010362247538dcbd60c9395b1af1))
* rollup config ([bb8126d](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bb8126dc7335beba77336ba6691f313730d4f215))
* 上传前校验size，统一超限tips, 支持删除文件再上传 ([659a340](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/659a34065f4bc1c602f94e22624b8af3d8f49fc0))
* 增加autoUpload props,宽度100%,fileList error ([8b3825b](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/8b3825bdd5cf34cb0f27f36fdaf6a5d9a5106b63))



## [0.0.1](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/compare/6c41754047d6f922d5dde6c9fd03d27eec8e105f...v0.0.1) (2021-03-22)


### Bug Fixes

* upload src ([e6d92f2](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e6d92f223a1aad5a2a7252c350103f0c7990195b))


### Features

* add build feature ([26085c8](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/26085c86dba51cc574ba1fe4b90e29fe5fec0d8e))
* fix less loader issue ([24778cc](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/24778cc4a1c583e619989386eb7e44313fa542ff))
* init biz components repo ([6c41754](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/6c41754047d6f922d5dde6c9fd03d27eec8e105f))
* remove progress file ([83c67e0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/83c67e09a346a55fbc88585cba7663ec7061682f))
* update package name ([ebed9c0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/ebed9c05d025eb19f7cc7712dfd03a3ce9d85b74))
* update publish message ([5402c33](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/5402c33608ef7cc681330c6eb4b1fdd1822beed0))
* update style ([45cbbe0](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/45cbbe0a8c81cbf10a1f26f1c13999af4c26bc17))
* upload 部分及less 配置 ([e15a982](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/e15a9826948dfe1e07940def4c23392ba7eaf76e))
* uploader style ([bc9ffff](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bc9ffff68942ee15371183c6383192877a7611a1))
* uploader组件完善 ([a8f6b05](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/a8f6b0508fd28c42b01c9773adc1a1e51a4eb8c5))
* 调整目录结构 ([816d1b6](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/816d1b6611620e9985faaa90d65d58f5e3f57029))
* 调整目录结构 ([bc13260](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/commit/bc13260c9dc44fc280f96eb48a5bcddbbab32ac4))



