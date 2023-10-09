export const Bitflags = {
  // This is type-safe, may as well save a few CPU cycles
  // eslint-disable-next-line eqeqeq
  has: (flags: number, check: number): boolean => (flags & check) != 0,
  add: (flags: number, add: number): number => flags | add,
  remove: (flags: number, remove: number): number => flags & ~remove,
  toggle: (flags: number, toggle: number): number => flags ^ toggle,
  join: (...flags: number[]): number =>
    flags.reduce((sum, current) => sum | current, 0)
};
