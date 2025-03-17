import React, { useState, useEffect } from "react";
import {
	TextField,
	Container,
	Paper,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

export default function Student() {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [students, setStudents] = useState([]);

	// Lấy danh sách sinh viên khi component được render
	useEffect(() => {
		fetch("http://localhost:8080/student/getAll")
			.then((res) => res.json())
			.then((data) => setStudents(data))
			.catch((err) => console.error("Error fetching students:", err));
	}, []);

	// Hàm thêm sinh viên
	const handleClickAdd = (e) => {
		e.preventDefault();
		const student = { name, address };

		fetch("http://localhost:8080/student/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(student),
		}).then(() => {
			console.log("Success");
			setStudents([...students, student]);
		});
	};

	const handleClickDelete = (studentId) => {
		fetch(`http://localhost:8080/student/delete/${studentId}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) {
					setStudents(
						students.filter((student) => student.id !== studentId)
					);
					console.log("Deleted");
				} else {
					console.error("Dont delete student");
				}
			})
			.catch((error) => console.error("Error:", error));
	};

	return (
		<Container>
			<Paper
				elevation={3}
				style={{
					padding: "20px",
					width: 700,
					margin: "60px auto",
					textAlign: "center",
				}}
			>
				<h1 style={{ color: "blue" }}>ADD STUDENT</h1>
				<form noValidate autoComplete="off">
					<TextField
						label="Student Name"
						variant="outlined"
						fullWidth
						sx={{ m: 1 }}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label="Student Address"
						variant="outlined"
						fullWidth
						sx={{ m: 1 }}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						sx={{ mt: 2 }}
						onClick={handleClickAdd}
					>
						Add
					</Button>
				</form>
			</Paper>

			<Paper
				elevation={3}
				style={{
					padding: "20px",
					width: 700,
					margin: "20px auto",
					textAlign: "center",
				}}
			>
				<h2>Student List</h2>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<b>ID</b>
								</TableCell>
								<TableCell>
									<b>Name</b>
								</TableCell>
								<TableCell>
									<b>Address</b>
								</TableCell>
								<TableCell>
									<b>Action</b>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{students.map((student) => (
								<TableRow key={student.id}>
									<TableCell>{student.id}</TableCell>
									<TableCell>{student.name}</TableCell>
									<TableCell>{student.address}</TableCell>
									<TableCell>
										<Button
											variant="contained"
											color="secondary"
											onClick={() =>
												handleClickDelete(student.id)
											}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Container>
	);
}
