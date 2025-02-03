import React from 'react';

// Step 8: import Checkbox control from the kendo-react-inputs library.
import { Checkbox } from '@progress/kendo-react-inputs';

// Step 1: We will add a simple prop definition for our individual Task items.
interface Task {
	id: string;
	title: string;
	completed: boolean;
}

// Step 2: Create a basic static list of Task items.
const tasks: Task[] = [
	{ id: "AB123", title: "Write article introduction", completed: false },
	{ id: "AB1234", title: "Implement task list view", completed: false },
	{ id: "AB1235", title: "Add checkbox functionality", completed: false },
];

// Step 3: Create our TaskList component.
export default function TaskList() {
	return (
		<ul>
			{/*Step 4: Loop over the array and populate our Task List.*/}
			{tasks.map((task) => (
				<li key={task.id}>
					{/*{task.title}*/}
					{/* Step 9: Update the list item with a Checkbox control */}
					<Checkbox label={task.title} />
				</li>
			))}
		</ul>
	);
}