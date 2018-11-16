window.onload = function(){

    var imgArr = [
        "./img/img_01.png",
        "./img/img_02.png",
        "./img/img_03.png",
        "./img/img_04.png"
    ];

    var text = [
        "图片一",
        "图片二",
        "图片三",
        "图片四"
    ];

    var oImg = document.getElementById("img_content");
    var oBtnL = document.getElementById("left_btn");
    var oBrnR = document.getElementById("right_btn");
    var oNum = document.getElementById("img_num");
    var oText = document.getElementById("img_title");
    var oBtnOrder = document.getElementById("the-order");
    var obtnInfinite = document.getElementById("infinite");

    // 初始化
    init(0, imgArr.length);
        
    function init(index, total){
        oImg.src = imgArr[index];
        oNum.innerText = index + 1 + '/' + total;
        oText.innerText = text[index];
    }

    var off = true;
    var num = 0;
    oBrnR.onclick = function(){
        if(off){
            if(num < imgArr.length - 1){
                num++;
            }
        } else {
            if(num < imgArr.length - 1){
                num++;
            } else {
                num = 0;
            }
        }
        init(num, imgArr.length)
    }
    oBtnL.onclick = function(){
        if(off){
            if(num > 0){
                num--;
            }
        } else {
            if(num == 0){
                num = imgArr.length - 1;
            } else {
                if(num > 0){
                    num--;
                }
            }
        }
        init(num, imgArr.length)
    }

    oBtnOrder.onclick = function(){
        off = true;
    }
    obtnInfinite.onclick = function(){
        off = false;
    }
}