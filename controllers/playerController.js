import mongoose from 'mongoose';
import player from '../models/player.js';

exports.getplayer = (req, res) => {
    player.findById(req.params.playerId, (err, player) => {
        if(err){
            res.send(err);
        }
        res.json(player);
    });
};

exports.getAllplayers = (req, res) => {
    player.find({}, (err, players) => {
        if(err){
            res.send(err);
        }
        res.json(players);
    });
};

exports.createplayer = (req, res) => {
    const newplayer = new player(req.body);

    newplayer.save((err, player) => {
        if(err){
            res.send(err);
        }
        res.json(players);
    });
};

exports.deleteplayer = (req, res) => {
    player.remove({
        _id: req.params.playerId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `player ${req.params.playerId} successfully deleted`
        });
    });
};