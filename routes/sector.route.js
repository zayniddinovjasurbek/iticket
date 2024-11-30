const express = require("express");
const router = express.Router();
const sectorController = require("../controller/sectordton.controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     summary: Create a new sector
 *     tags: [Sector]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sector created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/sectors", sectorController.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Get all sectors
 *     responses:
 *       200:
 *         description: List of sectors
 *       500:
 *         description: Server error
 */
router.get("/sectors", sectorController.getSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Sector ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sector details
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.get("/sectors/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     summary: Update a sector
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sector updated
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.put("/sectors/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete a sector
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Sector ID
 *     responses:
 *       204:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.delete("/sectors/:id", sectorController.deleteSector);

module.exports = router;
