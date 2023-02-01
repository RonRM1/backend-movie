import Movie from "../models/Movie.js";
import MovieRental from "../models/MovieRental.js";

const MoviesController = {};

MoviesController.getAll = async (req, res) => {
  try {
    const movies = await Movie.find();

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

MoviesController.rent = async (req, res) => {
  try {
    const userId = req.user_id;
    const movieId = req.params.id;

    const { price } = req.body;

    const movieRental = {
      user_id: userId,
      movie_id: movieId,
      date: new Date(),
      price: price,
    };

    await MovieRental.create(movieRental);

    return res.status(200).json({
      success: true,
      message: "Rented movie succsessfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error renting movie",
      error: error.message,
    });
  }
};

MoviesController.get = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    return res.status(200).json({
      success: true,
      message: "Get movie retrieved succsessfully",
      results: movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movie",
      error: error.message,
    });
  }
};

export default MoviesController;
