const XLSX = require('xlsx');

function readExcel(filepath, sheetName = null){
    const wb = XLSX.readFile(filepath)
    const sheetname = sheetName || wb.SheetNames[0]
    const ws = wb.Sheets[sheetname]
    return XLSX.utils.sheet_to_json(ws);
}

function writeExcel(filepath,data){
    const wb=XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(wb,ws)
    XLSX.writeFile(wb,filepath)
}

function updateExcelCellByColumn(filepath, sheetName, rowNumber, columnLetter, value) {
    const wb = XLSX.readFile(filepath);
    const ws = wb.Sheets[sheetName];
    
    // rowNumber is the data row index (0-based from data array)
    // Excel row = rowNumber + 2 (1 for 0-based to 1-based, 1 for header row)
    const cellAddress = `${columnLetter}${rowNumber + 2}`;
    ws[cellAddress] = { v: value, t: 's' }; // v = value, t = type (s = string)
    
    XLSX.writeFile(wb, filepath);
}

function updateExcelCell(filepath, sheetName, rowIndex, columnName, value) {
    const wb = XLSX.readFile(filepath);
    const ws = wb.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws);
    
    // Update the specific row
    if (data[rowIndex]) {
        data[rowIndex][columnName] = value;
    }
    
    // Convert back to sheet and write
    const newWs = XLSX.utils.json_to_sheet(data);
    wb.Sheets[sheetName] = newWs;
    XLSX.writeFile(wb, filepath);
}

function writeExcelFile(filepath, sheetName, rowNumberOrData, columnLetter, value) {
    const wb = XLSX.readFile(filepath);
    
    // If 5 parameters provided, update specific cell
    if (value !== undefined) {
        const ws = wb.Sheets[sheetName];
        const cellAddress = `${columnLetter}${rowNumberOrData}`;
        ws[cellAddress] = { v: value, t: 's' };
        XLSX.writeFile(wb, filepath);
    }
    // Otherwise use old 3-parameter behavior
    else {
        const newWs = XLSX.utils.json_to_sheet(rowNumberOrData);
        wb.Sheets[sheetName] = newWs;
        XLSX.writeFile(wb, filepath);
    }
}

module.exports = {readExcel, writeExcel, updateExcelCell, updateExcelCellByColumn, writeExcelFile}