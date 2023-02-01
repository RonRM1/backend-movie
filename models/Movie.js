import { Schema, model } from "mongoose";

const MoviesSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", MoviesSchema);

export default Movie;
