const express = require("express");
const router = express.Router();
const districtController = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District management
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Create a new district
 *     tags: [District]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/districts", districtController.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: Get all districts
 *     responses:
 *       200:
 *         description: List of districts
 *       500:
 *         description: Server error
 */
router.get("/districts", districtController.getDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: District ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.get("/districts/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     summary: Update a district
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District updated
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/districts/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete a district
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.delete("/districts/:id", districtController.deleteDistrict);

module.exports = router;
