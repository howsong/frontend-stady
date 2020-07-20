# Git各种命令用法

### 一、git push
- `git push [远程主机名] [branch1]:[branch2]`：推送本地branch1分支到远程的 branch2分支。（`git push origin`：如果当前分支和远程分支存在追踪关系，则当前分支和远程分支都可以忽略）
- `git push -u origin master`：如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push
- `git push --all origin`：就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用–all选项
- `git push origin --tags`：git push不会推送标签(tag)，除非使用–tags选项。
- `git push origin :[branchName]` （等同于git push origin --delete [branchName]）：删除远程分支。
- `git push origin [branch1]`：推送本地的branch1分支到远程origin仓库上，如果远程不存在branch1分支则会新建一个branch1分支。
- `git push --force origin`：git push的时候需要本地先git pull更新到跟服务器版本一致，如果本地版本库比远程服务器上的低，那么一般会提示你git pull更新，如果一定要提交，那么可以使用这个命令
- `git push origin --delete [branchName]`: 删除远程分支
- `git push --set-upstream origin <branchName>`：本地存在分支 远程不存在



### 二、git status
> 用于显示工作目录和暂存区的状态

### 三、git log
> 显示所有提交过的版本信息
- `git log --pretty=oneline` 只会显示版本号和提交时的备注信息
- `git log --since=2018-01-01 --until=2018-12-31 --author="like" --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }' -`：查看自己提交代码行数

### 四、git add 
- `git add .` ：会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，但不包括被删除的文件。
- `git add -u`(git add --update的缩写)：仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区，不会提交新文件。
- `git add -A ：`(git add --all的缩写)：是上面两个功能的集合，提交所有修改
               

### 五、git commit
- `git commit -m “commit message”`：将暂存区的内容提交到本地库
> message 格式规范
```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```

- `git commit -am “commit message”`：使用git commit -am可以省略使用git add命令将已跟踪文件放到暂存区的功能


### 六、git reflog
> 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

### 七、git reset
### 八、git diff <文件名>
>将工作区中的文件和暂存区的进行比较

### 九、git branch 分支操作
- `git branch -v`：查看本地库中的所有分支
- `git branch -vv`：查看本地分支和本地分支与远程的关联关系
- `git branch [branchName]`：创建一个新的分支
- `git branch -a`：查看所有分支，包括远程分支和本地分支
- `git branch -d [branchName]`：删除本地分支 （在主分支上）
- `git push origin --delete <branchName>`：删除远程分支
- `git branch --set-upstream-to origin/<branchName>`：本地分支与远程分支建立关联 


### 十、git checkout 
- `git checkout [branchName]` 切换到指定分支
- `git checkout -- [file path]` 撤销工作区的更改
- `git checkout --track origin/[branchName]` 本地新建一个与远程分支一样名称的分支，并切换到该分支


### 十一、git merge 
- git merge [branchName] (将branchName分支的修改合并到当前分支)

### 十三 git tag 相关功能
- `git tag [tagName]`：创建tag
- `git tag -a [tagName] -m 'release 1.2'`：创建tag并添加tag备注信息
- `git tag`：查看tag
- `git tag -d [tagName]`：删除本地tag
- `git push origin :refs/tags/[tagName]`：删除远程tag
- `git show [tagName]`：查看tag对应的备注信息
- `git push origin --tags`：本地的tag同步到远程


## 功能分类

### 1、设置签名
> 项目级别签名：
- git config user.name [AAA]
- git config user.email [邮箱地址]
- (签名信息位置：cat .git/config)
> 系统级别签名：
- git config --global user.name [AAA]
- git config --global user.email [邮箱地址]
- (签名信息位置：cd ~ 、cat .gitconfig)
