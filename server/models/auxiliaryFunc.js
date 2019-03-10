class auxiliaryFunc {

    static async checkIp(req){
        return await (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    }

}

module.exports = auxiliaryFunc;