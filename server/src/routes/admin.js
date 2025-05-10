const express = require("express")
const router = express.Router()

const imagesModel = require("../models/images")

router.get("/dashboard", async (req, res) => {
    try {
        const imagesCnt = await imagesModel.countDocuments()

        const allData = {
            imagesCnt
        }

        return res.status(200).json({ message: "Data fetched!", allData })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router