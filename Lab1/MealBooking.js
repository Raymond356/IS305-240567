/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond BONAVEN
  Student ID: 240567
  Date: 20 July 2026
*/

// Fixed prices per meal type, used by calculateTotal().
const MEAL_PRICES = {
  Breakfast: 5,
  Lunch: 8,
  Dinner: 10,
  Snack: 3,
};

const VALID_MEAL_TYPES = Object.keys(MEAL_PRICES);
const VALID_STATUSES = ["Pending", "Confirmed", "Cancelled"];

class MealBooking {
  // ----- Private fields -----
  #studentId;
  #studentName;
  #mealDate;
  #mealType;
  #quantity;
  #dietaryNote;
  #bookingStatus;

  // Constructor receives a single object containing the booking details.
  constructor({ studentId, studentName, mealDate, mealType, quantity, dietaryNote = "None" }) {
    this.#studentId = studentId;
    this.#studentName = studentName;
    this.#mealDate = mealDate;
    this.#mealType = mealType;
    this.#quantity = quantity;
    this.#dietaryNote = dietaryNote;

    // Every new booking starts out as "Pending" by default.
    this.#bookingStatus = "Pending";
  }

  // ----- Getters -----
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

  // ----- Setters -----
  set studentName(newName) {
    if (typeof newName !== "string" || newName.trim() === "") {
      throw new Error("Student name must be a non-empty string.");
    }
    this.#studentName = newName;
  }

  set mealDate(newDate) {
    this.#mealDate = newDate;
  }

  set mealType(newType) {
    if (!VALID_MEAL_TYPES.includes(newType)) {
      throw new Error(`Meal type must be one of: ${VALID_MEAL_TYPES.join(", ")}`);
    }
    this.#mealType = newType;
  }

  set quantity(newQuantity) {
    if (typeof newQuantity !== "number" || newQuantity <= 0) {
      throw new Error("Quantity must be a positive number.");
    }
    this.#quantity = newQuantity;
  }

  set dietaryNote(newNote) {
    this.#dietaryNote = newNote;
  }

  set bookingStatus(newStatus) {
    if (!VALID_STATUSES.includes(newStatus)) {
      throw new Error(`Booking status must be one of: ${VALID_STATUSES.join(", ")}`);
    }
    this.#bookingStatus = newStatus;
  }

  // ----- Methods -----
  // Calculates the total cost of the booking based on meal type price and quantity.
  calculateTotal() {
    const pricePerMeal = MEAL_PRICES[this.#mealType] ?? 0;
    return pricePerMeal * this.#quantity;
  }

  // Returns a human-readable summary of the booking.
  getSummary() {
    return (
      `Booking Summary\n` +
      `----------------\n` +
      `Student ID   : ${this.#studentId}\n` +
      `Student Name : ${this.#studentName}\n` +
      `Meal Date    : ${this.#mealDate}\n` +
      `Meal Type    : ${this.#mealType}\n` +
      `Quantity     : ${this.#quantity}\n` +
      `Dietary Note : ${this.#dietaryNote}\n` +
      `Status       : ${this.#bookingStatus}\n` +
      `Total Cost   : $${this.calculateTotal().toFixed(2)}`
    );
  }
}

export default MealBooking;
