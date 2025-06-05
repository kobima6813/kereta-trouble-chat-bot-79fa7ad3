
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        placeholder="הקלד את השאלה שלך על תקלות בקטר..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1"
        disabled={disabled}
        dir="rtl"
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        variant="default"
      >
        <SendHorizonal size={18} className="md:ml-2" />
        <span className="hidden md:inline">שלח</span>
      </Button>
    </form>
  );
};

export default ChatInput;
