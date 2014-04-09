"use strict";

var path = require("path"),
    execFile = require("child_process").execFile,
    fs = require('fs');

module.exports = function ifcConvert(source, options, callback) {

    if (!callback) {
        callback = options;
        options = undefined;
    }

    var collada2gltfPath;

    if (options && options.path) {
        collada2gltfPath = options.path + '/collada2gltf';
    } else {
        collada2gltfPath = 'collada2gltf';
    }

    if (!fs.existsSync(source)) {
        callback(new Error('Unable to open the source file.'));
        return;
    }

    var args = [source];


    execFile(collada2gltfPath, args, function(err, stdout, stderr) {

        if (err) {
            callback(err);
        } else if (stderr.lenght > 0) {
            callback(new Error(stderr.toString()));
        } else {
            callback(null);
        }
    });
};
