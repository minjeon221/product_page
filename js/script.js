$(document).ready(function(){
    //이차배열 패턴 = ["이미지 파일", "타이틀", "콘텍스트", "가격정보", "업데이트 날짜", "좋아요 수"]
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어 4", "합리적인 실용 인테리어 8", "300000", "20200402", "23"],
        ["img2.jpg", "서재 인테리어 8", "합리적인 실용 인테리어 7", "150000", "20190202", "57"],
        ["img3.jpg", "침실 인테리어 5", "모더니즘 실용 인테리어 3", "310000", "20180512", "63"],
        ["img4.jpg", "침실 인테리어 1", "합리적인 실용 인테리어 4", "130000", "20200412", "47"],
        ["img5.jpg", "거실 인테리어 9", "심플 실용 인테리어 1", "230000", "20190221", "88"],
        ["img6.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 6", "530000", "20191202", "99"],
        ["img7.jpg", "거실 인테리어 6", "아르데코 실용 인테리어 2", "450000", "20200314", "56"],
        ["img8.jpg", "욕실 인테리어 5", "합리적인 실용 인테리어 5", "750000", "20200622", "29"],
        ["img1.jpg", "거실 인테리어 4", "합리적인 실용 인테리어 8", "300000", "20200402", "23"],
        ["img2.jpg", "서재 인테리어 8", "합리적인 실용 인테리어 7", "150000", "20190202", "57"],
        ["img3.jpg", "침실 인테리어 5", "모더니즘 실용 인테리어 3", "310000", "20180512", "63"],
        ["img4.jpg", "침실 인테리어 1", "합리적인 실용 인테리어 4", "130000", "20200412", "47"],
        ["img5.jpg", "거실 인테리어 9", "심플 실용 인테리어 1", "230000", "20190221", "88"],
        ["img6.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 6", "530000", "20191202", "99"],
        ["img7.jpg", "거실 인테리어 6", "아르데코 실용 인테리어 2", "450000", "20200314", "56"],
        //["img9.jpg", "거실 인테리어 2", "합리적인 실용 인테리어 2", "280000", "20190722", "36"],
    ];

    var $box = `
    <div class="pd_box">
        <div class="pd_photo">
            <img src="img/img1.jpg" alt="">
        </div>
        <div class="pd_info">
            <h3 class="pd_title">title</h3>
            <p class="pd_text">context</p>
            <div class="pd_etc">
                <span class="pd_price">가격정보</span>
                <span class="pd_date">업데이트 날짜</span>
            </div>
            <p class="fav">좋아요&nbsp; <span>100</span></p>
        </div>
    </div>
    `;



    var $btn_index  //최신순 클릭하면 <button> 태그의 인덱스 번호인 0 ....

    for(i=0; i<$pd_arr.length;i++){
        $(".pd_frame").append($box);
    }

    function pd_sort(){
        $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_info .pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_info .pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_info .pd_etc .pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_info .pd_etc .pd_date").text($pd_arr[index][4]);
            $(this).find(".pd_info .fav span").text($pd_arr[index][5])
        });

        $(".sort_button button").removeClass("active");//모든 버튼으로 부터 active라는 클래스를 제거
        $(".sort_button button").eq($btn_index).addClass("active"); //클릭한 곳의 인덱스 번호와 일치한 곳에 active라는 클래스 명을 부여
        $(".sort_sel option").prop("selected", false) //모든 select 박스에서 옵션의 속성(prop)에서 선택을 풀어버린다.
        $(".sort_sel option").eq($btn_index+1).prop("selected", true)//클릭한 곳과 연관된 옵션에만 selected 값을 부여한다. 

    };

    pd_sort();  //브라우저가 로딩 되면서 함수문을 호출(sort가 적용되지 않은 상태)

    

    //최신순이라는 버튼 클릭시
    $(".date_sort").click(function(){
        //sort()메서드 : 순차적으로 나열을 시키는 메서드. 오름차순으로 나열
        $pd_arr.sort(function(a, b){
            //return a[4] - b[4]; //작은 순으로 차례대로 정렬
            return b[4] - a[4]; //큰 순으로 차례대로 정렬
        });
        console.log($pd_arr);  //배열의 순서가 변경
        //$pd_arr.reverse();  //reverse() : 배열을 역순으로 변경 -> 큰 순으로 차례대로 변경

        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_info .pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_info .pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_info .pd_etc .pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_info .pd_etc .pd_date").text($pd_arr[index][4]);
            $(this).find(".pd_info .fav span").text($pd_arr[index][5])
        }); */
        $btn_index = $(this).index();
        pd_sort();
        
    });

    //낮은 가격순 클릭시
    $(".low_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return a[3] - b[3]; //작은 순으로 정렬
        });
        console.log($pd_arr);

        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_info .pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_info .pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_info .pd_etc .pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_info .pd_etc .pd_date").text($pd_arr[index][4]);
            $(this).find(".pd_info .fav span").text($pd_arr[index][5])
        }); */

        $btn_index = $(this).index();
        pd_sort();
        
    });

    //높은 가격순 클릭시
    $(".high_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return b[3] - a[3];
        });

        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_info .pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_info .pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_info .pd_etc .pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_info .pd_etc .pd_date").text($pd_arr[index][4]);
            $(this).find(".pd_info .fav span").text($pd_arr[index][5])
        }); */

        $btn_index = $(this).index();
        pd_sort();
        
    });

    //인기순 클릭시
    $(".fav_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return b[5] - a[5];
        });

        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_info .pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_info .pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_info .pd_etc .pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_info .pd_etc .pd_date").text($pd_arr[index][4]);
            $(this).find(".pd_info .fav span").text($pd_arr[index][5])
        }); */

        $btn_index = $(this).index();
        pd_sort();
        
    });

    $(".sort_sel").change(function(){
        var $sel_val = $(this).val();
        

        console.log($sel_val);
        if($sel_val == "date"){
            $pd_arr.sort(function(a, b){
                return b[4] - a[4];
            });
            pd_sort();
            

        }else if($sel_val == "low"){
            $pd_arr.sort(function(a, b){
                return a[3] - b[3];
            });
            pd_sort();
           
        }else if($sel_val == "high"){
            $pd_arr.sort(function(a, b){
                return b[3] - a[3];
            });
            pd_sort();
           
        }else if($sel_val == "fav"){
            $pd_arr.sort(function(a, b){
                return b[5] - a[5];
            });
            pd_sort();
        };

        $(".sort_button button").removeClass("active"); //select 박스에서 선택을 변경하였을 때 button의 모든 active 클래스 명은 제거
        $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //value = date -> class = date_sort 연관된 부분에만 클래스명을 부여한다.
        $(".sort_sel option").prop("seclected", false); //select 박스의 옵션에서 선택을 해제 한다.
        $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true); //선택한 곳의 value 값과 일치하는 곳만 선택 
    });


    

    //배열 데이터의 상품 개수가 8개(4의 배수)이고, 4개씩 페이지 하나씩 마다 보여줄 때 2개의 페이지가 필요하다.  => 하단부에 1, 2라는 표시 장치가 필요
    // 8/4 => 몫은 2 (나머지 0) -> if
    //for문 => 초기값 k = 0; k < 8/4; k++   vs    for(k=0;k <= 8/4;k++)
    //k=0, k=1 : k++와 k<2                        k=0, k+1, k=2
    /* 
    <ol class="pager">
        <li>0(k)</li>  ===> k+1 ===> 1            <li>0(k)</li>  ==> k+1 ==> 1
        <li>1(k)</>  ===> k+1 ===> 2              <li>1(k)</li>  ==> k+1 ==> 2
                                                  <li>2(k)</li>  ==> k+1 ==> 3
    </ol>

    for(i=0;i<10;i++){
        console.log(i)
    }
    */

    // 만약, 상품의 개수가 9개 ==> 필요한 페이지 수는 3개(4, 4, 1) 1, 2, 3
    //if(9%4 != 0)
    //for(k=0;k <= 8/4;k++)


    var $ea_item = 4; //각 페이지 별로 4개의 아이템을 보여주겠다는 선언

    if($pd_arr.length % $ea_item == 0){ //4의 배수개념
        for(k = 0; k < $pd_arr.length / $ea_item; k++){
            $(".pager").append("<li>"+(k+1)+"</li>");

        };
    }else{
        for(k=0;k<=$pd_arr.length/$ea_item;k++){
            $(".pager").append("<li>"+(k+1)+"</li>");
        }
    };

    $(".pager li").eq(0).addClass("active");
    $(".pd_box").eq($ea_item-1).nextAll().hide();

    $(".pager li").click(function(){
        var $pager_txt = $(this).text();
        $(".pd_box").show();
        $(".pd_box").eq($ea_item * ($pager_txt-1)).prevAll().hide();
        $(".pd_box").eq($ea_item * $pager_txt-1).nextAll().hide();
        $(".pager li").removeClass("active");
        $(this).addClass("active");
    });

    //2번을 클릭했다면(text 2), 인덱스 번호 4~7만 보여준다. 
    //4($ea_item) * (2-1) = 보여주어야 할 개수 * (클릭한 페이지 번호 - 1)
    //4 * 1 => 4(2번째 페이지에서 처음 보여주어야 할 인덱스 번호)
    //4 * ??  => 7(2번째 페이지에서 마지막에 보여주어야 할 인덱스 번호)
    //3번을 클릭했다면(text 3), 인덱스 번호 8~11만 보여준다  
    //4 * 2 => 8(3번째 페이지에서 처음 보여주어야 할 인덱스 번호 )















});