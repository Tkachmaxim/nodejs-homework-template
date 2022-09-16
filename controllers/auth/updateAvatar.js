const fs = require('fs/promises')
const path = require('path')
const {imageSizeChanger} = require('../../herpers')
const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')
const {User} = require('../../models/user')

const updateAvatar = async (req, res) => {
    try {
        const { path: tempUpload, filename } = req.file;
        const { _id } = req.user
        const [extention] = filename.split('.').reverse();
        const avatarName = `${_id}.${extention}`
        const resultUpload = path.join(avatarsDir, avatarName)
        await fs.rename(tempUpload, resultUpload)
        imageSizeChanger(resultUpload)
        const avatarURL = path.join('avatars', resultUpload)
        await User.findByIdAndUpdate(_id, { avatarURL })
        res.json({
            avatarURL
        })

    } catch (error) {
        fs.unlink(req.file.path)
        throw error
    }
}

module.exports = updateAvatar