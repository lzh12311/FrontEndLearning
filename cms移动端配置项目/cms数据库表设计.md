##### 应用 【application】
id   | name  | application_string
-----|------- | --------
##### 页面 【page】
id   | application_id(外键) | name |cover(封面) | page_type(页面类型) | is_abled （是否启用）| page_string |update_time |create_time| creator（创建人）| share_desc（微信分享文案）| share_image （微信分享图片）|
---- | --------- | ---------|----------| -----|-----|------|-----|----|----|---|---
##### 组件详情 【components】
id | page_id(外键) | component_string | sort | name （组件名称）
------ | -------------|-----| ----------|--------------|-----|----
##### 用户【user】
id | user_name(用户名) | password(密码)
-----|-----|----