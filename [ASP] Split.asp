<%
dim txt: txt = "asd,123,fgh,poi"
dim parts: parts = Split(txt,",")
For Each item In parts
  response.write(item & "<br />")
Next
%>
