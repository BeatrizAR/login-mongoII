import React, {Fragment, useState} from 'react';

function Registro() {
    
    const [datos, setDatos] = useState({
        usuario: '',
        email: '',
        password:'',
        confirm_password:''
    })
    
    return (
        <Fragment>
            
            <form className="row" >
                <div class="col-sm-8" ></div>
                <div className="col-sm-4">
                    <h1>Registro</h1>
                    <input type="text" placeholder="usuario" className="form-control"  name="usuario"></input><br/>
                    <input type="email" placeholder="email" className="form-control"  name="email"></input><br/>
                    <input type="password" placeholder="password" className="form-control"  name="password"></input><br/>
                    <input type="password" placeholder="confirm_password" className="form-control"  name="confirm_password"></input><br/>
                    <hr/>
                    <button type="submit" className="btn btn-dark">Enviar</button>
                </div>
                
            </form>
        </Fragment>
    )
}

export default Registro
