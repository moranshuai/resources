document.addEventListener('DOMContentLoaded', function() {
    // 尝试获取页面中的<audio>元素，选择器根据你页面的实际情况调整
    const audio = document.querySelector('audio');
    // 如果通过音频区块添加，可能需要使用更具体的选择器，例如其容器的类名
    // const audio = document.querySelector('.wp-block-audio audio');

    // 检查是否找到了audio元素
    if (!audio) {
        console.log("未在页面中找到音频元素。请检查音频是否已嵌入且选择器正确。");
        return;
    }

    // 设置音频循环播放（如果需要）
    audio.loop = true;

    // 监听页面可见性变化
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 标签页不可见（用户切换了标签页或最小化窗口），暂停音频
            audio.pause();
        } else {
            // 标签页再次可见（用户切换回来），尝试播放音频
            // 注意：浏览器的自动播放策略可能会阻止此操作
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("自动播放被阻止:", error);
                    // 可以在这里提示用户与页面交互后解锁音频
                });
            }
        }
    });
});
