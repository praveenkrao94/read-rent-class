const rent = require('../model/rentModel')

const rentCtrl = {

    getAll : async (req,res)=>{
        try{
            res.json({msg:"getAll called"})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    getSingle : async (req,res)=>{
        try{
            res.json({msg:"getSingle called"})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    create : async (req,res)=>{
        try{
            res.json({msg:"create called"})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    update : async (req,res)=>{
        try{
            res.json({msg:"update called"})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    delete : async (req,res)=>{
        try{
            res.json({msg:"delete called"})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },

}

module.exports = rentCtrl