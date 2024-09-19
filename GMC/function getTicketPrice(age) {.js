function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15";
    } else if (age >= 18) {
        return "Ticket Price: $20";
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}