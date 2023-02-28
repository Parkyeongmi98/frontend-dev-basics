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
$(function() {
	var vo = {
		name: "둘리",
		password: "1234",
		message: "호이~~"
	};
	
	$("button").click(function() {
		$.ajax({
			url: "${pageContext.request.contextPath}/api/post01",
			async: true,
			type: "post",
			dataType: "json",									// 받는 content type
			contentType: "application/x-www-form-urlencoded",	// 보내는 content type
			data: $.param(vo),
			success: function(response) {
				if(response.result == "fail") {
					console.error(response.message);
					return;
				}
				
				console.log(response.data);
				var vo = response.data;
				
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>")
				htmls += ("<h3>" + vo.name + "</h3>")
				htmls += ("<h3>" + vo.message + "</h3>")
				
				$("#data").html(htmls);
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: $.ajax() 함수 사용하기</h1>
	
	<button>데이터 보내기(post, delete, put)</button>
	<div id="data"></div>
</body>
</html>