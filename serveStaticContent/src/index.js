import http from "http";
import fs from "fs";
import url from "url";

const server = http.createServer((req, res) => {
  //first we read the content of the file that is present in ui folder.
  try {
    //! code for serving a index.html file.
    // const indexFileContent = fs.readFileSync("./ui/index.html").toString();
    // console.log(indexFileContent);
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(indexFileContent);
    //! code for serving a pdf file.
    // const pdfFolderData = fs
    //   .readFileSync("./ui/updatedSyllabus.pdf")
    //   .toString();
    // res.writeHead(200, { "Content-Type": "application/pdf" });
    // res.write(pdfFolderData);
    // res.end();
    //! write code for getting data that is send by client in the from of query.
    // const location = url.parse(req.url, true);
    // const { name, age } = location.query;
    // const pathname = location.pathname;
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(JSON.stringify({ name, age, pathname }));
    // res.end();
    // res.write("Everything is ok....");
    // res.end();
  } catch (er) {
    res.write("File not found | 404");
    res.end();
  }
});

// server.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
