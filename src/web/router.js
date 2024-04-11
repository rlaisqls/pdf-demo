const { processTemplate } = require('../pdf/templateProcessor')
const { generatePdf } = require('../pdf/pdfGenerator')
const express = require("express");
const fs = require('fs');

var router = express.Router();

router.get("/test", async (req, res) => {
    const html = await processTemplate('/templates/template', {
      name: '홍길동',
      hello: '안녕하세요'
    })
    const pdf = await generatePdf(html)

    fs.writeFile("file.pdf", pdf, (err) => {
      if (err) {
        console.error('Error writing file:', err)
      } else {
        console.log('Buffer written to file successfully.')
        res.send()
      }
    })
    res.send()
});
module.exports = router;
