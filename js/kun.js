document.addEventListener('DOMContentLoaded', function() {
    let audioPlayed = false;

    // 创建音频元素
    const audio = new Audio('your-audio-file.mp3'); // 替换为你的音频文件URL

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && !audioPlayed) {
            // 标签页可见且音频尚未播放
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioPlayed = true;
                }).catch(error => {
                    console.log('自动播放被阻止:', error);
                });
            }
        }
    });
});
