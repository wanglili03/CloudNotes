// 在浏览器环境中，这是一个异步函数
async function getenv() {
    try {
        // 发起 GET 请求获取 config.json
        const response = await fetch('./config.json'); 

        // 检查请求是否成功
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 解析 JSON 数据
        const config = await response.json();

        // 构造并返回 env 对象
        const env = {
            ADMIN_KEY: config.adminKey,
            BASEURL: config.BASEURL
        };
        return env;

    } catch (error) {
        console.error('Failed to load configuration:', error);
        // 可以返回一个默认值或抛出错误
        return {
            ADMIN_KEY: "",
            BASEURL: ""
        }; 
    }
}