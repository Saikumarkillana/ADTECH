import React ,{userState} from "react";
import "./index.css"
const data = [{id:1,DarpementName:"FullStack",NumberOfEmplyies:"14"},
{id:2,DarpementName:"FrentEnd",NumberOfEmplyies:"13"},
{id:3,DarpementName:"UI/UX",NumberOfEmplyies:"14"},
{id:4,DarpementName:"BACKEND",NumberOfEmplyies:"13"},

]

const Main = () => {

	return (
		<div className="app-containe" >
            <div className="button-container">
            <h1>Departement</h1>
            </div>
            <table >
                <thead>
                    <th>id</th>
                    <th>Departement</th>
                    <th>NumberOfEmplyies</th>
                </thead>
                <tbody>
                     {data.map((contacts)=>(
                        <tr>
                        <td>{contacts.id}</td>
                        <td>{contacts.DarpementName}</td>
                        <td>{contacts.NumberOfEmplyies}</td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
			
		</div>
	);
};

export default Main;