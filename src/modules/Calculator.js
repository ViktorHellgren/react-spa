import React from "react";
import logo from './img/calculator.png'
import './Calculator.css';
class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentNumber: "",
			savedNumber: "",
			display: "DISPLAY",
			operation: "",
		}
  
	}



	clear() {
		this.setState({
			currentNumber: "",
			savedNumber: "",
			display: "",
			operation: "" 
		}) 

	}
	write(number) {
	
		this.setState({
			display: this.state.display + number.toString(),
			currentNumber: this.state.currentNumber + number
			}) 
		console.log(typeof this.state.display)

	}

	plus() {

		this.setState({
			savedNumber: this.state.currentNumber,
			currentNumber: "",
			display: this.state.display + "+",
			operation: "ADD"
			}) 
	}

	minus() {
		this.setState({
			savedNumber: this.state.currentNumber,
			currentNumber: "",
			operation: "SUB"
			}) 

	}

	multiply() {
		this.setState({
			savedNumber: this.state.currentNumber,
			currentNumber: "",
			operation: "MUL"
			}) 

	}

	divide() {
		this.setState({
			savedNumber: this.state.currentNumber,
			currentNumber: "",
			operation: "DIV"
			}) 
	}

	equals() {
		
		let cNumber = parseInt(this.state.currentNumber)
		let sNumber = parseInt(this.state.savedNumber)
	
	
		switch (this.state.operation){
			case "ADD":
				this.setState({display: sNumber + cNumber}) 
				break
			case "SUB":
				this.setState({display: sNumber - cNumber}) 
				break
			case "MUL":
				this.setState({display: sNumber * cNumber}) 
				break
			case "DIV":
				if (sNumber !== 0) {
					this.setState({display: sNumber / cNumber}) 
					} else return "Error"
				break
		}
		console.log(this.state)
		this.setState({
			savedNumber: "",
			currentNumber: ""
			}) 
		console.log(this.state)
	}


	render() {
		
		return 	(
		<div className="container">
			<img src={logo} className="logo"></img>
			<div className="calculator">
				<p id="calc-header">Calculator</p>
				<p id="display">{this.state.display}</p>
				<div class="buttons">
					<row>
						<button id="b7" onClick={() => this.write(7)}>7</button>
						<button id="b8" onClick={() => this.write(8)}>8</button>
						<button id="b9" onClick={() => this.write(9)}>9</button>
						<button id="b-divide" onClick={() => this.divide()}>&divide;</button>
					</row>
					<row>
						<button id="b4" onClick={() => this.write(4)}>4</button>
						<button id="b5" onClick={() => this.write(5)}>5</button>
						<button id="b6" onClick={() => this.write(6)}>6</button>
						<button id="b-times" onClick={() => this.multiply()}>&times;</button>
					</row>
					<row>
						<button id="b1" onClick={() => this.write(1)}>1</button>
						<button id="b2" onClick={() => this.write(2)}>2</button>
						<button id="b3" onClick={() => this.write(3)}>3</button>
						<button id="b-minus" onClick={() => this.minus()}>&minus;</button>
					</row>
					<row>
						<button id="b0" onClick={() => this.write(0)}>0</button>
						<button id="b-equals" onClick={() => this.equals()}>=</button>
						<button id="b-plus" onClick={() => this.plus()}>+</button>
						<button id="b-c" onClick={() => this.clear()}>c</button>
					</row>
				</div>
			</div>
		</div>
		)
	}
	

}

export default Calculator;
