import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    { timestamps: true }
)

const Donation = mongoose.model("Donation", donationSchema)

export default Donation 