$(document).ready(function(){
    var $price = $(".pd_price span").text(); //현재 가격정보 저장
    console.log("현재 가격의 원본 정보 : "+$price);
    console.log("현재 가격의 원본 정보의 데이터 타입 : "+typeof $price);
    var $origin_price = $price.replace(",", ""); //쉼표 제거한 원본 숫자만 저장(string)
    console.log("숫자정보의 값 : "+$origin_price);
    console.log("숫자정보의 데이터 타입 : "+ typeof $origin_price);

    var $basic_price = parseFloat($origin_price);
    var $total_price_opt;
    var $total_price_result = "";
    var $opt_val = "";
    var $num = $(".pd_count_box input").val();

    function calc_price(){
        $(".pd_count_box input").val($num);
        /* $total_price = $basic_price * $num;
        var $total_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log($total_result); 
        $(".total_price_num span").text($total_result); */

        $opt_val = $(".pd_option select").val(); //0, 10000, 5000
        // console.log($opt_val);
        // console.log(typeof $opt_val);
        $total_price_opt = $basic_price * $num + parseFloat($opt_val);
        $total_price_result = $total_price_opt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log($total_price_result)
        $(".total_price_num span").text($total_price_result);

        var $detail_img = $(".pd_img img").attr("src");
        $(".cart_img img").attr("src", $detail_img);
        var $detail_title = $(".pd_title h3").text();
        $(".cart_info h4").text($detail_title);
        $(".buy_price span").text($total_price_result);

        var $sel_opt_txt = $(".pd_option select option:selected").text();
        $(".bottom_list p span").text($sel_opt_txt);
        
        var $opt_default = $(".pd_option select option:selected").attr("value");
        if($opt_default == "0"){
            $(".bottom_list").hide();
        }else{
            $(".bottom_list").show();
        }
    };



    $(".pd_count_box a:first").click(function(){
        if($num < 2){ //현재 구매수량이 1일 경우, 작동 금지

        }else{  //현재 구매 수량이 2이상일 경우, 1씩 감소
            $num--;
            calc_price();
        }
        return false;
    });

    $(".pd_count_box a:last").click(function(){
        $num++;
        calc_price();
        return false;
    });

    $(".pd_option select").change(function(){
        var $opt_val = $(this).val();
        console.log(typeof $opt_val);
        calc_price();
    });

    $(".pd_btn li:last-child input").click(function(){
        $(".mycart").addClass("active");
        $(".dark").addClass("active");
        calc_price();
    });

    $(".dark, .close_btn, .cart_btn li:last-child input").click(function(){
        $(".mycart").removeClass("active");
        $(".dark").removeClass("active");
    });


    //정규식 표현 /\B(?=(\d{3})+(?!\d))/g
    //#1/ / ~ / : 정규식 표현의 시작과 끝
    //#2. \B : 공백처리(blank) 
    //#3. ?= : 내부의 정규식 실행문을 조합하여 결과로 도출
    //#4. \d : (dimension) 0~9까지의 숫자 데이터 만을 지정
    //#5. \d{3} : 좌측자리부터 세자리마다 패턴구성
    //#6. ?!\d : 숫자 데이터만을 지정 (!) . 숫자를 세는 과정에서 역순으로 개수를 센다는 의미. 부정형 전방 탐색(역방향으로 셈) 

    //(실수의 우측으로부터 첫번째자리 숫자가 총 10개라면 10의 자리 순서까지 지정)
    //1000000000 => 100 000 000 0 =>  1 000 000 000 => 1,000,000,000

    //#7. g : global(글로벌) 정규 표현을 사용하겠다는 의미 


















});