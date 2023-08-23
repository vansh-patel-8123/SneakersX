const mongoose = require("mongoose");

const UserModel = new Schema({
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
    },
    merchant: {
        type: Schema.Types.ObjectId,
        ref: "Merchant",
        default: null,
    },
    provider: {
        type: String,
        required: true,
        default: EMAIL_PROVIDER.Email,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        default: ROLES.Member,
        enum: [ROLES.Admin, ROLES.Member, ROLES.Merchant],
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    updated: {
        type: Date,
        default: Date.now,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserModel);