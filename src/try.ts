import { LiveChat } from './live-chat'; // Replace with your actual file name that exports LiveChat

// Example of a YouTube channel ID or other identifier
const channelId: string = 'UCxkOLgdpthZgJor1T4oi6NA'; // Replace with a valid YouTube Channel ID

// Creating an instance of the LiveChat class
const liveChatInstance = new LiveChat({ channelId });

// Subscribe to events
liveChatInstance.on('start', (liveId: string) => {
    console.log(`Started listening to live chat for live ID: ${liveId}`);
});

liveChatInstance.on('chat', (chatItem) => {
    console.log(`Received chat: ${JSON.stringify(chatItem)}`);
});

liveChatInstance.on('end', (reason?: string) => {
    console.log(`Live chat ended. Reason: ${reason}`);
});

liveChatInstance.on('error', (err: Error | unknown) => {
    console.error('An error occurred:', err);
});

// Start the live chat
liveChatInstance.start()
    .then((started: boolean) => {
        if (started) {
            console.log('Live chat monitoring started.');
        } else {
            console.log('Live chat monitoring failed to start.');
        }
    })
    .catch((err) => {
        console.error('Failed to start live chat monitoring due to an error:', err);
    });

// You can set a condition or a timer to stop the live chat
setTimeout(() => {
    liveChatInstance.stop('Finished the live chat monitoring.');
}, 30000); // Stops after 30 seconds
