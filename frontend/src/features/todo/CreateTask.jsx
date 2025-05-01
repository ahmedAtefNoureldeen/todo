// CreateTask.jsx
import { useForm } from "react-hook-form";
import { useCreateTodo } from "./useCreateTodo";
import { useEditTodo } from "./useEditTodo";

export default function CreateTask({ taskToEdit, setShowCreateModal }) {
  const { isCreating, createTodo } = useCreateTodo();
  const { isEditing, editTodo } = useEditTodo();
  const isWorking = isCreating || isEditing;

  // Extract ID and rest of the values from taskToEdit (if available)
  const { _id: editId, ...editValues } = taskToEdit || {};
  const isEditMode = Boolean(editId);

  // Set title based on mode
  const modalTitle = isEditMode ? "Edit Task" : "Create New Task";
  // Set button text based on mode
  const buttonText = isEditMode 
    ? (isWorking ? "Saving..." : "Save Changes") 
    : (isWorking ? "Creating..." : "Create Task");

  // Initialize form with appropriate default values
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: isEditMode ? {
      title: editValues.title || "",
      description: editValues.description || "",
      dueDate: editValues.dueDate ? new Date(editValues.dueDate).toISOString().split('T')[0] : ""
    } : {
      title: "",
      description: "",
      dueDate: ""
    }
  });
  
  const onSubmit = (data) => {
    try {
      if (isEditMode) {
         editTodo(editId, data);
      } else {
         createTodo(data);
      }
      setShowCreateModal(false);
    } catch (error) {
      console.error(`Failed to ${isEditMode ? "update" : "create"} todo:`, error);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{modalTitle}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Task title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              {...register("description")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="3"
              placeholder="Task description"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
              {...register("dueDate")}
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isWorking}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}