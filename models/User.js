const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const UserScheema = new mongoose.Schema({
    username : { type: String, require: true, unique: true },
    password : { type: String, require: true },
    email : { type: String, require: true, unique: true },
    CreatedAt : { type: Date, default: Date.now }, 
    type : { type: String, enum: ['teacher', 'student'], default: 'student' },
    avatar : { type: String, default: 'default.png' },
    bio : { type: String, default: 'No bio' },
    verified : { type: Boolean, default: false },
    resetPasswordToken : { type: String },
    resetPasswordExpires : { type: Date },
    Followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});