# 改为放到仓库名称下，这样代码可以不用改，同时兼容 github + gitee
if test -d './unibest'; then
  rm -rf './unibest'
fi
mv ./dist/build/h5 ./unibest
