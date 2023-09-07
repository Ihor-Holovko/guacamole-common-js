const fs = require('fs');
const sourceDirectory = './src/';

const sourceCodeFromOfficialLibrary = fs.readdirSync(sourceDirectory)
    .map(file => {
        const content = fs.readFileSync(sourceDirectory + file, 'utf-8')
        return content.substring(content.indexOf('*/') + 3)
    })
    .join('\n\n')

const fullSourceCode = `;(function(){
  ${sourceCodeFromOfficialLibrary}
  module.exports = Guacamole
})();
`

fs.writeFileSync('./guacamole.js', fullSourceCode)