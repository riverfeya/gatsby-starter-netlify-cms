// Для получения дополнительной информации, проверьте https://www.netlify.com/docs/functions/#javascript-lambda-functions
module.exports.handler = async function(event, context) {
    console.log("queryStringParameters", event.queryStringParameters)
    return {
        // вернуть ноль, чтобы показать без ошибок
        statusCode: 200, // http status code
        body: JSON.stringify({
            msg: "Привет мир! Это лучше " + Math.round(Math.random() * 10)
        })
    }
}

// Теперь вы готовы получить доступ к этому API из любого места в вашем приложении Gatsby! 
// Например, в любой обработчик событий или метод жизненного цикла вставьте:
//
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: 
// https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum