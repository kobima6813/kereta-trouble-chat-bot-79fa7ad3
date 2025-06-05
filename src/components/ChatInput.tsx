
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { sanitizeInput, validateInput } from "@/utils/sanitization";
import { toast } from "sonner";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (disabled) return;

    const validation = validateInput(message);
    if (!validation.isValid) {
      toast.error(validation.error);
      return;
    }

    const sanitizedMessage = sanitizeInput(message);
    if (sanitizedMessage.trim()) {
      onSendMessage(sanitizedMessage);
      setMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Prevent input beyond maximum length
    if (value.length <= 1000) {
      setMessage(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        placeholder="הקלד את השאלה שלך על תקלות בקטר..."
        value={message}
        onChange={handleInputChange}
        className="flex-1"
        disabled={disabled}
        dir="rtl"
        maxLength={1000}
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
