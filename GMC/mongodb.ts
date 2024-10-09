// 1. Create a database called "contact"
use contact

// 2. Create a collection called "contactlist"
db.createCollection("contactlist")

// 3. Insert documents into "contactlist"
db.contactlist.insertMany([
    { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
])

// 4. Display all of the contacts list
print("All contacts:")
db.contactlist.find().pretty()

// 5. Display all the information about only one person using his ID
const kefi = db.contactlist.findOne({ firstName: "Seif" })
print("Contact info for Kefi Seif:")
db.contactlist.find({ _id: kefi._id }).pretty()

// 6. Display all the contacts with an age > 18
print("Contacts with age > 18:")
db.contactlist.find({ age: { $gt: 18 } }).pretty()

// 7. Display all the contacts with an age > 18 and name containing "ah"
print("Contacts with age > 18 and name containing 'ah':")
db.contactlist.find({ age: { $gt: 18 }, firstName: { $regex: /ah/, $options: 'i' } }).pretty()

// 8. Change the contact's first name from "Kefi Seif" to "Kefi Anis"
db.contactlist.updateOne(
    { firstName: "Seif", lastName: "Kefi" },
    { $set: { firstName: "Kefi Anis" } }
)
print("Updated Kefi Seif to Kefi Anis.")

// 9. Delete the contacts that are aged under < 5
db.contactlist.deleteMany({ age: { $lt: 5 } })
print("Deleted contacts aged under 5.")

// 10. Display all of the contacts list
print("All contacts after deletion:")
db.contactlist.find().pretty()
