import asyncHandler from 'express-async-handler'
import Team from '../models/teammodel.js'
// const Contact = require("../models/ContactModel");
//@desc get all teams
//@route GET /api/team
//@access private 
const getTeams = asyncHandler(async(req,res)=> {
    console.log('finding for '+ req.user.id);
    const teams = await Team.find({user_id: req.user.id});
    res.status(200).json(teams);
});

//@desc Create new team
//@route POST /api/team
//@access private 
const createTeam = asyncHandler(async(req,res)=> {
    // console.log(" body is : ",req.body);
    const{team_name, pokemonArray} = req.body;
    if(!team_name || !pokemonArray ){
        res.status(400); 
        throw new Error("Missing field");
    }
    const team = await Team.create({
        team_name, pokemonArray, user_id: req.user.id
    });
    res.status(201).json(team);
});


//@desc Update a team
//@route PUT /api/team/:id
//@access private
const updateTeam = asyncHandler(async(req,res)=> {
    const team = await Team.findById(req.params.id);
    if(!team){
        res.status(404);
        throw new Error("Team not found");
    } 

    if(team.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("you can not update other user's teams");
    }

    const updatedTeam = await Team.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
);
res.status(200).json(updatedTeam);
});

//@desc get indv team
//@route delete /api/team/:id
//@access private 
const getTeam = asyncHandler(async(req,res)=> {
    console.log()
    const team = await Team.findById(req.params.id);
    if(!team){
        res.status(404);
        throw new Error("Team not found");
    }
    res.status(200).json(team);
});

//@desc Create new team
//@route individual team /api/team
//@access private
const deleteTeam = asyncHandler(async(req,res)=> {
    const team = await Team.findById(req.params.id);
    if(!team){
        res.status(404);
        throw new Error("team not found");
    } 

    
    if(team.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("you can not update other user's team");
    }


    await Team.deleteOne({_id: req.params.id});
    res.status(200).json(team);
});

export default {getTeams, createTeam,deleteTeam,updateTeam,getTeam};