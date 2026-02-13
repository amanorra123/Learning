const cds = require('@sap/cds');
const { sendMail } = require('@sap-cloud-sdk/mail-client');
const PDFDocument = require('pdfkit');

module.exports = cds.service.impl(function () {

  this.on('sendPdfEmail', async (req) => {

    // 1️⃣ Generate PDF Buffer
    const pdfBuffer = await generatePdfBuffer();

    // 2️⃣ Mail config
    const mailConfig = {
      to: 'amanorra122@gmail.com',
      subject: 'PDF Invoice',
      html: '<p>Please find attached invoice.</p>',
      attachments: [
        {
          content: pdfBuffer,        // ✅ Send buffer
          filename: 'invoice.pdf',
          contentType: 'application/pdf'
        }
      ]
    };

    // 3️⃣ Send mail
    await sendMail(
      { destinationName: 'hotmail' },
      [mailConfig]
    );

    return 'Email sent successfully';
  });

});


// ✅ Generate PDF as Buffer (NOT base64)
function generatePdfBuffer() {

  return new Promise((resolve, reject) => {

    const doc = new PDFDocument();
    const chunks = [];

    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      resolve(result);   // ✅ return buffer directly
    });
    doc.on('error', reject);

    doc.fontSize(20).text('Invoice PDF', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text('Generated from CAP');
    doc.text('Hello World!');

    doc.end();
  });

}
