const path = require("path");
const fs = require("fs");

const v1Regex = new RegExp("_v\\d*\\.\\d*\\.\\d*\\.exe", "g");
const v2Regex = new RegExp("/v\\d*\\.\\d*\\.\\d*/", "g");

function updateLinksInFile(fileName, version)
{
    console.log(fileName);
    fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
        data = data.replaceAll(v1Regex, `_${version}.exe`);
        data = data.replaceAll(v2Regex, `/${version}/`);
        fs.writeFile(fileName, data, { encoding: "utf8" }, () => {});
    });
}

function updateLinks(version, wikiPath)
{
    console.log("files:");
    fs.readdir(wikiPath, null, (err, fileNames) => {
        fileNames.forEach(fileName => {
            if (!fileName.toLowerCase().endsWith(".md"))
                return;
            var fullFileName = path.join(wikiPath, fileName);
            updateLinksInFile(fullFileName, version);
        });
    });
}

//module.exports = updateLinks;

updateLinks("v3.4.5", "c:/work/repo/OPCUA.embedded.wiki")
