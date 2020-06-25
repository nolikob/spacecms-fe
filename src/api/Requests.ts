import { users } from "./DummyData";
import { SeoForm, LoginForm, User } from "./Types";

export function togglePermission(user: string, key: string, value: boolean) {
  const filtered = users.filter(u => u.username === user).pop();
  if (typeof filtered !== "undefined") {
    // @ts-ignore
    const i: number =  users.indexOf(filtered, 0);
    filtered.permissions[key] = value;
    users.splice(i, 1, filtered);
  }
}

export function submitSEOForm(values: SeoForm): void | Promise<any> {
  console.log(values);
}

export function storeSocials(values: {[key: string]: string}): void | Promise<any> {
  console.log(values);
}

export function login(values: LoginForm): void | Promise<any> {
  console.log(values);
}

export function createUser(values: any): void | Promise<any> {
  const newUser: User = {
    id: `${users.length + 1}`,
    username: values.username,
    permissions: {...values.permissions},
  };
  users.push(newUser);
}

export function updateUserPassword(userId: string, values: any): void | Promise<any> {
  console.log({userId, values});
}

export function removeUser(userId: string): void | Promise<any> {
  console.log(userId);
}
