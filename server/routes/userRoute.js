import express from "express";
import { getAllBookings, bookVisit, createUser, cancelBooking, toFav, getAllFavourites } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register",createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookings)
router.post("/removeBooking/:id",cancelBooking)
router.post("/toFav/:rid",toFav)
router.post("/allFav/",getAllFavourites)


export {router as userRoute}