const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { Schema } = mongoose;


// Slug Generator
const options = {
    separator: "-",
    lang: "en",
    truncate: 120,
};
mongoose.plugin(slug, options);



const ProductSchema = new Schema({
    sku: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
    },
    slug: {
        type: String,
        slug: "name",
        unique: true,
    },
    imageUrl: {
        type: String,
    },
    imageKey: {
        type: String,
    },
    description: {
        type: String,
        trim: true,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    taxable: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        default: null,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', ProductSchema);