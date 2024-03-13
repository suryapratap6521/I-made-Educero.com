const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, // Make description field required
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);
