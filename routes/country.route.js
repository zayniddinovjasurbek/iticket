// routes/country.route.js
const express = require("express");
const router = express.Router();
const countryController = require("../controller/country.controller");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/countries:
 *   post:
 *     summary: Create a new country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/countries", countryController.createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Country]
 *     summary: Get all countries
 *     responses:
 *       200:
 *         description: List of countries
 *       500:
 *         description: Server error
 */
router.get("/countries", countryController.getCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.get("/countries/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     summary: Update a country
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/countries/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete a country
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/countries/:id", countryController.deleteCountry);

module.exports = router;
