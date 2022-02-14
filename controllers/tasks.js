const Task = require('../models/Task');

// getting all task
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
        // res.status(200).json({success: true, data: {tasks}});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// adding task
const addTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

// getting specific task 
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskId}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

// update task
const updateTask = async (req, res) => {
    try{
        const { id: taskId} = req.params; 
        const taskDetail = req.body;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
            new:true,
            runValidators:true
        });
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskId}` });
        }
        res.status(200).json({task, status:'successfuly updated'});
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}

// delete task
const deleteTask = async (req, res) => {
    try{
        const {id:taskId}= req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskId}` });
        }
        res.status(200).json({task, status: 'success'});
    }
    catch(error){
        res.status(500).json({ msg: error.message});
    }
}

module.exports = {
    getAllTasks,
    addTask,
    getTask,
    updateTask,
    deleteTask
};