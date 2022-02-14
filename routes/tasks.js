const express = require('express'); 
const router = express.Router();

// import custom modules
const {getAllTasks,addTask,getTask,updateTask,deleteTask} = require('../controllers/tasks');

// routing and use controller
router.route('/').get(getAllTasks);
router.route('/').post(addTask);
router.route('/:id').get(getTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

// alternatives
// router.route('/').get(getAllTasks).post(addTask);
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;

