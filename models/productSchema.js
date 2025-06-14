const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  stock: { type: Number, default: 0 },
  images: [String],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Product', productSchema);