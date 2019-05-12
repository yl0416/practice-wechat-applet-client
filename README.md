## 功能
#### 发现
- [ ] 浏览同学们发布的tips (GET:allTips)
- [ ] 查看某一tip的评论 (GET:comment/tip/:id)
- [ ] 删除某一tip的某一评论 (DELETE:comment/tip/:id)
- [ ] 对tip进行发表评论 (POST:comment/tip/:id)
- [ ] 给文章点赞 (POST:comment/tip)
- [ ] 踩文章
- [ ] 给评论点赞
- [ ] 踩评论

#### 查询
- [ ] 浏览已收录的课程 (GET:allCourses)
- [ ] 浏览已收录的老师 (GET:allTeachers)
- [ ] 查询已收录的课程 (GET:search/teacher/:name)
- [ ] 查询已收录的老师 (GET:search/course/:name)

#### 我的
- [ ] 用户登录 
- [ ] 发表tips (POST:tip)
- [ ] 查看自己创作的tip (GET:myTips)
- [ ] 管理自己创作的tip (DELETE:tip/:id)

#### 设置
- [ ] 主题设置 
- [ ] 项目信息
- [ ] 发送反馈

**注意：对于所有的tips，老师和课程，用户可以评论，评级**

## 模型
```json
tip={title,author,authorId,time,tag,content,id,views,like,dislike}
teacher={name,school,sex,courses:[],like,dislike}
course={name,tag,teacherName,teacherId,like,dislike}
comment={author,authorId,time,content,like,dislike}
user={openid,nickName}
```
## API
|路径|方法|参数|返回|描述|
|:--|:--|:--|:--|:--|
|tip/:id|GET|id:tip的唯一id|一个tip对象|获取指定id的tip对象|
|tip|POST|tag,content|http status code|发布tip|
|tip/:id|DELETE|id|http status code|根据tip的id删除tip|
|teacher/:id|GET|id:teacher的唯一id|一个teacher对象|获取指定id的teacher对象|
|teacher|POST|name,school,sex|http status code|添加老师|
|teacher/:id|DELETE|id|http status code|删除老师|
|course/:id|GET|id:course的唯一id|一个course对象|获取指定id的课程对象|
|course|POST|name,tag,teacherId|http status code|添加课程|
|course/:id|DELETE|id|http status code|删除课程|
|comment/tip/:id|GET|id:tip的唯一id|一个包含tip对象的数组|获取指定id的对于tip的评论|
|comment/teacher/:id|GET|id:teacher的唯一id|一个包含tip对象的数组|获取指定id的对于teacher的评论|
|comment/course/:id|GET|id:course的唯一id|一个包含tip对象的数组|获取指定id的对于course的评论|
|search/teacher/:name|GET|name|一个包含teacher对象的数组|根据老师名字查询|
|search/course/:name|GET|name|一个包含课程对象的数组|根据课程名字查询|
|myTips|GET|none|一个包含tip对象的数组|得到该用户所发的所有tip|
|allTips|GET|none|一个包含tip对象的数组|得到所有的tip信息|
|allTeachers|GET|none|一个包含teacher对象的数组|得到所有的老师信息|
|alllCourses|GET|none|一个包含course对象的数组|得到所有的课程信息|