
import { useState } from "react";
import { Message } from "@/types";
import { searchTroubleshootingData } from "@/data/troubleshootingData";
import { toast } from "sonner";

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "ברוכים הבאים ל-LocomotiveAI! איך אני יכול לעזור לך היום עם אבחון תקלות הקטר?",
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
          responseContent = `מצאתי מידע על "${issue.description}":\n\n`;
          if (issue.errorCode) {
            responseContent += `קוד שגיאה: ${issue.errorCode}\n`;
          }
          responseContent += `קטגוריה: ${issue.category}\n\n`;
          responseContent += `פתרון מומלץ:\n${issue.solution}`;
        } else {
          responseContent = `מצאתי ${results.length} תקלות אפשריות הקשורות לשאילתה שלך:\n\n`;
          
          results.forEach((issue, index) => {
            responseContent += `${index + 1}. ${issue.description}`;
            if (issue.errorCode) {
              responseContent += ` (קוד שגיאה: ${issue.errorCode})`;
            }
            responseContent += `\n`;
          });
          
          responseContent += `\nאנא ספק מידע ספציפי יותר או קוד שגיאה לקבלת סיוע מפורט יותר.`;
        }
        
        // Add the bot's response
        addMessage(responseContent, false);
      } else {
        // No results found
        addMessage(
          "לא הצלחתי למצוא מידע ספציפי על התקלה הזו במאגר שלי. אנא נסה חיפוש אחר או ספק קוד שגיאה אם יש לך.",
          false
        );
      }
    } catch (error) {
      console.error("Error processing message:", error);
      toast.error("הייתה שגיאה בעיבוד ההודעה שלך.");
      addMessage(
        "אני מצטער, אבל נתקלתי בשגיאה בעת עיבוד הבקשה שלך. אנא נסה שוב.",
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
