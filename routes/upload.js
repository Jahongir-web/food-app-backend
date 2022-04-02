const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.error.noUpload(res);

    const file = req.files.file;
    if (file.size > 5 * 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.error.invalidSize(res);
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.error.invalidType(res);
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "Kvadrat metr" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    res.error.serverErr(res, err);
  }
});

router.post("/destroy", (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.error.invalidPublicId(res);

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;
      res.json({ message: "Image is deleted" });
    });
  } catch (err) {
    res.error.serverErr(res, err);
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
