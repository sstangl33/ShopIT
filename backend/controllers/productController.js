exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will show all of the products in the database.",
  });
};
