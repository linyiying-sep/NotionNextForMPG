// 这里编写自定义js脚本；将被静态引入到页面中
function initializeChat() {
    // 引入在线聊天组件的 JavaScript 文件
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://popupsmart.com/freechat.js';
    document.head.appendChild(script);

    // 初始化在线聊天组件
    window.start.init({
        title: "MPG喵派好物團",
        message: "您好～請問有什麼可以幫您的呢 ？",
        color: "#FA764F",
        position: "right",
        placeholder: "Enter your message",
        withText: "Write with",
        viaWhatsapp: "Or write us directly via Whatsapp",
        gty: "Go to your",
        awu: "and write us",
        connect: "Connect now",
        button: "聯繫我們",
        device: "everywhere",
        logo: "https://d2r80wdbkwti6l.cloudfront.net/Ph2vy9vKwBjRN82OO2qj52qBipc8KspX.jpg",
        person: "https://d2r80wdbkwti6l.cloudfront.net/7xWicsi6maKd1k3YYM7WiIj8o7epoCkV.jpg",
        services: [{"name": "instagram", "content": "meowpawsgoodies"}]
    });
}

// 调用初始化函数
initializeChat();