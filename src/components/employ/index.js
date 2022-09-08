import React ,{userState} from "react";
import "./index.css"
const data = [{id:1,name:"X",Darpement:"FullStack",Experance:"2y"},
{id:2,name:"y",Darpement:"FullStack",Experance:"2y"},
{id:3,name:"u",Darpement:"FrentEnd",Experance:"2y"},
{id:4,name:"Xy",Darpement:"FullStack",Experance:"2y"},
]

const Main = () => {

	return (
		<div className="app-containe" >
            <div className="button-container">
            <h1>EMPLOY</h1>
            <button className="button">ADD Employ</button>
            </div>
            <table >
                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>Darpement</th>
                    <th>Experance</th>
                </thead>
                <tbody>
                     {data.map((contacts)=>(
                        <tr>
                        <td>{contacts.id}</td>
                        <td>{contacts.name}</td>
                        <td>{contacts.Darpement}</td>
                        <td>{contacts.Experance}</td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
			
		</div>
	);
};

export default Main;