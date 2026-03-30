module.exports = {
    apps: [
        {
            name: "config-server",
            script: "C:\\Users\\Nimasha Shehani\\.jdks\\ms-25.0.2\\bin\\java.exe",
            args: "-jar ./config-server/target/Config-Server-1.0.0.jar"
        },
        {
            name: "service-registry",
            script: "C:\\Users\\Nimasha Shehani\\.jdks\\ms-25.0.2\\bin\\java.exe",
            args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar"
        },
        {
            name: "api-gateway",
            script: "C:\\Users\\Nimasha Shehani\\.jdks\\ms-25.0.2\\bin\\java.exe",
            args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar"
        }
    ]
};