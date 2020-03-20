const Proyecto=require('../modelo/Proyecto');

exports.proyectoHome=async(req,res)=>{
    const proyectos=await Proyecto.findAll();
    const operadores=await Proyecto.findOne({
        where:{
            puesto:"Administrador"
        }
    });
    const administrativos=await Proyecto.findOne({
        where:{
            puesto:"operador"
        }
    });
    
    res.render('index',{
        nombrePagina: 'Tareas',
        proyectoLista:proyectos,
        administrativos,
        operadores
    });
};

exports.RegistroDatos=async(req,res)=>{
    //const proyectos=await Proyecto.findAll({where:{usuarioId:res.locals.usuario.id}});
    let key = "_"+Math.random() * (10000 - 0) + 0;
	const proyectos=await Proyecto.findAll();
    
					
    req.body.nick=key;
    const nick=req.body.nick;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const email=req.body.email;
    const password=req.body.password;
    const puesto=req.body.puesto;
    //console.log(req.body);
    //res.redirect(`/`)
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  if(puesto=="" || nombre=="" || apellido=="" || email=="" || password==""){
        res.render('index',{
            nombrePagina: 'Tareas',
            proyectoLista:proyectos,
            error:"Lena correctamente los datos"
           
        });
    }else if(!expr.test(email)){
        res.render('index',{
            nombrePagina: 'Tareas',
            proyectoLista:proyectos,
            error:"Email no Valido"
           
        });
    }else{
        await Proyecto.create({nick,nombre,apellido,email,password,puesto})
    .then(()=>{
        res.redirect('/');
    })
    }
    
    
};
exports.EliminarProyecto=async(req,res,next)=>{
    
    const eliminar=await Proyecto.destroy({where:{nick:req.params.id}});
    if(!eliminar){
        return next();
    }
    res.send('Proyecto Eliminado Correctamente');
    
    };

    exports.EditarProyecto=async(req,res)=>{
        const datos=JSON.parse(req.params.id);
        //console.log(datos.nombre);
        const editarDatos=await Proyecto.findOne({
            where:{
                nick:datos.nick
            }
        });
        const nombre=datos.nombre;
        const apellido=datos.apellido;
        const email=datos.email;
        const password=datos.password;
        const agregar=await Proyecto.update({nombre,apellido,email,password},{where:{nick:datos.nick}});
        res.redirect('/');
    };

    exports.Busqueda=async(req,res)=>{
        const proyectos=await Proyecto.findAll();
        const bus=String(req.body.busqueda);
        const operadores=await Proyecto.findOne({
            where:{
                nick:bus
            }
        });
        console.log(operadores);
        res.render('index',{
            proyectoLista:proyectos,
            Busqueda:operadores
        });
    };





    
