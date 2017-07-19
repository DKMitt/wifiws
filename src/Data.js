import React, { Component } from 'react';
import './index.css';
import * as firebase from 'firebase';


class Data extends Component {

		constructor() {
		super();
		this.state = {
			ctemp: 13,
			chumidity: 23,
			cvolts: 0.75,
			htemp: 0,
			hhumidity: 0
		};

	}


	componentDidMount() {
		const rootRef = firebase.database().ref().child('wsdata');




		const ctempRef = rootRef.child('ctemp');
		ctempRef.on('value', snap => {
			this.setState({
				ctemp: snap.val()
			});
		});

		const chumidityRef = rootRef.child('chumidity');
		chumidityRef.on('value', snap => {
			this.setState({
				chumidity: snap.val()
			});
		});

		const cvoltsRef = rootRef.child('cvolts');
		cvoltsRef.on('value', snap => {
			this.setState({
				cvolts: snap.val()
			});
		});

		const htempRef = rootRef.child('history/htemp');
		htempRef.on('value', snap => {
			this.setState({
				htemp: snap.val()
			});
		});

		const hhumidityRef = rootRef.child('history/hhumidity');
		hhumidityRef.on('value', snap => {
			this.setState({
				hhumidity: snap.val()
			});
		});

	}

	render() {
		return (

			<div className="container-fluid col-md-12">

				<div className="col-md-12 ">
				</div>

	
				<div className="col-md-10 col-md-offset-1">
			        <h2>Data</h2>
			        <p>This is the JSON data stream</p>

			    
			        <div className="panel panel-success">
					    <div className="panel-heading">
					       <span> JSON Data Temperature</span>
					    </div>
					    <div className="panel-body">
					        <div className="row">
					            <div className="col-lg-12">
					                
					                
					                {JSON.stringify(this.state.htemp)}

					            </div>
					        </div>
					    </div>
					</div>

					<div className="panel panel-success">
					    <div className="panel-heading">
					       <span> JSON Data - Humidity</span>
					    </div>
					    <div className="panel-body">
					        <div className="row">
					            <div className="col-lg-12">
					                
					                
					                {JSON.stringify(this.state.hhumidity)}

					            </div>
					        </div>
					    </div>
					</div>

			    </div>  

				<div className="col-md-12">
			        <div className="footer-space"> 
				        <hr></hr>
				        	<p>copyright © 2017 WiFi Weather Station</p>
				        <br></br>
			    	</div>
		    	</div>
			</div>
		);
	}
}



export default Data;