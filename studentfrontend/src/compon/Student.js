import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Container, Paper, Button } from "@mui/material";
import { useState } from "react";

export default function Student() {
	const paperStyle = {
		width: 700,
		margin: "20px auto",
		textAlign: "center",
	};

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		const student = { name, address };
		console.log(student);

		fetch("http://localhost:8080/student/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(student),
		}).then(() => {
			console.log("Succesfull");
		});
	};
	return (
		<Container>
			<Paper
				elevation={3}
				style={{
					padding: "70px",
					width: 700,
					margin: "60px auto",
					textAlign: "center",
				}}
			>
				<h1 style={{ color: "blue" }}>ADD STUDENT</h1>
				<form noValidate autoComplete="off">
					<TextField
						id="outlined-basic"
						label="Student Name"
						variant="outlined"
						sx={{ m: 1, width: "25ch" }}
						fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="Student address"
						sx={{ m: 1, width: "25ch" }}
						fullWidth
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						sx={{ padding: "20px", mt: 2 }}
						onClick={handleClick}
					>
						Acept
					</Button>
				</form>
			</Paper>
		</Container>
	);
}
