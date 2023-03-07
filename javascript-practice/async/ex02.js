
const myAsyncFn02 = function(param) {
    return new Promise(function(resolve, reject) {
        
        // 비동기 코드
        // 파일 시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout
        setTimeout(function() {
            if(param === "data") {      
                resolve("ok")
            } else {                    
                reject(new Error("fail"))
            }
        }, 2000);
    })
}


myAsyncFn02("data")
    // test01: success
    .then(function(result) {
        console.log(result);
    })
    // test02: fail
    .catch(function(error) {
        console.log(error);
    });

console.log("wait....");