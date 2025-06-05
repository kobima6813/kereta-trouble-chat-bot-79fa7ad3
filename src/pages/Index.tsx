
import { useIsMobile } from "@/hooks/use-mobile";
import ChatContainer from "@/components/ChatContainer";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-accent p-1 rounded">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <rect x="4" y="15" width="16" height="6" rx="2" />
                <rect x="6" y="8" width="12" height="7" rx="1" />
                <path d="M8 8V7a4 4 0 0 1 8 0v1" />
                <path d="M17 15v-2" />
                <path d="M7 15v-2" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">LocomotiveAI</h1>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-primary-foreground hover:text-secondary transition-colors">בית</a></li>
                <li><a href="#" className="text-primary-foreground hover:text-secondary transition-colors">מדריך</a></li>
                <li><a href="#" className="text-primary-foreground hover:text-secondary transition-colors">אודות</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row gap-6">
        <div className={`${isMobile ? "order-2" : "w-1/3"}`}>
          <div className="rounded-lg bg-card p-6 shadow-md border">
            <h2 className="text-lg font-semibold mb-4">מאבחן תקלות קטרים</h2>
            <p className="text-muted-foreground mb-4">
              עוזר זה מסייע לך לאבחן ולתקן בעיות במנועי קטרים. אתה יכול:
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside mb-6">
              <li>להזין קודי שגיאה (למשל "E001")</li>
              <li>לתאר תסמינים (למשל "המנוע לא מתניע")</li>
              <li>לשאול על מערכות ספציפיות (למשל "בעיות בלמים")</li>
            </ul>
            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                דוגמאות שאלות
              </h3>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p>"מה המשמעות של קוד שגיאה E002?"</p>
                <p>"איך אני מתקן עשן שחור בפליטה?"</p>
                <p>"לאבחן דליפות אוויר במערכת הבלמים"</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex-1 ${isMobile ? "order-1 h-[60vh]" : "h-[70vh]"}`}>
          <ChatContainer />
        </div>
      </main>

      <footer className="bg-secondary py-4 px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>עוזר אבחון תקלות קטרים LocomotiveAI &copy; 2025</p>
          <p className="text-xs mt-1">כלי מקיף לתחזוקה ואבחון תקלות בקטרים</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
