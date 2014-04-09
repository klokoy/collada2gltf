var collada2gltf = require('../index.js'),
    assert = require('chai').assert,
    path = require('path'),
    fs = require('fs');

describe('collada2glfs', function() {
    it('should convert duck.dae file', function(done) {

        var source = relative('duck.dae');

        collada2gltf(source, function(err) {
            assert(!err);

            assert(fs.existsSync(relative('duck.bin')));
            assert(fs.existsSync(relative('duck.json')));
            assert(fs.existsSync(relative('duck0FS.glsl')));
            assert(fs.existsSync(relative('duck0VS.glsl')));

            console.log(relative('duck.bin'));

            done();

            //cleanup
            fs.unlink(relative('duck.bin'));
            fs.unlink(relative('duck.json'));
            fs.unlink(relative('duck0FS.glsl'));
            fs.unlink(relative('duck0VS.glsl'));
        });


    });

});

function relative(relPath) {
    return path.resolve(__dirname, relPath);
}
