const express = require("express");
const router = express.Router();
const regionController = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Create a new region
 *     tags: [Region]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postphone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/regions", regionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Region]
 *     summary: Get all regions
 *     responses:
 *       200:
 *         description: List of regions
 *       500:
 *         description: Server error
 */
router.get("/regions", regionController.getRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.get("/regions/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Update a region
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postphone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Region updated
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.put("/regions/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete a region
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.delete("/regions/:id", regionController.deleteRegion);

module.exports = router;
