var entChat = {
    selfServURL: 'http://localhost:8082/support',
    chatURL: '/chat',
    socketURL: '/message',
    clientInfo: {
        token: '376c746416e3a83bb4c93696e90d6221'
    }
};

$(function () {
    $('#anjelim-box').entChat(entChat);
});