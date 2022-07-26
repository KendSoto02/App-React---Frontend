import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.lenght === 0) return <h1>No hay datos</h1>
        if(contents.lenght === 3 ){
            return(
                <div>
                    <ul>
                        {contents.slice(0,3).map((content) => {
                            return (
                                <div className="div-list">
                                    <li key={content.id}>
                                        <span className="Component-Title"> <b>ID Pedido: </b> {content.id} 
                                        <b> | Cliente: </b> {content.nameClient} 
                                        <b> | Plato: </b> {content.nameDish}
                                        <b> | Cantidad: </b> {content.quantity}
                                        <b> | Fecha: </b> {content.date}
                                        <b> | Estatus: </b> {content.statusOrder}</span>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                    <h3>Quedan {contents.lenght - 1}</h3>
                </div>
            )
        }else{
            return(
                <ul>
                    {contents.slice(0,10).map((content) => {
                        if(content.statusOrder != "delayed"  && content.statusOrder != "delivered"){ 
                            return (
                                <div className="div-list">
                                    <li key={content.id}>
                                        <span className="Component-Title"> <b>ID Pedido: </b> {content.id} 
                                        <b> | Cliente: </b> {content.nameClient} 
                                        <b> | Plato: </b> {content.nameDish}
                                        <b> | Cantidad: </b> {content.quantity}
                                        <b> | Fecha: </b> {content.date}
                                        <b> | Estatus: </b> {content.statusOrder}</span>
                                    </li>
                                </div>
                            )
                        }
                        
                    })}
                </ul>
            )
         
        }
        
}
export default List;