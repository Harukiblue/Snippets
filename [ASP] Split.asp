<%@ LANGUAGE="VBSCRIPT" %>
<% Option explicit %>
<%
dim a: a=Split("asd, 123,fgh,poi,",",")
dim var1: var1 = a(0)
dim var2: var2 = a(1)
dim var3: var3 = a(2)
dim var4: var4 = a(3)

%>
<!DOCTYPE html>
<html>
<head>
    <title>test | Raymond James</title>
    <!-- META TAGS Start -->
    <meta content="text/html;charset=UTF-8" http-equiv="Content-Type" />
	<meta content="IE=edge" http-equiv="X-UA-Compatible">

	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<link href="css/site.css" 	type="text/css" media="all" rel="Stylesheet" rev="Stylesheet"/>
 
 
</head>
<body>
	<header>
	
	</header>
	<section>
	 <p><%= var1%></p>
	 <p><%= var2%></p>
	 <p><%= var3%></p>
	 <p><%= var4%></p>
	</section>
	<footer>
	
	</footer>
</body>
</html>