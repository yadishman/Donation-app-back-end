import Donation from "../models/donation.model.js"

export const addTotalDonationAmount = async (posts) => {
    if (Array.isArray(posts)===false){
        posts=[posts]
    }
    const postsWithDonationAmount = await Promise.all(
        posts.map(async (post) => {
            console.log(post)
            let totalDonation = 0;
            let totalCount = 0;
            const donations = await Donation.find({ post: post._id });

            donations.forEach(donation => {
                totalCount +=1;
                totalDonation += Number(donation.amount);
            });
            post._doc.amount=totalDonation
            post._doc.donator_count=totalCount
            return post;
        })
    );


    if (postsWithDonationAmount.length == 1){
        return postsWithDonationAmount[0]
    }
    return postsWithDonationAmount
};
