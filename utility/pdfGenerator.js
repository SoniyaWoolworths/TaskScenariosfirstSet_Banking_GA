const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

async function generatePDFReport(testName) {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots', testName);
  const pdfDir = path.join(__dirname, '..', 'pdf_results');
  const pdfPath = path.join(pdfDir, `${testName}.pdf`);

  // Create pdf_results directory if it doesn't exist
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }

  // Check if screenshots directory exists
  if (!fs.existsSync(screenshotsDir)) {
    console.log(`No screenshots found for ${testName}`);
    return;
  }

  // Get all PNG files from the screenshots directory and sort by modification time
  const screenshots = fs.readdirSync(screenshotsDir)
    .filter(file => file.endsWith('.png'))
    .map(file => ({
      name: file,
      time: fs.statSync(path.join(screenshotsDir, file)).mtime.getTime()
    }))
    .sort((a, b) => a.time - b.time)
    .map(file => file.name);

  if (screenshots.length === 0) {
    console.log(`No PNG screenshots found in ${screenshotsDir}`);
    return;
  }

  // Create PDF document
  const doc = new PDFDocument({ autoFirstPage: false });
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);

  console.log(`Generating PDF report for ${testName}...`);

  // Add title page
  doc.addPage({ margin: 50 });
  doc.fontSize(24).text(`Test Report: ${testName}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Generated: ${new Date().toLocaleString()}`, { align: 'center' });
  doc.fontSize(12).text(`Total Screenshots: ${screenshots.length}`, { align: 'center' });

  // Add each screenshot to the PDF
  for (let i = 0; i < screenshots.length; i++) {
    const screenshotPath = path.join(screenshotsDir, screenshots[i]);
    const screenshotName = path.basename(screenshots[i], '.png');

    doc.addPage({ margin: 30 });
    
    // Add screenshot name as header
    doc.fontSize(14).text(`${i + 1}. ${screenshotName}`, { align: 'left' });
    doc.moveDown(0.5);

    // Add the image
    try {
      const imgInfo = doc.image(screenshotPath, {
        fit: [doc.page.width - 60, doc.page.height - 120],
        align: 'center',
        valign: 'top'
      });
      console.log(`Added screenshot: ${screenshots[i]}`);
    } catch (error) {
      console.error(`Error adding screenshot ${screenshots[i]}:`, error.message);
      doc.fontSize(10).text(`Error loading image: ${screenshots[i]}`, { align: 'center' });
    }
  }

  // Finalize the PDF
  doc.end();

  // Wait for the write stream to finish
  await new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });

  console.log(`PDF report generated successfully: ${pdfPath}`);
  return pdfPath;
}

// Allow running from command line
if (require.main === module) {
  const testName = process.argv[2];
  if (!testName) {
    console.error('Usage: node pdfGenerator.js <testName>');
    console.error('Example: node pdfGenerator.js test_F0701A');
    process.exit(1);
  }
  generatePDFReport(testName)
    .then(() => process.exit(0))
    .catch(error => {
      console.error('Error generating PDF:', error);
      process.exit(1);
    });
}

module.exports = { generatePDFReport };
