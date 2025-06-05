
import { TroubleshootingData } from "@/types";

// This is a placeholder database that would be populated with real locomotive troubleshooting data
export const troubleshootingData: TroubleshootingData = {
  "E001": {
    errorCode: "E001",
    description: "Main engine overheating",
    solution: "1. Check coolant levels\n2. Inspect radiator for blockage\n3. Check cooling fan operation\n4. Reduce load if possible until temperature normalizes",
    category: "Engine Systems"
  },
  "E002": {
    errorCode: "E002",
    description: "Low oil pressure warning",
    solution: "1. Check oil levels immediately\n2. Inspect for oil leaks\n3. If levels are adequate but pressure remains low, shut down engine and inspect oil pump\n4. Contact maintenance for oil system inspection",
    category: "Engine Systems"
  },
  "E003": {
    errorCode: "E003",
    description: "Fuel system malfunction",
    solution: "1. Check fuel filters for contamination\n2. Inspect fuel lines for leaks\n3. Test fuel pump pressure\n4. Check fuel injectors for proper operation",
    category: "Fuel Systems"
  },
  "P001": {
    errorCode: "P001",
    description: "Traction power loss",
    solution: "1. Check traction motor connections\n2. Inspect power inverters\n3. Test traction control systems\n4. Check for wheel slip conditions",
    category: "Power Systems"
  },
  "B001": {
    errorCode: "B001",
    description: "Brake system failure",
    solution: "1. Check air pressure in brake lines\n2. Inspect brake cylinders and pads\n3. Test emergency brake systems\n4. Verify brake control unit operation",
    category: "Brake Systems"
  },
  "exhaust smoke": {
    description: "Black or excessive exhaust smoke",
    solution: "1. Check fuel quality\n2. Inspect fuel injectors\n3. Check turbocharger operation\n4. Verify air intake system is clean and unobstructed",
    category: "Engine Systems"
  },
  "air leak": {
    description: "Audible air leak in pneumatic system",
    solution: "1. Check all air hoses and connections\n2. Inspect brake valves\n3. Test compressor output\n4. Check pneumatic reservoirs for damage",
    category: "Pneumatic Systems"
  },
  "starting failure": {
    description: "Engine fails to start",
    solution: "1. Check battery voltage\n2. Inspect starter motor\n3. Verify fuel delivery to engine\n4. Test control circuits\n5. Check safety interlocks",
    category: "Engine Systems"
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
