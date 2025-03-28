export default function TaskDetailsForm() {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="text-xl font-semibold mb-4">Task Details</h3>
			<hr className="my-4 border-gray-300"/>
			{/* Horizontal rule */}
			
			<div className="grid grid-cols-2 gap-4"> {/* 2-column grid */}
				<div>
					<label htmlFor="taskTitle" className="inline-block text-sm font-medium text-gray-700">
						Title:
					</label>
					<input
						type="text"
						id="taskTitle"
						className="mt-1 p-2 border rounded-md w-full"
					/>
				</div>
				{/* Add more label/field pairs here */}
			</div>
			
			<hr className="my-4 border-gray-300"/>
			
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Save Details
			</button>
		</div>
	);
}