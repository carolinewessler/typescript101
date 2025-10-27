function addTwo(num: number) {
    return num + 2
}

addTwo(3);

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {
    // logic to sign up user
}

signUpUser("Alice", "alice@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

export {}