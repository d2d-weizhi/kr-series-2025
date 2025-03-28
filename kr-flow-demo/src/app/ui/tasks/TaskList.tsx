"use client";

import React, { useState, useEffect } from 'react';
import { Checkbox } from '@progress/kendo-react-inputs';
import "./tasklist.css";

interface Task {
	id: string;
	title: string;
	completed: boolean;
}

/*const tasks: Task[] = [
	{ id: "AB123", title: "Write article introduction", completed: false },
	{ id: "AB1234", title: "Implement task list view", completed: false },
	{ id: "AB1235", title: "Add checkbox functionality", completed: false },
];*/

export default function TaskList() {
	const [taskList, setTaskList] = useState<Task[]>([]);
	
	// Perhaps we can add the useEffect hook right here.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('./data/tasks/get_tasks_v1.json');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setTaskList(data);
			} catch (error) {
				console.error('Error fetching data:', error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};
		
		fetchData();
	})
	
	function onCompletionChange(event: any, taskId: string) {
		setTaskList((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: event.value } : task
			)
		);
	}
	
	return (
		<ul className="task-list">
			{taskList.map((task) => (
				<li key={task.id}>
					<Checkbox
						label={task.title}
						labelClassName={task.completed ? "completed-item" : ""}
						checked={task.completed}
						onChange={(event: any) => onCompletionChange(event, task.id)}
					/>
				</li>
			))}
		</ul>
	);
}