const fs = require('fs');
const path = require('path');

class FileUtility {
  /**
   * Generate a random 5-digit number
   */
  static generateRandomFiveDigit() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  /**
   * Get current date in DD.MM.YY format
   */
  static getCurrentDateShort() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
  }

  /**
   * Get current date in DD.MM.YYYY format
   */
  static getCurrentDateLong() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  }

  /**
   * Update bank statement header file with random reference number and current date
   * @param {string} filePath - Path to the header file
   * @returns {object} - Object containing the new reference number and date
   */
  static updateBankStatementHeader(filePath) {
    try {
      // Read the file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent.split('\n');
      
      if (lines.length === 0 || !lines[0]) {
        throw new Error('File is empty');
      }

      // Split by semicolon
      const fields = lines[0].split(';');
      
      if (fields.length < 4) {
        throw new Error('Invalid file format - not enough fields');
      }

      // Generate random 5-digit number and current date
      const randomRef = this.generateRandomFiveDigit();
      const currentDate = this.getCurrentDateShort();

      // Update 3rd field (index 2) with random number
      fields[2] = randomRef;
      
      // Update 4th field (index 3) with current date
      fields[3] = currentDate;

      // Reconstruct the line
      lines[0] = fields.join(';');

      // Write back to file
      fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');

      return {
        referenceNumber: randomRef,
        date: currentDate,
        success: true
      };
    } catch (error) {
      console.error('Error updating bank statement header:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Update bank statement item file with random reference number and current date
   * @param {string} filePath - Path to the item file
   * @returns {object} - Object containing the new reference number and date
   */
  static updateBankStatementItem(filePath) {
    try {
      // Read the file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent.split('\n');
      
      if (lines.length === 0 || !lines[0]) {
        throw new Error('File is empty');
      }

      // Split by semicolon
      const fields = lines[0].split(';');
      
      if (fields.length < 4) {
        throw new Error('Invalid file format - not enough fields');
      }

      // Generate random 5-digit number and current date
      const randomRef = this.generateRandomFiveDigit();
      const currentDateLong = this.getCurrentDateLong();

      // Update 3rd field (index 2) with random number
      fields[2] = randomRef;
      
      // Update 4th field (index 3) with current date in long format
      fields[3] = currentDateLong;

      // Reconstruct the line
      lines[0] = fields.join(';');

      // Write back to file
      fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');

      return {
        referenceNumber: randomRef,
        date: currentDateLong,
        success: true
      };
    } catch (error) {
      console.error('Error updating bank statement item:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = FileUtility;
