// Write your JavaScript code.
function beginRequest(options){
    var request = new XMLHttpRequest();
    request.open(options.method, options.url, options.async != undefined? options.async: true);

    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if (request.status != 200) {
                console.info("One Error Ocurred in the server, contact de server admin");
                if(options.onerror != undefined && options.onerror != null){
                    options.onerror(request.response);
                }
            }
            else {
                if(options.onsuccess != undefined && options.onsuccess != null){
                    options.onsuccess(request.response, getResponse(request))
                }
            }
        }
    };

    if(options.data != undefined && options.data != null){
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(options.data);
    }
    else{
        request.send();
    }
}

function getResponse(request){
    var type = request.getResponseHeader('Content-Type');
    switch (type) {
        case "text/xml; charset=utf-8":
            return request.responseXML;
        case "application/json; charset=utf-8":
            return JSON.parse(request.responseText);
        default:
            return request.responseText;
    }
}

function getAllPerson() {
    beginRequest({
        url: "/person/getAll",
        method: "GET",
        onsuccess: function(response, data){
            console.log(response);
            console.log(data);
        },
        onerror: function(response){
            console.log(response);
        }
    });
}

function addPerson (){
    beginRequest({
        url: "/person/add",
        method: "POST",
        data: {id: "10"},
        onsuccess: function (response, data) {
            console.log(response);
            console.log(data);
        },
        onerror: function (response) {
            console.log(response);
        }
    });
}
