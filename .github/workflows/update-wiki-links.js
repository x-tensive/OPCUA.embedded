const path = require("path");
const fs = require("fs");

const assetRegex = /^(?<prefix>.+)(?<version>_\d*\.\d*\.\d*\.\d*)(?<suffix>.+)$/;

function checkAssetName(assetName)
{
    return assetRegex.test(assetName);
}

function createUpdateAction(assetName)
{
    var split = assetName.match(assetRegex);
    return {
        prefix: split.groups.prefix,
        suffix: split.groups.suffix,
        targetName: assetName
    }
}

function updateLinksInFile(fileName, updateActions)
{
    console.log(fileName);
    fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
        updateActions.forEach(action => {
            var actionRegex = new RegExp(
                action.prefix.replaceAll(".", "\\.") + "_\\d*\\.\\d*\\.\\d*\\.\\d*" + action.suffix.replaceAll(".", "\\."),
                "g");
            data = data.replaceAll(actionRegex, action.targetName);
        });
        fs.writeFile(fileName, data, { encoding: "utf8" }, () => {});
    });
}

function updateLinks(assets, wikiPath)
{
    var updateActions = [];
    assets.forEach(asset => {
        if (checkAssetName(asset.name))
            updateActions.push(createUpdateAction(asset.name));
    });

    console.log("assets: " + updateActions.length);
    updateActions.forEach(action => {
        console.log(action.prefix + "X.X.X.X" + action.suffix + " -> " + action.targetName);
    });

    console.log("files:");
    fs.readdir(wikiPath, null, (err, fileNames) => {
        fileNames.forEach(fileName => {
            if (!fileName.toLowerCase().endsWith(".md"))
                return;
            var fullFileName = path.join(wikiPath, fileName);
            updateLinksInFile(fullFileName, updateActions);
        });
    });
}

module.exports = updateLinks;
