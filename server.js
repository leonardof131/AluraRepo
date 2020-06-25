const  app = require('./src/config/custom-express');

app.listen(8000,function(){
        console.log(`Server rodando na porta 8000`);
})

// const http = require('http');


// const servidor = http.createServer(function (req,resp){
//     let html = ''
//     if (req.url == '/'){
//         html =`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Document</title>
//             </head>
//             <body>
//                 <h1>principal</h1>
//             </body>
//             </html>
//             `;
//     } else if (req.url == '/livros'){
//         html = `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Document</title>
//             </head>
//             <body>
//                 <h1>livros</h1>
//             </body>
//             </html>
//             `;
//     }
//     resp.end(html)
// });

// servidor.listen(8000);
