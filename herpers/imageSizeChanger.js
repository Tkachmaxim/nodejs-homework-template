const Jimp = require('jimp')

function imageSizeChanger (imageName) {Jimp.read(imageName).then(image => {
            return image.resize(250, 250).write(imageName)
})}
        

module.exports = imageSizeChanger