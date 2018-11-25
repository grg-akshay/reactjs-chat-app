const URL='wss://echo.websocket.org/';

/*
* setupSocket function returns a promise, 
* which when resolved will establish a single websocket connection
*/

const setupSocket = () =>{
  return new Promise((resolve) => {
    const webSocket = new WebSocket(URL);

    const receive = (onMessageCb) => {
      webSocket.onmessage = (event) => {
        let data= JSON.parse(event.data);
        /*--modify received message before dispatch--*/
        data.message.messageid  += "1";
        let temp= data.message.to;
        data.message.to= data.message.from;
        data.message.from=temp;
        
        onMessageCb(data);
      }
    };

    const send = (message) => webSocket.send(JSON.stringify(message));
      
    webSocket.onopen = () => resolve({ send, receive });
  });
}

export default setupSocket;