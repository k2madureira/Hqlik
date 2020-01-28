const SetAnalysis = require('./../schemas/Setanalysis');

class setController {

  async store(req, res) {
    const { name, functionality, code } = req.body;
    const set = await SetAnalysis.create({
      name,
      functionality,
      code
    });

    return res.json({
      set
    });
  }

}

module.exports = new setController();