import mongoose  from "mongoose";

const teamschema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    team_name:{
        type: String,
        required: [true, "Please add"],
    },
    pokemonArray: {
        type: [Number],
        required: [true, "Please add"],
    }
},{
    timestamps: true,
});

export default mongoose.model("Team", teamschema);