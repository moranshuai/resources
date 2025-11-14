document.addEventListener('keydown', function(event) {
  // 检测是否按下了 'q' 键
  if (event.code === 'KeyJ') {
    // 防止浏览器对该按键的默认处理
    event.preventDefault();
    // 获取音频元素
    var sound = document.getElementById('j');
    // 重置播放时间以便重复触发
    sound.currentTime = 0;
    // 播放声音
    sound.play().catch(function(error) {
      console.log('音频播放失败: ', error);
    });
  }
  // 可以继续添加其他按键的检测，例如 'w' 键
  // if (event.code === 'KeyW') { ... }
  if (event.code === 'KeyN') {
    // 防止浏览器对该按键的默认处理
    event.preventDefault();
    // 获取音频元素
    var sound = document.getElementById('n');
    // 重置播放时间以便重复触发
    sound.currentTime = 0;
    // 播放声音
    sound.play().catch(function(error) {
      console.log('音频播放失败: ', error);
    });
  }
  if (event.code === 'KeyT') {
    // 防止浏览器对该按键的默认处理
    event.preventDefault();
    // 获取音频元素
    var sound = document.getElementById('t');
    // 重置播放时间以便重复触发
    sound.currentTime = 0;
    // 播放声音
    sound.play().catch(function(error) {
      console.log('音频播放失败: ', error);
    });
  }
  if (event.code === 'KeyM') {
    // 防止浏览器对该按键的默认处理
    event.preventDefault();
    // 获取音频元素
    var sound = document.getElementById('m');
    // 重置播放时间以便重复触发
    sound.currentTime = 0;
    // 播放声音
    sound.play().catch(function(error) {
      console.log('音频播放失败: ', error);
    });
  }
  if (event.code === 'KeyG') {
    // 防止浏览器对该按键的默认处理
    event.preventDefault();
    // 获取音频元素
    var sound = document.getElementById('ngmhhy');
    // 重置播放时间以便重复触发
    sound.currentTime = 0;
    // 播放声音
    sound.play().catch(function(error) {
      console.log('音频播放失败: ', error);
    });
  }
});
