import { InMemoryCache, Reference, makeVar } from "@apollo/client";

// Initializes to true if localStorage includes a 'token' key,
// false otherwise
export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem("token"));

// Initializes to an empty array
export const cartItemsVar = makeVar<string[]>([]);
