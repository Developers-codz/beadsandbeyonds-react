import { Response } from "miragejs";

/**
 * All the routes related to carousel are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all carousels in the db.
 * send GET Request at /api/carousels
 * */

export const getAllCarouselsHandler = function () {
  return new Response(200, {}, { carousels: this.db.carousels });
};

/**
 * This handler handles gets all carousels in the db.
 * send GET Request at /api/user/carousels/:carouselId
 * */

export const getCarouselHandler = function (schema, request) {
  const carouselId = request.params.carouselId;
  try {
    const carousel = schema.carousels.findBy({ _id: carouselId });
    return new Response(200, {}, { carousel });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
