const Users = Store.getStorage("users")

Store.addToStorage(userData, "Users")

const newUsers = {
  userData: {
    uuId: this.generateUuId(),
    firstName: `${this.firstname}`,
    lastName: `${this.lastname}`,
    image: "",
    email: `${this.email}`,
    password: `${this.password}`,
    role: `${this.role}`,
  },
  projectAssigned: [23,10],
  TaskAssigned: {
    taskId: [1,33,24],
    remark: [],
  },
};

class Store {
    /**
     * Access local storage by name
     * @param {string} storage_name name of storage
     */
    static getStorage(storage_name) {
        let storageName = storage_name;
        if (
            localStorage.getItem(`${storageName}`) === null ||
            localStorage.getItem(`${storageName}`) === undefined
        ) {
            storageName = [];
        } else {
            storageName = JSON.parse(localStorage.getItem(`${storageName}`));
        }

        return storageName;
    }

    /**
     * Adds data to storage
     * @param {var} data Data to push to storage
     * @param {string} storage_name Name of storage
     */
    static async addToStorage(data, storage_name) {
        const Data = Store.getStorage(storage_name);
        Data.push(data);
        console.log(Data);
        localStorage.setItem(`${storage_name}`, JSON.stringify(Data));
    }

    /**
     * returns boolean on email check
     * @param {string} email email to find
     * @param {string} storage_name storage to find email
     * @param {string} password password to find
     */
    static findUser(email, storage_name, password = "") {
        let getData = Store.getStorage(storage_name);

        let userExist = getData.find((user) => email === user.userData.email);
        let passwordExist = getData.find(
            (user) => password === user.userData.password
        );
        return userExist && passwordExist ? true : false;
    }

    static findEmail(email, storage_name) {
        let email_trimmed = email.trim();
        let getData = Store.getStorage(storage_name);

        let userExist = getData.find(
            (user) => email_trimmed === user.userData.email
        );
        return userExist;
        // === undefined ? false : true;
        // alert(userExist);
    }

    static getId(email, storage_name) {
        let getData = Store.getStorage(storage_name);

        let userExist = getData.find((user) => email === user.userData.email);
        if (userExist.uuId !== undefined) {
            return userExist.uuId;
        }
    }

    static removeFromStorage() { }
}
// let newone = [
//   {
//     name: "name",
//     one: 1,
//   },
//   {
//     name: "name2",
//     one: 2,
//   },
// ];
// let news = newone.find((user) => "name" === user.name);
// console.log(news.name);
export default Store;
