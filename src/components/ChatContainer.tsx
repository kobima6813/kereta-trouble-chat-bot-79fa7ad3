
import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useChatbot } from "@/hooks/useChatbot";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Train } from "lucide-react";

const ChatContainer = () => {
  const { messages, isProcessing, processUserMessage } = useChatbot();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full h-full flex flex-col shadow-lg border-2">
      <CardHeader className="chat-header text-primary-foreground py-3 px-4 flex flex-row items-center gap-2">
        <Train className="h-5 w-5" />
        <h2 className="text-lg font-semibold">LocomotiveAI Assistant</h2>
      </CardHeader>
      
      <ScrollArea 
        ref={scrollAreaRef} 
        className="flex-1 p-4"
      >
        <CardContent className="px-0 py-0">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              isUser={message.isUser}
            />
          ))}
          {isProcessing && (
            <div className="chat-message-container bot-message">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-sm text-muted-foreground ml-1">Thinking...</span>
              </div>
            </div>
          )}
        </CardContent>
      </ScrollArea>
      
      <CardFooter className="p-4 border-t">
        <ChatInput
          onSendMessage={processUserMessage}
          disabled={isProcessing}
        />
      </CardFooter>
    </Card>
  );
};

export default ChatContainer;
