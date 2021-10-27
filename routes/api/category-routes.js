const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }

  res
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body); // What options should this take?
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryFound = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!categoryFound) res.status(404).json("Category not found");
    else res.status(200).json("category deleted successfully");
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = router;
