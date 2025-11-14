'use server';

/**
 * @fileOverview Suggests an appropriate affirmation based on the emotional state detected in a 'before' image.
 *
 * - suggestAffirmation - A function that analyzes an image and suggests an affirmation.
 * - SuggestAffirmationInput - The input type for the suggestAffirmation function.
 * - SuggestAffirmationOutput - The return type for the suggestAffirmation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAffirmationInputSchema = z.object({
  beforeImageDataUri: z
    .string()
    .describe(
      "A 'before' image of the child's negative emotional state, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestAffirmationInput = z.infer<typeof SuggestAffirmationInputSchema>;

const SuggestAffirmationOutputSchema = z.object({
  suggestedAffirmation: z
    .string()
    .describe('An affirmation suggested by the AI to help the child transition to a positive mindset.'),
});
export type SuggestAffirmationOutput = z.infer<typeof SuggestAffirmationOutputSchema>;

export async function suggestAffirmation(
  input: SuggestAffirmationInput
): Promise<SuggestAffirmationOutput> {
  return suggestAffirmationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAffirmationPrompt',
  input: {schema: SuggestAffirmationInputSchema},
  output: {schema: SuggestAffirmationOutputSchema},
  prompt: `You are an AI assistant designed to analyze a child's emotional state in an image and suggest an appropriate affirmation to promote a positive mindset.\n\nAnalyze the emotional state depicted in the following image and suggest a suitable affirmation. The affirmation should be short, encouraging, and tailored to help the child overcome the negative emotion displayed in the image.\n\nImage: {{media url=beforeImageDataUri}}\n\nSuggested Affirmation:`,
});

const suggestAffirmationFlow = ai.defineFlow(
  {
    name: 'suggestAffirmationFlow',
    inputSchema: SuggestAffirmationInputSchema,
    outputSchema: SuggestAffirmationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
