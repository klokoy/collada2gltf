#Collada to gltf converter for Node.js

A simple wrapper for the collada2gltf program for node.

#Requirements

- collada2gltf, Installation instructions and binaries can be found at the [glTF](https://github.com/KhronosGroup/glTF) page.

#Usage

```javascript
var collada2gltf = require('collada2gltf');

collada2gltf('source.dae', function(err) {
    //Now you have a set of gltf files in your current directory;)
    //source.bin, source.json + shader files (source.0FS.glsl, source.0VS.glsl)
});

```

#Options

If you do not have collada2gltf in your path you can give it in options.

```javascript
collada2gltf('source.dae', {path: 'path/to/bin'}, function(err) {
    //Done
})
```
