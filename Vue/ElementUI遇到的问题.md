# 1、在弹窗中有一个输入框（el-input）的情况下，@keyup.enter.native回车会刷新整个页面
> 解决方案：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 标签上添加 @submit.native.prevent