let mensajeRizky  = document.querySelector('.mensaje-rizky');
let comentario = document.getElementById('comentario');
let marcarTodoLeido = document.querySelector('.marcarTodoLeido');
let mensajes = document.querySelectorAll('.mensajes');
let pendientes = document.querySelectorAll('.pendiente');
let numeroDeNotificaciones = document.getElementById('numeroDeNotificaciones');

mensajeRizky.addEventListener('click',() => {
        comentario.style.display = 'block'
        mensajeRizky.style.cursor = 'default'
});

comentario.addEventListener('click',()=>{
    comentario.style.display = 'none'
    mensajeRizky.style.cursor = 'pointer'
});

numeroDeNotificaciones.textContent = pendientes.length;

mensajes.forEach(element => {
   let mensaje = element
   let pendiente = mensaje.querySelector('.pendiente')

   if (pendiente) {
     mensaje.style.backgroundColor = "hsl(211, 68%, 94%)"
     mensaje.classList.add("mensajeNoLeido")
     mensaje.style.cursor = 'pointer'
        mensaje.addEventListener('click',()=>{
            if (pendiente) {
                mensaje.classList.remove('mensajeNoLeido')
                pendiente.classList.remove('pendiente')
                mensaje.classList.add("mensajeLeido")
                pendientes = document.querySelectorAll('.pendiente')
                mensaje.style.backgroundColor = '#ffff'
                pendiente.style.display = 'none'
                numeroDeNotificaciones.textContent = pendientes.length
             }
     })
    }
    else {
    mensaje.classList.add("mensajeLeido")
    }
     });

const mensajesLeidos = () =>{
 mensajes.forEach(element => {
    if (element.classList.contains("mensajeNoLeido")) {
        element.classList.remove('mensajeNoLeido')
        element.classList.add("mensajeLeido")
        element.style.backgroundColor = "#ffff"
        pendientes.forEach(element => {
            element.style.display = "none"
        });
        numeroDeNotificaciones.textContent = 0;
    }
 });
}

marcarTodoLeido.addEventListener('click',mensajesLeidos)