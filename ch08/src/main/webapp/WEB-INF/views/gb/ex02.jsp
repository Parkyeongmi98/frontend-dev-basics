<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.3.js"></script>
<script>
// scroll event는 ch07-ex37 참고
// api url -> /guestbook/api?sno=10: sno보다 작은 no의 row를 top-k(limit 0, k) 구현 할 것

var fetch = function() {
	$.ajax({
		url: "${pageContext.request.contextPath}/guestbook/api?sno=10",
		type: "get",
		dataType: "json",
		success: function(response) {
			if(response.result === "fail") {
				console.error(response.message);
				return;
			}
			//render(response.data);
		}
	})
}

$(function() {
	$(window).scroll(function() {
		
	});
	
// 최초 리스트 가져오기
fetch();
});
</script>
</head>
<body>
<div id="guestbook">
	<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름">
			<input type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook"></ul>
	</div>
</body>
</html>