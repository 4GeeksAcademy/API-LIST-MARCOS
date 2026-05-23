import React, { useState } from "react";

const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function addTask(e) {

		if (e.key === "Enter" && inputValue !== "") {

			fetch('https://playground.4geeks.com/todo/todos/Marcos', {
				method: 'POST', // or 'POST'
				body: JSON.stringify({
					"label": inputValue,
					"is_done": false
				}), // data can be a 'string' or an {object} which comes from somewhere further above in our application
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));

			// setTasks([...tasks, inputValue]);
			// setInputValue("");

		}
	}

	function getTask() {
		fetch('https://playground.4geeks.com/todo/users/Marcos', {
			method: 'GET'
		})


			.then((response) => {
				return response.json();
			})


			.then((data) => { console.log(data) })


			.catch(() => { })



	}

	function deleteTask(index) {

		let newTasks = tasks.filter(function (task, i) {

			return i !== index;
		});

		setTasks(newTasks);
	}

	return (
		<div className="container mt-5 d-flex justify-content-center">
			<button onClick={() => { getTask() }}>
				<p>prueba</p>
			</button>





		</div>




	)
}
export default Home;