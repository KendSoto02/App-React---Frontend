import React, { useState, useEffect } from "react";
import { putFetch } from "../components/FetchMethods";
const FormState = () => {
	const [statusOrderEdit, setStatusOrderEdit] = useState("");
  
	const [idEdit, setIdEdit] = useState("");
	const [message1, setMessage1] = useState("");
	const [refresh, setRefresh] = useState(true);

	const handleEdit = async (e) => {
		e.preventDefault();
		try {
		    putFetch(`orders/${idEdit}`, {statusOrder: statusOrderEdit}).then(() => {
			setIdEdit("");
			setStatusOrderEdit("");
			setMessage1("Editado correctamente");
			setRefresh(true);
			window.location.replace('');
		  })
	
		} catch (err) {
		  console.log(err)
		}
	
	  }
	

	  return(
		<div>
		  <form onSubmit={handleEdit}>
		   <input
			  type="text"
			  value={idEdit}
			  placeholder="ID"
			  onChange={(e) => setIdEdit(e.target.value)}
			  style={{width: "400px"}}
			/>
		    <input
			  type="text"
			  value={statusOrderEdit}
			  placeholder="Estado"
			  onChange={(e) => setStatusOrderEdit(e.target.value)}
			  style={{width: "400px"}}
			/>
			<div>{message1 ? <p>{message1}</p> : null}</div>
			<button type="submit">Cambiar Estado</button>
	       </form>
		</div>
	  );
}

export default FormState;
