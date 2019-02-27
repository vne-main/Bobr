const mongoose = required('../../libs/dbInit');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    user_password: {
        type: String,
        required: true
    }
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');