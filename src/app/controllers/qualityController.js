

class qualityController {
  index(req, res) {
    const { table, temp, columns, activityFrom, activityStore, from, store } = req.body;

    let descriptive = columns.split(",")
    .map(r => `IF(ISNULL(${r.trim()}) OR LEN(TRIM(${r.trim()})) = 0, '*NÃO PREENCHIDO*', TRIM(${r.trim()})) as ${r.trim()}`)
    .join(",");

    let countColumns = columns.split(",").length,
        words = [],
        repetitions = [],
        arr = {
          "details":[]
        };
    
    columns.split(",").map(( word, index)=>{
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
    
    let TMP = temp ===1 ? 'TMP' : '',
        head = `[${table}${TMP}] LOAD `,
        footer = temp ===1 ? 
          ` FROM [${from}/${activityFrom}/${table}.qvd](qvd); DROP TABLE [${table}]` : 
          ` FROM [${from}/${activityFrom}/${table}.qvd](qvd); STORE [${table}] INTO [${from}/${activityStore}/${table}.qvd](qvd); DROP TABLE [${table}]`;
    
    
    descriptive = head + descriptive + footer;

      return res.json({
        countColumns,   
        descriptive,
        details:arr['details'],
        repetitions
      });
      }

}

module.exports = new qualityController();