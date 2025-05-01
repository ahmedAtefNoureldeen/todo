// import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createTodo, updateTodo } from "../services/api";
// import toast from "react-hot-toast";

// function TodoForm({ todo = null, onClose }) {
//   const [formData, setFormData] = useState({
//     title: todo?.title || "",
//     description: todo?.description || "",
//     dueDate: todo?.dueDate
//       ? new Date(todo.dueDate).toISOString().split("T")[0]
//       : "",
//     status: todo?.status || "pending",
//   });

//   const queryClient = useQueryClient();

//   const { mutate: createTodoItem, isLoading: isCreating } = useMutation({
//     mutationFn: createTodo,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//       toast.success("Todo created successfully!");
//       onClose?.();
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   const { mutate: updateTodoItem, isLoading: isUpdating } = useMutation({
//     mutationFn: ({ id, data }) => updateTodo(id, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//       toast.success("Todo updated successfully!");
//       onClose?.();
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (todo) {
//       updateTodoItem({ id: todo._id, data: formData });
//     } else {
//       createTodoItem(formData);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label
//           htmlFor="title"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           required
//           value={formData.title}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="description"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Description
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           rows={3}
//           value={formData.description}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="dueDate"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Due Date
//         </label>
//         <input
//           type="date"
//           id="dueDate"
//           name="dueDate"
//           required
//           value={formData.dueDate}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="status"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Status
//         </label>
//         <select
//           id="status"
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         >
//           <option value="pending">Pending</option>
//           <option value="completed">Completed</option>
//         </select>
//       </div>

//       <div className="flex justify-end gap-2">
//         <button
//           type="button"
//           onClick={onClose}
//           className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           disabled={isCreating || isUpdating}
//           className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
//         >
//           {isCreating || isUpdating
//             ? "Saving..."
//             : todo
//             ? "Update Todo"
//             : "Create Todo"}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default TodoForm; 