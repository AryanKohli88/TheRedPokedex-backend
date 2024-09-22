import express from 'express';
import validatetoken from '../middleware/validatetokenhandeler.js';
import TeamsController from '../controllers/teams_controller.js';
const router = express.Router();
const {
    getTeams,
    createTeam,
    getTeam,
    updateTeam,
    deleteTeam
} = TeamsController;

router.use(validatetoken);
router.route("/").get(getTeams).post(createTeam);
router.route("/:id").get(getTeam).delete(deleteTeam).put(updateTeam);

export default router;