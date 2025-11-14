document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');

    if (!audio) {
        console.log("未找到音频元素");
        return;
    }

    // 确保音频不会循环播放
    audio.loop = false;

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && !hasPlayed) {
            // 标签页可见且尚未播放过
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    hasPlayed = true;
                    console.log("音频播放成功");
                }).catch(error => {
                    console.log("自动播放被阻止:", error);
                });
            }
        }
    });
});
