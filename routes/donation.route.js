import express from 'express'
import * as donationController from '../controller/donation.controller.js'

const donationRoute = express.Router()

donationRoute.get("/", donationController.getAllDonations)

donationRoute.post("/", donationController.createDonation)

donationRoute.get("/:id", donationController.getDonationById)

donationRoute.get("/post/:id", donationController.getDonationsByPostId)

export default donationRoute