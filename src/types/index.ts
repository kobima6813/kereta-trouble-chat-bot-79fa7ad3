
export interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

export interface Troubleshooting {
  errorCode?: string;
  description: string;
  solution: string;
  category: string;
}

export interface TroubleshootingData {
  [key: string]: Troubleshooting;
}
