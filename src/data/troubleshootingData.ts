
import { TroubleshootingData, Troubleshooting } from "@/types";

// This is a placeholder database that would be populated with real locomotive troubleshooting data
export const troubleshootingData: TroubleshootingData = {
  "E001": {
    errorCode: "E001",
    description: "התחממות יתר של המנוע הראשי",
    solution: "1. בדוק רמות נוזל הקירור\n2. בדוק חסימה ברדיאטור\n3. בדוק פעולת מאוורר הקירור\n4. הפחת עומס במידה והאפשר עד לנורמליזציה של הטמפרטורה",
    category: "מערכות מנוע"
  },
  "E002": {
    errorCode: "E002",
    description: "אזהרת לחץ שמן נמוך",
    solution: "1. בדוק רמות שמן מיידית\n2. בדוק דליפות שמן\n3. אם הרמות תקינות אך הלחץ נמוך, כבה את המנוע ובדוק משאבת שמן\n4. פנה לצוות תחזוקה לבדיקת מערכת השמן",
    category: "מערכות מנוע"
  },
  "E003": {
    errorCode: "E003",
    description: "תקלה במערכת הדלק",
    solution: "1. בדוק מסנני דלק לזיהום\n2. בדוק צינורות דלק לדליפות\n3. בדוק לחץ משאבת דלק\n4. בדוק פעולת מזרקי הדלק",
    category: "מערכות דלק"
  },
  "B001": {
    errorCode: "B001",
    description: "כשל במערכת הבלמים",
    solution: "1. בדוק לחץ אוויר בקווי הבלמים\n2. בדוק צילינדרי בלמים ורפידות\n3. בדוק מערכות בלמי חירום\n4. בדוק פעולת יחידת בקרת הבלמים",
    category: "מערכות בלמים"
  },
  "עשן פליטה": {
    description: "עשן שחור או מוגזם מהפליטה",
    solution: "1. בדוק איכות הדלק\n2. בדוק מזרקי דלק\n3. בדוק פעולת מדחס הטורבו\n4. בדוק שמערכת כניסת האוויר נקייה ולא חסומה",
    category: "מערכות מנוע"
  },
  "דליפת אוויר": {
    description: "דליפת אוויר נשמעת במערכת הפנאומטית",
    solution: "1. בדוק את כל צינורות האוויר והחיבורים\n2. בדוק שסתומי בלמים\n3. בדוק תפוקת מדחס\n4. בדוק מיכלים פנאומטיים לנזק",
    category: "מערכות פנאומטיות"
  },
  "כשל הפעלה": {
    description: "המנוע לא מצליח להתניע",
    solution: "1. בדוק מתח סוללה\n2. בדוק מנוע התנעה\n3. בדוק אספקת דלק למנוע\n4. בדוק מעגלי בקרה\n5. בדוק נעילות בטיחות",
    category: "מערכות מנוע"
  }
};

// Helper function to search through troubleshooting data
export function searchTroubleshootingData(query: string): Troubleshooting[] {
  query = query.toLowerCase();
  
  // First check for direct error code match
  if (troubleshootingData[query]) {
    return [troubleshootingData[query]];
  }
  
  // Then search through all fields
  const results = Object.values(troubleshootingData).filter(item => {
    return (
      (item.errorCode?.toLowerCase().includes(query)) ||
      item.description.toLowerCase().includes(query) ||
      item.solution.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });
  
  return results;
}
