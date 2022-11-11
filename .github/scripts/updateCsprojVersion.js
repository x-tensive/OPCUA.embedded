const fs = require("fs");

function update(csprojFileName, version)
{
    const versionRgx = /^v\d+\.\d+\.\d+$/;
    if (!versionRgx.test(version))
        throw "invalid version format. expected \"vX.X.X\", received: \"" + version + "\"";
    const cVer = version.substring(1);

    fs.readFile(csprojFileName, { encoding: "utf8" }, (err, data) => {
        data = data.replace(/<Version>\d+\.\d+\.\d+<\/Version>/, "<Version>" + cVer + "</Version>");
        data = data.replace(/<AssemblyVersion>\d+\.\d+\.\d+\.\d+<\/AssemblyVersion>/, "<AssemblyVersion>" + cVer + ".0</AssemblyVersion>");
        data = data.replace(/<FileVersion>\d+\.\d+\.\d+\.\d+<\/FileVersion>/, "<FileVersion>" + cVer + ".0</FileVersion>");

        console.log(data);

        fs.writeFile(csprojFileName, data, { encoding: "utf8" }, () => {});
    });
}

module.exports = update;