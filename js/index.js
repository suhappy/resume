
FastClick.attach(document.body);
;(function (){
    var desW=339,winW=document.documentElement.clientWidth,ratio=winW/desW;
    var main=document.getElementById("main");
    if(winW>640){
        main.style.width=640+"px";
        main.style.margin="0 auto";
        return;
    }
    document.documentElement.style.fontSize=ratio*100+"px";
})();





new Swiper(".swiper-container",{
    loop:true,
    direction: 'vertical',
    onSlideChangeEnd: function (swiper) {
        //swiper.slides:��ȡ��ǰһ���ж��ٸ����(����LOOPģʽ��ǰ���ӵ�����)
        //swiper.activeIndex:��ǰչʾ������������
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;

        //->����ID��PAGE?
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }

        //->����ǰ�Ļ������ID����,��Ҫ��������Ƴ�
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });


    }
});

//->MUSIC
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {//->��ͣ
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();

