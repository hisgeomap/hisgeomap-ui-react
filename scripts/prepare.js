const fs = require("fs");
const path = require("path");

const srcDir = path.join(path.dirname(__dirname), "src");
const queue = [srcDir];
const subsections = [];

while (queue.length > 0) {
    const dir = queue.shift();
    const dirname = path.basename(dir);

    const dircontent = fs.readdirSync(dir, { withFileTypes: true });
    if (dirname === "subsections") {
        const promises = [];

        for (let i = 0; i < dircontent.length; i++) {
            const extname = path.extname(dircontent[i].name);
            if (extname === ".tsx") {
                // read file
                const filePath = path.join(dir, dircontent[i].name);
                const filePromise = new Promise(resolve =>
                    fs.readFile(filePath, (err, data) => {
                        resolve({
                            name: path.basename(dircontent[i].name, extname),
                            data
                        });
                    })
                );

                promises.push(filePromise);
            }
        }

        Promise.all(promises).then(dataArr => {
            const info = {};
            for (let data of dataArr) {
                info[data.name] = data.data.toString();
            }

            const jsonFilePath = path.resolve(dir, "subsections.json");
            fs.writeFileSync(jsonFilePath, JSON.stringify(info));
        });
    } else {
        for (let i = 0; i < dircontent.length; i++) {
            if (dircontent[i].isDirectory()) {
                console.log(dircontent[i]);
                queue.push(path.join(dir, dircontent[i].name));
            }
        }
    }

    // console.log(dirFile);

    // if(dirname === "subsections") {
    //     new Promise((resolve, reject) => {
    //         const dirFile = await fs.promises.opendir(dir);
    //         resolve(dirFile)

    //     }).then((dirFile) => {
    //         console.log(dirFile)
    //     //     for await (const dirent of dirFile) {
    //     //         console.log(dirent.name);
    //     //    }
    //     })

    // }
}
console.log(srcDir);
