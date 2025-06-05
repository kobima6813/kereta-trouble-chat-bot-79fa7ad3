
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MessageSquare, Train } from "lucide-react";

export interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

const ChatMessage = ({ content, isUser }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "chat-message-container animate-fade-in",
        isUser ? "user-message" : "bot-message"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {isUser ? (
            <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
              <MessageSquare size={16} />
            </Avatar>
          ) : (
            <Avatar className="h-8 w-8 bg-accent text-accent-foreground">
              <Train size={16} />
            </Avatar>
          )}
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-1">
            {isUser ? "You" : "LocomotiveAI"}
          </div>
          <div className="whitespace-pre-wrap">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
