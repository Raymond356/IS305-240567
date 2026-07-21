/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond BONAVEN
  Student ID: 240567
  Date: 20 July 2026
*/

// Fixed meal prices
const MEAL_PRICES = {
    Breakfast: 5,
    Lunch: 8,
    Dinner: 10,
    Snack: 3
};

const VALID_MEAL_TYPES = Object.keys(MEAL_PRICES);
const VALID_STATUSES = ["Pending", "Confirmed", "Cancelled"];

class MealBooking {

    // Private Fields
    #studentId;
    #studentName;
    #mealDate;
    #mealType;
    #quantity;
    #dietaryNote;
    #bookingStatus;

    constructor({
        studentId,
        studentName,
        mealDate,
        mealType,
        quantity,
        dietaryNote = "None"
    }) {
        // Validation
        if (!studentId || studentId.trim() === "") {
            throw new Error("Student ID cannot be empty.");
        }

        if (!studentName || studentName.trim() === "") {
            throw new Error("Student name cannot be empty.");
        }

        if (!VALID_MEAL_TYPES.includes(mealType)) {
            throw new Error(
                `Meal type must be one of: ${VALID_MEAL_TYPES.join(", ")}`
            );
        }

        if (isNaN(quantity) || quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        this.#studentId = studentId;
        this.#studentName = studentName;
        this.#mealDate = mealDate;
        this.#mealType = mealType;
        this.#quantity = Number(quantity);
        this.#dietaryNote = dietaryNote || "None";
        this.#bookingStatus = "Pending";
    }

    // Getters

    get studentId() {
        return this.#studentId;
    }

    get studentName() {
        return this.#studentName;
    }

    get mealDate() {
        return this.#mealDate;
    }

    get mealType() {
        return this.#mealType;
    }

    get quantity() {
        return this.#quantity;
    }

    get dietaryNote() {
        return this.#dietaryNote;
    }

    get bookingStatus() {
        return this.#bookingStatus;
    }

    // Setters

    set studentName(name) {

        if (!name || name.trim() === "") {
            throw new Error("Student name cannot be empty.");
        }

        this.#studentName = name;
    }

    set mealDate(date) {
        this.#mealDate = date;
    }

    set mealType(type) {

        if (!VALID_MEAL_TYPES.includes(type)) {
            throw new Error(
                `Meal type must be one of: ${VALID_MEAL_TYPES.join(", ")}`
            );
        }

        this.#mealType = type;
    }

    set quantity(qty) {

        qty = Number(qty);

        if (isNaN(qty) || qty <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        this.#quantity = qty;
    }

    set dietaryNote(note) {
        this.#dietaryNote = note || "None";
    }

    set bookingStatus(status) {

        if (!VALID_STATUSES.includes(status)) {
            throw new Error(
                `Booking status must be one of: ${VALID_STATUSES.join(", ")}`
            );
        }

        this.#bookingStatus = status;
    }

    // Methods

    calculateTotal() {

        const mealPrice = MEAL_PRICES[this.#mealType];

        return mealPrice * this.#quantity;
    }

    getSummary() {

        return `
==============================
        BOOKING SUMMARY
==============================
Student ID      : ${this.#studentId}
Student Name    : ${this.#studentName}
Meal Date       : ${this.#mealDate}
Meal Type       : ${this.#mealType}
Quantity        : ${this.#quantity}
Dietary Note    : ${this.#dietaryNote}
Booking Status  : ${this.#bookingStatus}
Total Cost      : $${this.calculateTotal().toFixed(2)}
==============================`;
    }

}
export default MealBooking;