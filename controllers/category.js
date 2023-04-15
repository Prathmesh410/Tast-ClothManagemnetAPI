const Category = require('../models/category');

exports.getCategoryById = (req,res,next ,id) =>{
    Category.findById(id).exec((err,cate) => {
        if(err){
            return res.status(400).json({
                error : "Category not found in Db"
            })
        }
        req.category = cate;

        next();
    })

};

exports.getCategory = (req,res) => {
    return res.json(req.category);
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);

  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to create category',
      });
    }
    res.json({ category });
  });
};


exports.getAllCategory = (req,res) => {
    Category.find().exec((err,categories) =>{
        if(err){
            return res.status(400).json({
                error : "No Category found"
            });
        }
            res.json(categories);
    });

};

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.size = req.body.size;
    category.season = req.body.season;
    category.gender = req.body.gender;
  
    category.save((err, updatedCategory) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category"
        });
      }
      res.json(updatedCategory);
    });
  };
  
exports.removeCategory = (req,res) =>{

    const category = req.category;
   

    category.remove((err,Category) => {
    if(err){
        return res.status(400).json({
            error : "Faild to delete"
        });

    }
    res.json({
        message : `${Category.name} is deleted`
    });
});
}