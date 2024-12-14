// Import the express module and create a router
const express = require("express");
const router = express.Router();

// Import the Supplier model
const Supplier = require("../models/Supplier");

// Route to get all suppliers
router.get("/", (req, res) => {
  // Fetch all suppliers from the database
  Supplier.find({})
    .then((suppliers) => res.json(suppliers))
    .catch((err) => res.json(err));
});

// Get supplier by ID
router.get("/getSupplier/:id", (req, res) => {
  // Update endpoint to getSupplier
  const id = req.params.id;
  Supplier.findById(id)
    .then((supplier) => res.json(supplier))
    .catch((err) => res.json(err));
});

// Route to Update Supplier by ID
router.put("/updateSupplier/:id", (req, res) => {
  // Update endpoint to updateSupplier
  const id = req.params.id;
  // Update the supplier by ID with the provided request body
  Supplier.findByIdAndUpdate(id, req.body, {
    // Define the fields to update based on the request body
    supplierID: req.body.supplierID,
    supplierName: req.body.supplierName,
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
    updated_date: req.body.updated_date,
  })
    .then((supplier) => res.json(supplier)) // Respond with the updated supplier
    .catch((err) => res.json(err));
});

// Create a new supplier
router.post("/createSupplier", (req, res) => {
  // Update endpoint to createSupplier
  Supplier.create(req.body)
    .then((supplier) => res.json(supplier))
    .catch((err) => res.json(err));
});

// Delete a supplier
router.delete("/deleteSupplier/:id", (req, res) => {
  // Update endpoint to deleteSupplier
  const id = req.params.id;
  Supplier.findByIdAndDelete(id)
    .then((supplier) => res.json(supplier))
    .catch((err) => res.json(err));
});

module.exports = router;
