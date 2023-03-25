const uploadFile = require("../helpers/fileupload.js");



exports.upload = async (req, res) => {
  try {
    //var originalFilename = req.file.originalFilename;
    
    console.log(__basedir + "/resources/static/assets/uploads/");
    console.log(req.body);
    console.log(req.file);
    console.log(req.headers.authorization);
    //req.body.filename = 
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + res.req.file.filename,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file:  ${err}`,
    });
  }
};


exports.getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

exports.download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
