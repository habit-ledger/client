/**
 * A Trigger, Success, Failure constant set to use for actions
 */
export type EventSet = [ string, string, string ]

/**
 * Generate a new formatted constant in the format "[KEY] ACTION"
 */
export function constantKey(key: string, act: string): string {
  return `[${key}] ${act}`.trim();
}

/**
 * Create a new function that can be used for a module where a formatted constant
 * key can be generated with a bound feature key
 */
export function constantKeyFn(key: string): (a: string) => string {
  return constantKey.bind(null, key);
}

/**
 * Generate an EventSet (Trigger, Success, Failure) constant set that can be used
 * for actions that have an initial trigger, a success, and a failure response.
 */
export function constantKeyResultSet(key: string, act: string): [ string, string, string ] {
  const fn = constantKeyFn(key);
  return [ fn(act), fn(`${act} Success`), fn(`${act} Failure`) ];
}

/**
 * Create a new function that binds the feature key to generate EventSets without
 * needing to provide the feature key every time
 */
export function constantKeyResultSetFn(key: string): (a: string) => [ string, string, string ] {
  return constantKeyResultSet.bind(null, key);
}
