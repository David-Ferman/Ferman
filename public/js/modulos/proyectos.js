const cuerpo=document.getElementById("cuepado");
if(cuerpo){
    cuerpo.addEventListener('click',function(e){
        if(e.target.classList.contains('elimina')){
            
            e.preventDefault();
            
            const id=e.target.getAttribute("data-id");
            const ruta=`${location.origin}/proyecto/${id}`;
    fetch(ruta, {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'}
        }).then(res=>res).then(res=>{
            if(res.status==200){
                e.target.parentElement.parentElement.remove();
                document.getElementById("arriba").innerHTML="Dato Eliminado";
                setTimeout(()=>{
                    document.getElementById("arriba").innerHTML="Bienvenido"; 
                },3000);
                
            }
        }).catch(()=>{ console.log("Dato error")});
            //console.log(id);
                }else if(e.target.classList.contains('edita')){
                    e.preventDefault();
                const padre=e.target.parentElement.parentElement;
                console.log(e.target.parentElement.parentElement);
                const nombre=padre.children[0].children[0].innerText;
                const apellido=padre.children[1].children[0].innerText;
                const email=padre.children[2].children[0].innerText;
                const contrasena=padre.children[3].children[0].innerText;
                padre.children[0].children[0].setAttribute("class","no");
                padre.children[0].children[1].setAttribute("class","ver");
                padre.children[0].children[1].value=nombre;

                padre.children[1].children[0].setAttribute("class","no");
                padre.children[1].children[1].setAttribute("class","ver");
                padre.children[1].children[1].value=apellido;

                padre.children[2].children[0].setAttribute("class","no");
                padre.children[2].children[1].setAttribute("class","ver");
                padre.children[2].children[1].value=email;

                padre.children[3].children[0].setAttribute("class","no");
                padre.children[3].children[1].setAttribute("class","ver");
                padre.children[3].children[1].value=contrasena;

                padre.children[5].children[0].setAttribute("class","no");
                padre.children[5].children[1].setAttribute("class","ver");
                    
                
                padre.children[5].children[1].addEventListener('click',function(e){
                    e.preventDefault();

                const valor=padre.children[0].children[1].value;
                padre.children[0].children[0].setAttribute("class","ver");
                padre.children[0].children[1].setAttribute("class","no");
                padre.children[0].children[0].innerText=valor;

                const valor1=padre.children[1].children[1].value;
                padre.children[1].children[0].setAttribute("class","ver");
                padre.children[1].children[1].setAttribute("class","no");
                padre.children[1].children[0].innerText=valor1;

                const valor2=padre.children[2].children[1].value;
                padre.children[2].children[0].setAttribute("class","ver");
                padre.children[2].children[1].setAttribute("class","no");
                padre.children[2].children[0].innerText=valor2;

                const valor3=padre.children[3].children[1].value;
                padre.children[3].children[0].setAttribute("class","ver");
                padre.children[3].children[1].setAttribute("class","no");
                padre.children[3].children[0].innerText=valor3;
                
                padre.children[5].children[0].setAttribute("class","ver edita");
                padre.children[5].children[1].setAttribute("class","no");
                console.log(valor);
                const id=e.target.getAttribute("data-id");
                const obj={
                    nick:id,
                    nombre:valor,
                    apellido:valor1,
                    email:valor2,
                    password:valor3
                }   
                console.log(JSON.stringify(obj)); 
                fetch(`${location.origin}/proyecto/editar/${JSON.stringify(obj)}`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
                }).then(res=>res.json())
                .then(res => console.log(res));
                document.getElementById("arriba").innerHTML="Dato Editado";
                setTimeout(()=>{
                    document.getElementById("arriba").innerHTML="Bienvenido"; 
                },3000);


                

                
                

                

                })
                
                }
    });
    
}



