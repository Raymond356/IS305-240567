/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond BONAVEN
  Student ID: 240567
  Date: 20 July 2026
*/

import readline from "readline";
import MealBooking from "./MealBooking.js";

// Temporary array to store bookings
const bookings = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function createBooking() {

    console.log("\n===== Dining Meal Booking =====\n");

    const studentId = await ask("Enter Student ID: ");
    const studentName = await ask("Enter Student Name: ");
    const mealDate = await ask("Enter Meal Date (DD-MM-YYY): ");
    const mealType = await ask("Enter Meal Type (Breakfast/Lunch/Dinner): ");
    const quantity = Number(await ask("Enter Quantity: "));
    const dietaryNote = await ask("Enter Dietary Note (Press Enter if none): ");

    const booking = new MealBooking({
        studentId,
        studentName,
        mealDate,
        mealType,
        quantity,
        dietaryNote
    });

    // Store booking temporarily
    bookings.push(booking);

    console.log("\n===== BOOKING SUCCESSFUL =====\n");
    console.log(booking.getSummary());
    console.log(`\nCalculated Total: $${booking.calculateTotal().toFixed(2)}`);

    console.log("\nCurrent Bookings");
    console.log("-----------------------------");

    bookings.forEach((booking, index) => {
        console.log(`Booking ${index + 1}`);
        console.log(booking.getSummary());
        console.log("-----------------------------");
    });

    rl.close();
}
createBooking();