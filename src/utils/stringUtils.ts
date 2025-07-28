export function cleanOriginText(text: string): string {
  return text.split('(')[0].trim();
}

export function getFirstName(fullName: string): string {
  return fullName.split(' ')[0];
} 