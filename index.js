class BankBranch { //Define a class called `BankBranch` for managing branch information.
    //Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
    constructor(branchInfo) { //Create a constructor that takes `branchInfo` as a parameter.
        if (!BankBranch.bankBranchInstance) { //Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
            this.branchInfo = branchInfo;
            BankBranch.bankBranchInstance = this; //If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
        }
        return BankBranch.bankBranchInstance; //Return the `bankBranchInstance` whether it's newly created or existing.
    }

    getBranchInfo() { //Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
        return this.branchInfo;
    }
}

// Usage
const branchInfoA = { name: 'Branch A', location: 'City A' }; // Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
const branchInfoB = { name: 'Branch B', location: 'City B' };

const branchA = new BankBranch(branchInfoA); //Use the `getBranchInfo` method to retrieve branch information from the instances.
const branchB = new BankBranch(branchInfoB);

console.log(branchA === branchB); //Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

console.log(branchA.getBranchInfo()); // Output: { name: 'Branch A', location: 'City A' }
console.log(branchB.getBranchInfo()); // Output: { name: 'Branch A', location: 'City A' } (Same as branchA)

// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo
// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.