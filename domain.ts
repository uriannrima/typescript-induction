export type User = {
  name: string;
  email: string;
};

export type Admin = User & {
  role: string;
};

export const users: User[] = [
  { name: "A", email: "A@A" },
  { name: "B", email: "B@B" },
];

export type Success<T> = { _type: "success"; value: T };
export type Error<E> = { _type: "error"; error: E };
export type Result<E, T> = Success<T> | Error<E>;
