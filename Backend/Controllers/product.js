const Product = require("../Models/productSchema");

module.exports = {
    async createProduct(req, res) {
        const { name, image_url, information } = req.body;

        if (!name || !image_url || !information) {
            return res.json({error:"Fill all the required fields"})
        }

        const product = new Product({
            name,
            image_url,
            information
        });

        product.save().then(() => {
            return res.json({ message: "Product Created" });
        });
    },

    async getAllProducts(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    async getProductById(req, res) {
        const { product_id } = req.body;
        const product = await Product.findById(product_id);

        return res.json(product);
    }
}