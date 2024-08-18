
  set -e
  echo "fetch master"
  # checkout source branch to create tag

  ################current is not master  return###################
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ "${CURRENT_BRANCH}" == "master" ]
  then 
    echo  "current branch is ${CURRENT_BRANCH}"
  else 
    echo  "please switch to master first"
    exit 1
  fi
    git checkout master
    git pull --rebase

  #############if there're commits in master  exit###################
  if [ -n "$(git status -s)" ];then
    echo "please make commits in branches and raise merge request to master"
    exit 1
  fi

  #############if there're unpushed commits in master  exit###################

  if [ -n "$(git log origin/master..HEAD)" ];then
    echo "please confirm to push your local commits in branches and raise merge request to master"
    exit 1
  fi

  ##############changes from last version#################
  DIFF_VS_LAST_VERSION=$(git log `git describe --abbrev=0 --tags`...HEAD)
  echo "${DIFF_VS_LAST_VERSION}"
  if ["${DIFF_VS_LAST_VERSION}" == ""]
  then
    echo "no changes from last version"
    exit 1
  fi

  echo "versioning"
  # if no argument specified, use patch as default param
  if [ "$1" = "" ]  
  then  
    npm version patch 
  else    
    npm version $1
  fi

  echo "push to repo and publish"
  CURRENT_VERSION=$(node -p "require('./package.json').version")
  
  echo "changelog update"

  # update changelog and push back to repository
  npm run changelog

  echo "committing"

  # commit
  if [ -n "$(git status -s)" ];then

    git add -A
    git commit -m "release new version"
  fi
  
  # npm run build &&

  echo 'build success'

  # publish
  git push 
  git push origin refs/tags/v${CURRENT_VERSION}
 

  npm publish


