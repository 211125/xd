import "../assets/stylesheets/User.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Mascotas(){

    const url="http://localhost:4443/mascotas"
    const [data, setData]= useState({
        dueno: "",
        fechaDeIngreso: "",
        motivoDeVisita: "",
        nombre: "",
        tipoDeMascota: ""

    })

    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            dueno: data.dueno,
            fechaDeIngreso: data.fechaDeIngreso,
            motivoDeVisita: data.motivoDeVisita,
            nombre: data.nombre,
            tipoDeMascota: data.tipoDeMascota
        })
        .then(res =>{
            console.log(res.data)
        })

    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }



    return (
        <React.Fragment>
            <div className="xd">
                <form  className="form-box" id="form">
                    <h3>Mascotas</h3>
                    <form className="was-validated">



                        <div className="input-group mb-3" >
                            <span class="input-group-text" id="inputGroup-sizing-default">Tipo de mascota</span>
                            <input onChange={(e)=>handle(e)} id="tipoDeMascota" value={data.tipoDeMascota} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                            <input onChange={(e)=>handle(e)} id="nombre" value={data.nombre} type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha de ingreso</span>
                            <input onChange={(e)=>handle(e)} id="fechaDeIngreso" value={data.fechaDeIngreso} type="text" className="form-control" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Motivo de la visita</span>
                            <input onChange={(e)=>handle(e)} id="motivoDeVisita" value={data.motivoDeVisita} type="text" className="form-control" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre del Dueño</span>
                            <input onChange={(e)=>handle(e)} id="dueno" value={data.dueno} type="text" className="form-control" required></input>
                        </div>

                        <div className="mb-3">
                            <Link to="/duenos" className="btn btn-outline-primary" >Anterior</Link>
                            <Link to="/Citas"  className="btn btn-outline-primary" onClick={(e)=>Enviar(e)} >continuar</Link>
                        </div>
                    </form>

                </form>
            </div>
        </React.Fragment>
    );
}

export default Mascotas;