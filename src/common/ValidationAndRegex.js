const validateInputs = (DOB, KYCstate, adhaarNumber) => {
    switch (true) {
        case !DOB || DOB === null:
            return "Please select your date of birth";
        case KYCstate.length === 0:
            return "Please enter your state";
        case adhaarNumber.length !== 12:
            return "Please enter your 12 digits Aadhaar number";
        default:
            return null; // No validation error
    }
};

export { validateInputs };
