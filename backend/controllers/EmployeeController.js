import Employee from "../models/EmployeeModel.js";
 
export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    try {
        const insertedEmployee = await employee.save();
        res.status(201).json(insertedEmployee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.deleteOne({_id:req.params.id});
        res.status(200).json(deletedEmployee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}