<!DOCTYPE html> 
<html>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <head>
        <h1> Results </h1>
    </head>
    <body>
        <h3> For query: ${q} </h3>
        <ol>
            <c:forEach items="${results}" var="res">
                <li>
                    <strong>Item: </strong>${res.name} <strong>ItemId: </strong>${res.itemId}
                </li>
            </c:forEach>
        </ol> 
    </body>
</html>