const express = require("express")
const router = express.Router()

const imagesModel = require("../models/images")
const authModel = require("../models/auth")
const subscriptionsModel = require("../models/subscriptions")

router.get("/dashboard", async (req, res) => {
    try {
        const [
            imagesCount,
            usersCount,
            premiumDownloadsAgg,
            revenueAgg,
            recentUploads,
            topUsers
        ] = await Promise.all([
            imagesModel.countDocuments(),
            authModel.countDocuments({ status: 'active' }),
            authModel.aggregate([
                {
                    $group: { _id: null, total: { $sum: "$premiumDownloads" } }
                }]),
            subscriptionsModel.aggregate([
                { $match: { status: "success" } },
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]),
            imagesModel.find().sort({ createdAt: -1 }).limit(3),
            authModel.find().sort({ downloads: -1 }).limit(3)
        ])

        const allData = {
            imagesCount,
            usersCount,
            premiumDownloadsCount: premiumDownloadsAgg[0]?.total || 0,
            totalRevenue: revenueAgg[0]?.total || 0,
            recentUploads,
            topUsers
        }

        return res.status(200).json({ message: "Data fetched!", allData })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router