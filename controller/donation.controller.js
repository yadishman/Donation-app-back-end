import Donation from "../models/donation.model.js";
export const createDonation = async (req,resp)=>{
    try{ 
        await Donation.create(req.body)
        resp.status(201).json({message: "donation made successfuly"})
    }
    catch(error){
        resp.status(400).json({message: "failed to create user"})
        console.log(error)
    }
}

export const getAllDonations = async (req, resp)=>{

    try {
        const donations= await Donation.find()
        resp.json(donations).status(200)
    }
    catch(error){
        resp.json({message:`error occured ${error}`}).status(404)
    }
}

export const getDonationById = async (req,resp)=>{
    try{  
        const donation = await Donation.findById(req.params.id)
        resp.json(donation).status(200)
    }
    catch(error){
        resp.json({message: `an error occured : ${error}`}).status(404)
    }

}

export const getDonationsByPostId = async(req, resp) =>{
    try{
        const donations = await Donation.find({post:req.params.id}).populate('donor')
        resp.json(donations).status(200)
    }
    catch(error){
        resp.json({message: `an error occured: ${error}`}).stautus(404)
    }
}