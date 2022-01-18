//slide show
var imgList = [
    "images/slider/IMG_1811.jpeg",
    "images/slider/IMG_1813.jpeg",
    "images/slider/IMG_1814.jpeg"
];
//画像とナビ要素を自動で追加
for(var i = 0; i < imgList.length; i++){
    //li要素を取得
    var slide = document.createElement("li");
    //li要素の中に画像タグを埋め込む
    slide.innerHTML = "<img src='" + imgList[i] + "'>";
    //li要素をクラス名[slider-inner]の子要素として追加
    document.getElementsByClassName("slider-inner")[0].appendChild(slide);
}

//スライドの数を取得（処理のために-1する）
var length = imgList.length - 1;

//クラス「imageSlide」に画像1枚の要素を格納
var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
//現在○○枚目の画僧を表示している というインデックス番号を格納する変数
var nowIndex = 0;
//現在表示している画像とドットナビにクラス名を付与
imageSlide[nowIndex].classList.add("show");

//スライドがアニメーション中か判断するフラグ
var isChanging = false;
//スライドのsetTimeoutを管理するタイマー
var slideTimer;
//スライド切り替え時に呼び出す関数
function sliderSlide(val){
    if(isChanging === true){
        return false;
    }
    isChanging = true;
    //現在表示している画像とナビからクラス名を削除
    imageSlide[nowIndex].classList.remove("show");
    nowIndex = val;
    //次に表示する画像とナビにクラス名を付与
    imageSlide[nowIndex].classList.add("show");
    //アニメーションが終わるタイミングでisChangingのステータスをfalseに
    slideTimer = setTimeout(function(){
        isChanging = false;
    }, 600);
}
//左矢印のナビをクリックしたときのイベント
document.getElementById("arrow-prev").addEventListener("click", function(){
    var index = nowIndex - 1;
    if(index < 0){
        index = length;
    }
    sliderSlide(index);
}, false);
//右矢印のナビをクリックしたときのイベント
document.getElementById("arrow-next").addEventListener("click", function(){
    var index = nowIndex + 1;
    if(index > length){
        index = 0;
    }
    sliderSlide(index);
}, false);
