/** 
 * Funcion que elimina archivos
 * @param file - El nombre del archivo que vamos a eliminar
*/

function deleteFile(file) {
    
    const url = "http://localhost:3000/delete";

    const data = {
        title : file,
    }

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(url, request)
    .then(
        response => response.json()
    ).then(
        data => {
            var htmltext = "";
            
            if(data.confirm == 'True') {
                htmltext += `<h4>${file} Eliminado</h4>`
            }else {
                htmltext += '<h4>Error No se pudo eliminar el archivo</h4>'
            }
            
            document.getElementById("content").innerHTML = htmltext;
        }
    );
}

/**
 * II - Ver el contenido de un archivo Markdown traducido a HTML
 * @param file - El nombre del archivo que vamos a ver su contenido
 */

function viewContent(file) {
    const url = "http://127.0.0.1:8000/view?name=" + file;

    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            console.log(data);
            document.querySelector("#content").innerHTML = data.text;
        }
    );
}


/**
 * III - Crear nuevos archivos MarkDown y almacenarlos en el servidor
 */
function createNewFile () {
    document.querySelector("#createNewFile").hidden = false;
    document.querySelector("#contentNewFile").innerHTML = "";

}

/**
 * Funcion que envia titulo y texto al servidor para la creacion de un archivo
 * @param title - El titulo o nombre del archivo
 * @param text - El contenido del archivo
 */
function send(title,text) {
    
    const url = "http://localhost:3000/create";

    const data = {
        title: title,
        text: text,
    };

    console.log(data)

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(url, request).then(
        response => response.json())
    .then(
        data => {
           
            console.log(data);
            
            var content = `
                <h3 id="cTitle">TITLE:</h3>
                <h4>${data.title}</h4>
                <h3 id="cText">TEXT:</h3>
                <p>${data.text}</p>
                `;
            document.getElementById("createNewFile").hidden = true;
            document.getElementById("contentNewFile").innerHTML = content; 
        }
    ); 
    
}
/**
 * Esto permite asociar eventos a acciones
 */

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('#title')
    const text = document.querySelector('#text')
    
    document.querySelector('#createNewFile').onsubmit = () => {
        send(title.value,text.value)
        return false;
    }

})