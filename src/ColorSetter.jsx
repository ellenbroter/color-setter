import React from "react";
import styles from "./ColorSetter.module.css"
import { useReducer } from "react";

const ColorSetter = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'SET_COLOR':

			return action.payload
			default:
			return state;
		}
	}
	const [color, dispatch] = useReducer(reducer, "lightgrey")
	return(
		<>
			<div className={styles.content} style={{backgroundColor: color}}>Content</div>
			<div>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'lightgreen'})}>Green</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'lightyellow'})}>Yellow</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'lightblue'})}>Blue</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'lightcoral'})}>Red</button>
			</div>
		</>
	)
}

export default ColorSetter;