// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = val => {
  file1 = val;
};
let modifyFile2 = val => {
  file2 = val;
};
let modifyFile3 = val => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = fnCallback => {
  let dataArray = "";
  let result = [];

  fs.readFile(file1, "utf8", (err, data) => {
    dataArray = JSON.parse(data);
    let messageArray = dataArray.message.split(" ");
    let dataSplit = messageArray[messageArray.length - 1];
    result.push(dataSplit);
    if (!dataArray) return fnCallback(err);

    fs.readFile(file2, "utf8", (err, data) => {
      dataArray = JSON.parse(data);
      let messageArray = dataArray[0].message.split(" ");
      let dataSplit = messageArray[messageArray.length - 1];
      result.push(dataSplit);
      if (!dataArray) return fnCallback(err);

      fs.readFile(file3, "utf8", (err, data) => {
        dataArray = JSON.parse(data);
        let messageArray = dataArray[0].data.message.split(" ");
        let dataSplit = messageArray[messageArray.length - 1];
        result.push(dataSplit);
        if (!dataArray) return fnCallback(err);

        fnCallback(null, result);
      });
    });
  });
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
