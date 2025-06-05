
import { useState } from "react";
import { Message } from "@/types";
import { searchTroubleshootingData } from "@/data/troubleshootingData";
import { toast } from "sonner";

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Welcome to LocomotiveAI! How can I help you with your locomotive troubleshooting today?",
      isUser: false,
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const processUserMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;
    
    setIsProcessing(true);
    addMessage(userMessage, true);
    
    try {
      // Search the troubleshooting database
      const results = searchTroubleshootingData(userMessage.toLowerCase());
      
      if (results.length > 0) {
        // Format the response
        let responseContent = "";
        
        if (results.length === 1) {
          const issue = results[0];
          responseContent = `I found information about "${issue.description}":\n\n`;
          if (issue.errorCode) {
            responseContent += `Error Code: ${issue.errorCode}\n`;
          }
          responseContent += `Category: ${issue.category}\n\n`;
          responseContent += `Recommended Solution:\n${issue.solution}`;
        } else {
          responseContent = `I found ${results.length} potential issues related to your query:\n\n`;
          
          results.forEach((issue, index) => {
            responseContent += `${index + 1}. ${issue.description}`;
            if (issue.errorCode) {
              responseContent += ` (Error Code: ${issue.errorCode})`;
            }
            responseContent += `\n`;
          });
          
          responseContent += `\nPlease provide more specific information or an error code for more detailed assistance.`;
        }
        
        // Add the bot's response
        addMessage(responseContent, false);
      } else {
        // No results found
        addMessage(
          "I couldn't find specific information about that issue in my database. Please try another search or provide an error code if you have one.",
          false
        );
      }
    } catch (error) {
      console.error("Error processing message:", error);
      toast.error("There was an error processing your message.");
      addMessage(
        "I'm sorry, but I encountered an error while processing your request. Please try again.",
        false
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    messages,
    isProcessing,
    processUserMessage,
  };
}
