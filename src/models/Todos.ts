import mongoose, { Schema, model } from "mongoose"

const todoListSchema = new Schema({
  user_id: mongoose.Types.ObjectId, ref: 'User',
  todoList: []
});

const TodoList = model('TodoList', todoListSchema);
export default TodoList;
