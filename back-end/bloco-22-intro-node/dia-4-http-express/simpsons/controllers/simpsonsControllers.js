const fs = require('fs');

const FILEPATH = `${__dirname}/../data/simpsons.json`;

exports.getAllSimpsons = async (req, res, next) => {
  try {
    await fs.readFile(FILEPATH, 'utf-8', (err, data) => {
      const jsonData = JSON.parse(data);
      return res.status(200).json({
        status: 'success',
        data: {
          simpsons: jsonData,
        },
      });
    });
  } catch (e) {
    next(e);
  }
};
