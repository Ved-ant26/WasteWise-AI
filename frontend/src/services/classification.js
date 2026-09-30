/**
 * Classification service — architecture placeholder for the future AI/ML
 * backend integration.
 *
 * No classification backend exists yet, so this file intentionally does not
 * perform any network request and does not return a fake result. Once the
 * FastAPI/ML backend is available, replace the body of classifyWasteImage
 * with a real request (e.g. via axios to a `/classify` endpoint), keeping
 * the same function signature and return shape so callers do not need to
 * change.
 *
 * Expected future return shape:
 * {
 *   category: string,
 *   confidence: number,        // 0-1
 *   explanation: string,
 *   disposal: {
 *     action: string,
 *     category: string,
 *     guidance: string,
 *     caution?: string,
 *   },
 * }
 */

/**
 * Sends a waste image for AI classification.
 *
 * NOT YET IMPLEMENTED. Calling this function currently rejects with an
 * explanatory error rather than returning a fake result.
 *
 * @param {File} file - The waste image file selected by the user.
 * @returns {Promise<never>}
 */
export async function classifyWasteImage(file) {
  if (!file) {
    throw new Error('An image is required to run classification.')
  }

  // Intentional placeholder: no backend/model is connected yet.
  throw new Error('AI classification will be connected in the next integration stage.')
}