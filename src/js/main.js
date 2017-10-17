var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

function init() {
    scene = new THREE.Scene();
    initCamera();
    initRenderer();
    initMesh();
    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(10, 9.5, 5);a
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}

var mesh = null;
function initMesh() {
    var loader = new THREE.OBJLoader();
    loader.load(
			// resource URL
			'./human.obj',
			// Function when resource is loaded
			function ( object ) {
				scene.add( object );
				renderer.render(scene, camera);
			}
		);
}

var SPEED = 0.01;

/*function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}*/

function render() {
    requestAnimationFrame(render);
    //rotateCube();
    renderer.render(scene, camera);
}

init();
render();