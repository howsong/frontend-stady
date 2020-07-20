
const options = { requireInteraction: true }
const notify = new Notification('来自容联的消息提醒', options)
notify.onclick = function(){console.log('onclick')}
notify.onshow = function () {
  // 关闭当前通知 需要去拿到容联
  notify.close()
  new Notification('我是一个新的通知')
} 
notify.onclose = function () { console.log('onclose') }
console.log(notify.origin)