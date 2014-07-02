var mesh;
var apartment = new THREE.Object3D();

var loader = new THREE.OBJLoader();
loader.load('models/proj.obj', function (obj) {
    global_o = obj;
    var multiMaterial = [
    new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
    ];

    mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);

    apartment.add(mesh);
  });

apartment = mk_all_doors(apartment);

apartment = mk_all_windows(apartment);

apartment = mk_all_floors(apartment);

apartment = mk_all_int_walls(apartment);

apartment = mk_all_ext_walls(apartment);


var frame_bump = mk_frame("bump");
apartment.add(frame_bump);
frame_bump.position.set(10.18,7,3);

var frame = mk_frame();
apartment.add(frame);
frame.position.set(10.18,10,3);
toIntersect.push(frame.children[1]);
console.log(frame);
frame.children[1].interact = function(){
	console.log(texture_photo2);
	crash_sound.play();
	frame.children[1].material.map = texture_photo2;
}

var frame_normal = mk_frame("normal");
apartment.add(frame_normal);
frame_normal.position.set(10.18,13,3);

var shower = mk_shower();
apartment.add(shower);
shower.position.set(18.81,7.71,0.8);

var streamShower = castShower();

var board = mk_blackboard();
apartment.add(board);
board.position.set(18,0.855,4);
board.rotation.x=Math.PI/2;


apartment.position.set(-123,0,108);
apartment.scale.set(10,10,10);
apartment.rotation.x=-Math.PI/2;
scene.add(apartment);