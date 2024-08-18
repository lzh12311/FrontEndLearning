##### 应用 【application】
id   | name  | application_string
-----|------- | --------
##### 页面 【page】
id   | application_id(外键) | name |cover(封面) | page_type(页面类型) | is_abled （是否启用）| page_string |update_time |create_time
---- | --------- | ---------|----------| -----|-----|------|-----|----
##### 组件类目 【component_group】
id | name |update_time
---|------|-----------
##### 组件定义【component_definition】
id | group_id(外键)|name|component_key|update_time
---|---------------|----|-------------|-----------
##### 组件详情 【components】
id | page_id(外键) | defin_id(外键) | component_string | sort
------ | -------------|-----| ----------|--------------|-----
