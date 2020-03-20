const lista=document.querySelector('.listado-pendientes');
import {actualizarAvance} from '../../funciones/avance';
if(lista){
    lista.addEventListener('click',function(e){
        if(e.target.classList.contains('fa-check-circle')){
            const id=e.target.parentElement.parentElement.getAttribute('data-tarea');
            const ruta=`${location.origin}/tareas/${id}`;

            fetch(ruta, {
            method: 'PATCH',
            //body: JSON.stringify(id),
            headers:{ 'Content-Type': 'application/json'}
            }).then(res => res).then(data=>{
                //window.location.href=window.location.href;
                e.target.classList.toggle('completo');
                actualizarAvance();
            });
            

        }else if(e.target.classList.contains('fa-trash')){
            const id=e.target.parentElement.parentElement.getAttribute('data-tarea');
            const ruta=`${location.origin}/tareas/${id}`;
            fetch(ruta, {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
                }).then(res=>res).then(res=>{
                    if(res.status==200){
                        
                        e.target.parentElement.parentElement.remove();
                        actualizarAvance();
                        
                    }
                }).catch(()=>{ console.log("Dato error")});
        }
        });
}

export default lista;