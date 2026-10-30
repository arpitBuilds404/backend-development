const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./model/employee.model.js');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Validate MongoDB ObjectId
function isValidId(id) {
    return mongoose.isValidObjectId(id);
}

// ==========================================
// 1. GET: Fetch all employees
// ==========================================
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 2. GET: Fetch employee by MongoDB ID
// ==========================================
app.get('/api/employees/:id', async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid employee ID'
            });
        }

        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 3. POST: Create an employee
// ==========================================
app.post('/api/employees', async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Employee created successfully',
            data: employee
        });
    } catch (error) {
        if (
            error.name === 'ValidationError' ||
            error.name === 'StrictModeError'
        ) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'Duplicate employee ID'
            });
        }

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 4. PUT: Update an employee
// ==========================================
app.put('/api/employees/:id', async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid employee ID'
            });
        }

        // Prevent clients from changing the generated employee ID
        const updateData = { ...req.body };
        delete updateData.empId;
        delete updateData._id;

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Employee updated successfully',
            data: employee
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 5. DELETE: Remove an employee
// ==========================================
app.delete('/api/employees/:id', async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid employee ID'
            });
        }

        const employee = await Employee.findByIdAndDelete(
            req.params.id
        );

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Employee deleted successfully',
            data: employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ==========================================
// 6. Handle unknown routes
// ==========================================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`
    });
});

// ==========================================
// 7. Connect MongoDB and start server
// ==========================================
async function startServer() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/googledb');
    

        console.log('Database Connected');

        app.listen(port, () => {
            console.log(
                `Server is running on http://localhost:${port}`
            );
        });
    } catch (error) {
        console.error(
            'Database connection failed:',
            error.message
        );

        process.exit(1);
    }
}

startServer();