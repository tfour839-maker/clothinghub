const fs = require('fs');
const path = require('path');

function walk(dir) {
    if (!fs.existsSync(dir)) return [];
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if(file === 'node_modules' || file === '.git') return;
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('/Users/sahidafridi/app/HiddenApp/cloth.razorpay/src')
    .concat(walk('/Users/sahidafridi/app/HiddenApp/cloth.razorpay/public'))
    .concat(['/Users/sahidafridi/app/HiddenApp/cloth.razorpay/index.html']);

let changedFiles = 0;
files.forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/Vogue & Co\. Fashions Pvt\. Ltd\./g, 'Clothing Hub Pvt. Ltd.')
        .replace(/VOGUE & CO\./g, 'Clothing Hub')
        .replace(/vogueandco\.com/g, 'clothinghub.com')
        .replace(/www\.vogueandco\.com/g, 'www.clothinghub.com');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Modified:', file);
        changedFiles++;
    }
});
console.log('Total changed:', changedFiles);
