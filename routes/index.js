const express=require('express');
const ruta=express.Router();
const ProyectoControlador=require('../controlador/ProyectoControlador');

module.exports=function(){
    ruta.get('/',ProyectoControlador.proyectoHome);
    ruta.post('/registro',ProyectoControlador.RegistroDatos);
    ruta.delete('/proyecto/:id',ProyectoControlador.EliminarProyecto);
    ruta.post('/proyecto/editar/:id',ProyectoControlador.EditarProyecto);
    ruta.post('/busqueda',ProyectoControlador.Busqueda);
    /*ruta.get('/nuevos-proyecto',ProyectoControlador.proyectoNuevoFormulario);
    ruta.post('/nuevos-proyecto',ProyectoControlador.proyectoNuevo);
    ruta.post('/nuevos-proyecto/:id',ProyectoControlador.EditarProyecto);
    ruta.get('/proyecto/:url',ProyectoControlador.proyectoURL);
    ruta.get('/proyecto/editar/:id',ProyectoControlador.formularioEditar);
    ruta.delete('/proyecto/:id',ProyectoControlador.EliminarProyecto);
    ruta.post('/proyecto/:url',TareasControlador.agregarTarea);
    ruta.patch('/tareas/:id',TareasControlador.EditarTarea);
    ruta.delete('/tareas/:id',TareasControlador.EliminarTarea);
    ruta.get('/crear-cuenta',UsuarioControlador.crearCuenta);
    ruta.post('/crear-cuenta',UsuarioControlador.agregarUsuario);
    ruta.get('/iniciar-sesion',UsuarioControlador.formularioIniciarSession);
    ruta.post('/iniciar-sesion',AutenticarControlador.autenticarUsuario);
    ruta.get('/cerrar-sesion',AutenticarControlador.CerrarSesion);
    ruta.get('/reestablecer',UsuarioControlador.formularioContraseñaRecupera);
    ruta.post('/reestablecer',AutenticarControlador.generaToken);
    ruta.get('/reestablecer/:token',AutenticarControlador.RecuperaContraseña);
    ruta.post('/reestablecer/:token',AutenticarControlador.CambiarContraseña);*/

    
    return ruta;
}