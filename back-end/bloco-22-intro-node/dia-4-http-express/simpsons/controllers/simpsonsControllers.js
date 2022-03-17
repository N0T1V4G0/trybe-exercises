const fs = require('fs');

const FILEPATH = `${__dirname}/../data/simpsons.json`;
const data = JSON.parse(fs.readFileSync(FILEPATH, 'utf-8'));

exports.checkID = (req, res, next) => {
  const id = data.find((el) => el.id === req.params.id);
  if (!id) {
    return res.status(404).json({
      status: 'not found',
      message: 'invalid ID',
    });
  }
  next();
};

exports.getSimpson = (req, res) => {
  const simpson = data.find((el) => el.id === req.params.id);
  return res.status(200).json({
    status: 'ok',
    message: 'success',
    data: {
      simpson,
    },
  });
};

exports.getAllSimpsons = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      simpsons: data,
    },
  });
};
