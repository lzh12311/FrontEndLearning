#!/usr/bin/env bash

git pull

MSG=$(git log --pretty=format:"> %an  %s \n" $(git describe --abbrev=0 $(git describe --abbrev=0)^)...$(git describe --abbrev=0))

CURRENT_VERSION=$(node -p "require('./package.json').version")
curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=b97b5c76-adc0-4960-8491-13739b36551a' \
      -H 'Content-Type: application/json' \
      -d '
      {
        "msgtype": "markdown",
        "markdown": {
          "content": "
            > Coffee☕️☕️☕️更新啦~hmm~tasty~~~
            > 分支:<font color=\"warning\">'${1}'</font>，
            > version: '${CURRENT_VERSION}'
            > commit message: 
            '"${MSG}"'
            > [点击查看](https://gitlab.fuchuang-auto.com/frontend/mobili/mobili-coffee/-/pipelines)
          "
        }

      }'
