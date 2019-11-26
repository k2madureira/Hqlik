

class qualityController {
  index(req, res) {
    const { columns } = req.body;

    const descriptive = columns.split(",")
    .map(r => `IF(ISNULL(${r.trim()}) OR LEN(TRIM(${r.trim()})) = 0, '*NÃO PREENCHIDO*', TRIM(${r.trim()})) as ${r.trim()}`)
    .join(",");

    var countColumns = columns.split(",").length;
    var arr = {
      "details":[]
    };
    var words = [];
    var repetitions = [];
    
    columns.split(",").map((word,index)=>{
      const search = words.findIndex(r => r === word);
      if(search === -1) {
        let descriptive =`IF(ISNULL(${word.trim()}) OR LEN(TRIM(${word.trim()})) = 0, '*NÃO PREENCHIDO*', TRIM(${word.trim()})) as ${word.trim()}`; 
        let obj = {
          column: word.trim(),
          descriptive
        };
        words.push(word);
        arr.details.push(obj);
      } else {
        repetitions.push(word);
        console.warn('This column already exist');
      }
    });

      return res.json({
        countColumns,   
        descriptive,
        details:arr['details'],
        repetitions
      });
      }

}

module.exports = new qualityController();