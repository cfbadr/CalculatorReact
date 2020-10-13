import React, { useState } from "react";

import Number from './components/number.js'
import Operator from './components/operator.js'
import SpecialOperator from './components/specialOperator.js'

const App = () => {
	const [calculString, setCalculString] = useState('')
  	return (
		<div style={{paddingTop: 40,}}>
			<div className="container-fluid">
				<div className="row">
					<div style={{border: 'solid', borderWidth: 6, height: 100, padding: 0}} className="col-12">
						<input style={{height: '100%', width: '100%', fontSize: 48, textAlign: 'right', fontFamily: 'VT323'}} value={calculString}></input>
					</div>
				</div>
				<div className="row">
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={7} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={8} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={9} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Operator value="*" func={setCalculString} actualNumber={calculString}/>
					</div>
				</div>
				<div className="row">
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={4} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={5} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={6} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Operator value="-" func={setCalculString} actualNumber={calculString}/>
					</div>
				</div>
				<div className="row">
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={1} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={2} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={3} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}}>
						<Operator value="+" func={setCalculString} actualNumber={calculString}/>
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{backgroundColor: 'blue', padding: 0}}>
						<Number value={0} func={setCalculString} actualNumber={calculString}/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}} onClick={() =>setCalculString(eval(calculString))}>
						<SpecialOperator value="="/>
					</div>
					<div className="col-3" style={{backgroundColor: 'blue', padding: 0}} onClick={() =>setCalculString('')}>
						<SpecialOperator value="A/C"/>
					</div>
		
				</div>
			</div>
		</div>
  );
};

export default App;
