const path = require("path");

const isWin = process.platform === "win32";

module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: `-jar ${isWin ? ".\\config-server\\target\\Config-Server-1.0.0.jar" : "./config-server/target/Config-Server-1.0.0.jar"}`,
            cwd: __dirname,
            watch: false
        },
        {
            name: "service-registry",
            script: "java",
            args: `-jar ${isWin ? ".\\service-registry\\target\\Service-Registry-1.0.0.jar" : "./service-registry/target/Service-Registry-1.0.0.jar"}`,
            cwd: __dirname,
            watch: false
        },
        {
            name: "api-gateway",
            script: "java",
            args: `-jar ${isWin ? ".\\api-gateway\\target\\Api-Gateway-1.0.0.jar" : "./api-gateway/target/Api-Gateway-1.0.0.jar"}`,
            cwd: __dirname,
            watch: false
        }
    ]
};