setInterval(()=>{
  mc.broadcast('5秒后清理垃圾！',0);
  setTimeout(()=>{
    mc.broadcast('4秒后清理垃圾！',0);
    setTimeout(()=>{
      mc.broadcast('3秒后清理垃圾！',0);
      setTimeout(()=>{
        mc.broadcast('2秒后清理垃圾！',0);
        setTimeout(()=>{
          mc.broadcast('1秒后清理垃圾！',0);
          setTimeout(()=>{
            mc.runcmd('kill @e[type=item]');
            mc.broadcast('垃圾清理完成！',0);
          },1000)},1000)},1000)},1000)},1000)},595000)