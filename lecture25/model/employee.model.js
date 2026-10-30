const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        empId: {
            type: Number,
            unique: true,
            index: true
        },

        Name: {
            type: String,
            required: true,
            trim: true
        },

        salary: {
            type: Number,
            required: true,
            min: 0
        },

        department: {
            type: String,
            required: true,
            trim: true
        },

        contact: {
            type: Number,
            required: true
        },

        age: {
            type: Number,
            required: true,
            min: 18
        },

        location: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

// Automatically generate an employee ID before saving
employeeSchema.pre('save', async function () {
    if (!this.isNew || this.empId != null) {
        return;
    }

    const lastEmployee = await this.constructor
        .findOne({ empId: { $exists: true, $ne: null } })
        .sort({ empId: -1 })
        .select('empId')
        .lean();

    this.empId = lastEmployee ? lastEmployee.empId + 1 : 101;
});

module.exports = mongoose.model('employees', employeeSchema);