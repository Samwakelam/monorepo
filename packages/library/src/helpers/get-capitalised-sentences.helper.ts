export const getCapitalisedSentences = (sentence: string): string => {
  const sentences = sentence.toLowerCase().split('.');

  const trimmedSentences = sentences
    .filter((sentence) => sentence !== '')
    .map((sentence) => {
      return sentence.trim();
    })
    .map((sentence) => {
      let letters = [...sentence];
      letters[0] = letters[0].toUpperCase();
      return letters.join('');
    });

  return `${trimmedSentences.join('. ')}.`;
};
