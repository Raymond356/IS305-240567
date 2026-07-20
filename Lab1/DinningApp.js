/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond BONAVEN
  Student ID: 240567
  Date: 20 July 2026
*/


// MealBooking class.

import MealBooking from "./MealBooking.js";

// Create a MealBooking object using an object literal for the booking details.
const booking1 = new MealBooking({
  studentId: "S1024",
  studentName: "Joe Kumul",
  mealDate: "2026-07-20",
  mealType: "Lunch",
  quantity: 2,
  dietaryNote: "No peanuts",
});

// Call the object's methods and display the results.
console.log(booking1.getSummary());
console.log(`\nCalculated Total: $${booking1.calculateTotal().toFixed(2)}`);

// Demonstrate the getters.
console.log(`\nDirect getter check -> Student: ${booking1.studentName}, Status: ${booking1.bookingStatus}`);

// Demonstrate the setters by updating the booking.
booking1.quantity = 3;
booking1.bookingStatus = "Confirmed";

console.log("\nAfter updating quantity and status:\n");
console.log(booking1.getSummary());

// Create a second booking to show the class can be reused for multiple objects.
const booking2 = new MealBooking({
  studentId: "S2087",
  studentName: "Mark Johnson",
  mealDate: "2026-07-21",
  mealType: "Dinner",
  quantity: 1,
});

console.log("\n" + booking2.getSummary());
