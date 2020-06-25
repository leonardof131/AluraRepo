module.exports = (app) => {
    app.get('/',function(req,resp){
        resp.send(
            `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Home</h1>
            </body>
            </html>        
            `
        );
    });
    
    app.get('/livros',function(req,resp){
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
    
}

