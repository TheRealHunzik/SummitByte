import fs from "fs";
import path from "path";
import config from "../config/index.js";

const LogError = (errorMessage, errorLogFilePath = config.utils.error_log) => {
        debugger;
        const formattedMessage = `[${new Date().toISOString()} ERROR] ${errorMessage}\n`;
        console.error(formattedMessage);
        ensureFileExists(config.utils.error_log, () => {
            appendToLogfile(config.utils.error_log, formattedMessage);
        });
}

const ensureFileExists = (filePath, callback) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile(filePath, '', (err) => {
          if (err) {
            console.error('Error creating log file:', err);
          } else {
            callback();
          }
        });
      } else {
        callback();
      }
    });
  }
  
const appendToLogfile = (filePath, message) => {
    fs.appendFile(filePath, message, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
}

export default LogError;