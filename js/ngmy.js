document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    let hasPlayed = false;

    if (!audio) {
        console.log("未找到音频元素");
        return;
    }

    audio.loop = false;

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && !hasPlayed) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    hasPlayed = true;
                }).catch(error => {
                    console.log("自动播放被阻止:", error);
                });
            }
        }
    });
});
