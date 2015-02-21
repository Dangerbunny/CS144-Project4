<html>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <head>
        <h1> Results </h1>
    </head>
    <body>
        <h3>Item: ${data.name} with ID: ${data.itemId} </h3>
        <strong>General Information: </strong>
        <ul>
            <li>Initial Bid: ${data.initialBid}</li>
            <li>Current Bid: ${data.currBid}</li>
            <li>Number of Bids: ${data.numBids}</li>
            <li>Start Time: ${data.startTime}</li>
            <li>End Time: ${data.endTime}</li>
        </ul> 
        <strong>Categories</strong>
        <ol>
            <c:forEach items="${data.categories}" var="cat">
                <li>
                    ${cat}
                </li>
            </c:forEach>
        </ol>

        <p> 
            <strong>Item Location</strong>
            <em> Name: </em>${data.iLoc.text}
            <em> Country: </em>${data.iLoc.country} 
            <em> Latitude: </em>${data.iLoc.lat} 
            <em> Longitude: </em>${data.iLoc.lon} 
        </p>
       
        <p>
            <strong>Item Description: </strong>
            ${data.description}
        </p>

        <strong>Bid Information: </strong> 
        <ol>
            <c:forEach items="${data.bids}" var="bid">
                <li>
                    <em>User Id: </em>${bid.userId} 
                    <em> Rating: </em>${bid.bRating} 
                    <em> Location: </em>${bid.bLoc.text}
                    <em> Country: </em>${bid.bLoc.country} 
                    <em> Time: </em>${bid.time} 
                    <em> Amount: </em>${bid.amount}   
                </li>
            </c:forEach>
        </ol>
    </body>
</html>