var container = document.getElementById('header');

// settings
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 1000;

//controls
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
camera.position.z = 300;
camera.position.y = 0;
camera.lookAt(new THREE.Vector3(0,0,0));
scene.add(camera);

var animatedText = (function () {

    var characterArray = [];

    function splitText(text) {
        return text.split('');
    }

    var init = function (text) {
        splittedText = splitText(text);
        characterArray = [];

        splittedText.forEach(function (entry) {
            var textGeom = new THREE.TextGeometry( entry, {
                font: 'droid sans',
                weight: 'bold',
                curveSegments: 4,
                size: 32,
                height: 10,
                bevelEnabled: false,
            });
            textGeom.computeBoundingBox();
            textGeom.computeVertexNormals();
            textMesh = new THREE.Mesh( textGeom, new THREE.MeshLambertMaterial ({color: 0xffffff}) );
            textMesh.castShadow = true;

            characterArray.push({
                text: entry,
                mesh: textMesh,
                goingup: true,
                finished: false
            });
        });
    }

    var getCharacters = function() {
        return characterArray;
    }

    return {
        init: init,
        getCharacters: getCharacters,
    }

})();

function createText () {
    animatedText.init('MAGICO');
    var manualkerning = {
        'M' : 0,
        'A' : 0,
        'G' : -6,
        'I' : 0,
        'C' : -3,
        'O' : -4,
    }

    var group = new THREE.Object3D();
    var pos = 0;
    animatedText.getCharacters().forEach( function(entry) {
        var box = new THREE.Box3().setFromObject(entry.mesh);
        entry.mesh.position.z = -10;
        entry.mesh.position.x = (pos + manualkerning[entry.text]);
        pos += (box.max.x + manualkerning[entry.text] + 10);
        group.add(entry.mesh);
    });

    // center
    var box = new THREE.Box3().setFromObject(group);
    group.position.x = -(box.max.x/2);
    scene.add(group);
}

function createLights() {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.85)

    shadowLight = new THREE.DirectionalLight(0xffffff, 1);
    shadowLight.position.set(-100, 100, 50);
    shadowLight.castShadow = true;
    shadowLight.shadowDarkness = .2;

    shadowLight.shadowMapWidth = 4096;
    shadowLight.shadowMapHeight = 4096;

    longLight = new THREE.DirectionalLight(0xffffff, .2);
    longLight.position.set(-100, 100, 0);
    longLight.shadowDarkness = .1;
    longLight.castShadow = true;

    scene.add(light);
    scene.add(shadowLight);
    scene.add(longLight);
}

function createFloor(){
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(500,500), new THREE.MeshBasicMaterial({color: 0xeeeeee}));
    floor.position.y = 0;
    floor.position.z = 5;
    floor.receiveShadow = true;
    scene.add(floor);
}

function animate() {

    speed = 1;
    animatedText.getCharacters().forEach( function(entry) {
        if(animatedText.getCharacters().indexOf(entry) == 0 ||
            animatedText.getCharacters()[animatedText.getCharacters().indexOf(entry) - 1].goingup == false) {

            if(entry.goingup) {
                entry.mesh.position.z = entry.mesh.position.z + speed;
                if(entry.mesh.position.z > 4) {
                    entry.goingup = false;
                }
            } else if(!entry.finished) {
                entry.mesh.position.z = entry.mesh.position.z - speed;
                if(entry.mesh.position.z < 1) {
                    entry.finished = true;
                }
            }
            render();
        }
    });

    if(!animatedText.getCharacters()[animatedText.getCharacters().length - 1].finished) {
        requestAnimationFrame(animate);
    }
}

function render() {
    renderer.render(scene, camera);
}

function init() {
    container.appendChild(renderer.domElement);
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMapEnabled   = true;
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
}


createLights();
createFloor();
createText();
init();
render();
animate();