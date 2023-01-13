import Movies from "../models/Movie.js";

const MoviesController = {};

MoviesController.getAll = async (req, res) => {
  try {
    const movies = await Movies.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      results: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movies",
      error: error.message,
    });
  }
};

MoviesController.getById = async (req, res) => {
  try {
    const id= req.params.id
    const movies = await Movies.findOnrne({id:id});

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      results: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movies",
      error: error.message,
    });
  }
};



export default MoviesController;

