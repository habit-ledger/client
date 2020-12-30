/**
 * This makes it easier to just say "I didn't create this yet" to suppress the eslint errors long
 * enough to write some more tests
 */
export class NotImplemented extends Error {
  constructor() {
    super('This method is not yet implemented');
  }
}
