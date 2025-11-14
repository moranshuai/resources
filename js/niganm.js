document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('https://ikun.cm/res/ngmhhy.mp3'); // 替换为你的音频文件URL

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // 每次回到标签页时重置音频并播放
            audio.currentTime = 0; // 重置到开头
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('自动播放被阻止:', error);
                });
            }
        } else {
            // 离开标签页时暂停
            audio.pause();
            audio.currentTime = 0; // 可选：离开时也重置
        }
    });
});
