// js의 한줄 주석
/* 
js의 여러줄 주석
*/
//전역변수
let diary =""
//함수 정의부
function saveHandler(){
    //사용자가 웹페이지에서 입력한 값을 메모리에 저장
    let date = $("#date").val();
    let text = $("#text").val();
    let mood = $("#mood").val();
    //입력한 값을 한문장으로 만들기
    diary = `<p>${date}: ${text} - ${mood}</p>`+ diary
    //console.log(diary)

    $("#result").html(diary)

    localStorage.setItem("diary", diary);
    //let storage1 = localStorage.getItem("diary");
    //console.log(storage1)


}
//스토리지 테스트
//localStorage.setItem("test-key", "테스트입니다");
//let storage1 = localStorage.getItem("test-key");
// jquery 실행 시작
$(document).ready(function() {
    //문서가 로딩되면 로컬 저장소에 있는 긍정확언 불러오시
    //diary = localStorage.setItem("diary");

    //id가 save로 정의한 정의한 요소를 클릭했을때 
    $("#save").click(saveHandler)
})