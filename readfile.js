import fs from "fs";

export default async (filePath) => {
  try {

    return await new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) reject(error);
        else resolve(data.split("\n"));

      });
    });

  } catch (error) {
    console.error(error);
  }
};