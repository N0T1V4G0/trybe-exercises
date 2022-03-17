const fs = require('fs');

const FILEPATH = `${__dirname}/../data/simpsons.json`;
const data = JSON.parse(fs.readFileSync(FILEPATH, 'utf-8'));

exports.getAllSimpsons = (req, res, next) => {
  return res.status(200).json({
    status: 'success',
    data: {
      simpsons: data,
    },
  });
};
