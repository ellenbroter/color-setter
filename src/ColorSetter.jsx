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
	const [color, dispatch] = useReducer(reducer, "grey")
	return(
		<>
			<div className={styles.content} style={{backgroundColor: color}}>Content</div>
			<div>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'green'})}>Green</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'yellow'})}>Yellow</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'blue'})}>Blue</button>
				<button onClick={()=> dispatch({type: "SET_COLOR", payload: 'red'})}>Red</button>
			</div>
		</>
	)
}

export default ColorSetter;