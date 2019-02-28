const os = require('os');
const ifaces = os.networkInterfaces();

const checkIp = () => {
    let ip = "";
    Object.keys(ifaces).forEach(function (ifname) {
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) return;
            ip = iface.address;
        });
    });
    return ip;
};


module.exports = checkIp;