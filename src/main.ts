export function getPartialText(text: string, target: 'odd' | 'even'): string {
  if(target === 'odd') {
    return text.split('').filter((_character, index) => index % 2 === 0).join('')
  } else {
    return text.split('').filter((_character, index) => index % 2 !== 0).join('')
  }
 }
 }
