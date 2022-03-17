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

exports.validadeID = (req, res, next) => {
  const { id } = req.body;
  const simpsonID = data.find((el) => el.id === id);
  if (simpsonID) {
    return res.status(409).json({
      status: 'conflict',
      message: 'ID already exists',
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

exports.createSimpson = (req, res, next) => {
  const { id, name } = req.body;
  const newSimpson = { id, name };
  const newData = JSON.stringify([...data, newSimpson]);
  fs.writeFile(FILEPATH, newData, (err) => {
    return res.status(201).json({
      status: 'success',
      message: 'simpson created',
      data: {
        simpson: newSimpson,
      },
    });
  });
};
