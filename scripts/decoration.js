// var texture_screen = THREE.ImageUtils.loadTexture("models/iMac_desktop/screen.jpg");
// var videoTexture = new THREE.Texture( videoImage );
// videoTexture.minFilter = THREE.LinearFilter;
// videoTexture.magFilter = THREE.LinearFilter;

// var texture_tvColor = THREE.ImageUtils.loadTexture("textures/Texture_TV_by_Alipse.jpg");
// var texture_tvOff = THREE.ImageUtils.loadTexture("textures/tv_nera.jpg");

// var texture_cucina = THREE.ImageUtils.loadTexture("models/kitchen/defuse.jpg");
// var texture_cucina_normal = THREE.ImageUtils.loadTexture("models/kitchen/normal_normals.jpg");




var loader1 = new THREE.OBJLoader();

function loading (pathOBJ, pathMTL){
  var arredo = new THREE.Object3D();
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event){
    var object = event.content;
    
    arredo.add(object);
  });
  loader.load(pathOBJ, pathMTL, {side: THREE.DoubleSide});
  return arredo;
}

//****** Desk ******//
var desk = mk_desk();
apartment.add(desk);
desk.position.set(17,1.8,1.65);

//***** Letto ****//
var letto = loading('models/bed/Bed.obj','models/bed/Bed.mtl');
apartment.add(letto);
letto.position.set(22.7,4.2,1.55);
letto.rotation.set(Math.PI/2,0,0);


// ***** Imac *****
var screenMac = new THREE.Mesh(new THREE.PlaneGeometry(0.7,0.47), new THREE.MeshLambertMaterial({map: texture_screen, side: THREE.DoubleSide}));

toIntersect.push(screenMac);
screenMac.on=false;
screenMac.interact=function(){
      if(!this.on){
            screenMac.material.map=videoTexture;
            this.on=true;
      } else {
            screenMac.material.map=texture_screen;
            this.on=false;
      }
}
apartment.add(screenMac);
screenMac.rotation.y=Math.PI;
screenMac.rotation.x=Math.PI*0.562;
screenMac.position.set(16.985,2.137,3.382);

var imac = loading('models/iMac_desktop/iMac_desktop.obj', 'models/iMac_desktop/iMac_desktop.mtl');
apartment.add(imac);
imac.rotation.set(Math.PI/2,Math.PI,0);
imac.scale.set(0.1, 0.1, 0.1);
imac.position.set(17,1.8,2.62);

//Tavolo in salone
var tavolo_salone = loading('models/table/Table.obj', 'models/table/Table.mtl');
tavolo_salone.scale.set(12, 10, 12);
tavolo_salone.rotation.set(Math.PI/2,Math.PI/2,0);
apartment.add(tavolo_salone);
tavolo_salone.position.set(5,5,1.6);

//Tv lcd salone
loader1.load('models/lcd_tv.obj', function (obj) {
      var material = new THREE.MeshPhongMaterial({color: 0xCCCCCC, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(1.5, 1.5, 1.5);
      obj.rotation.x = Math.PI/2;
      apartment.add(obj);
      obj.position.set(4.9,19.5,3.2);
});
var isOn = false;
var countClick=0;


var screenTV = new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.3), new THREE.MeshLambertMaterial({map: texture_tvOff, side: THREE.DoubleSide}));
screenTV.on = false;
    
apartment.add(screenTV);

var controller = mk_controller_tv(2.4,1.3, 0.0);
screenTV.add(controller);
controller.position.set(-1.8,-0.98,0.01);

screenTV.rotation.x=Math.PI/2;
screenTV.position.set(4.9,19.35,3.32);


// // ***** forno cucina *****
// loader1.load('models/kitchen/fkc.obj', function (obj) {
//       var material = new THREE.MeshPhongMaterial({map: texture_cucina, normalMap:texture_cucina_normal, metal: false});
//       obj.traverse(function (child) {
//           if (child instanceof THREE.Mesh) {
//             child.material = material;
//             }
//       });
//       obj.scale.set(0.07, 0.07, 0.07);
//       obj.rotation.x = Math.PI/2;
//       apartment.add(obj);
//       obj.position.set(21.45,19.83,0.8);
// });








// ***** Tavolo per la tv *****
var tavolo_tv = loading('models/table_cheap/table.obj', 'models/table_cheap/table.mtl');
tavolo_tv.scale.set(2, 2, 2.5);
apartment.add(tavolo_tv);
tavolo_tv.position.set(5,19.5,2.20);

// ***** Divano *****
var divano = loading('models/couchPoofyPillows/couchPoofyPillows.obj', 'models/couchPoofyPillows/couchPoofyPillows.mtl');
    divano.scale.set(0.9, 0.9, 0.9);
    divano.rotation.set(Math.PI/2,0,0);
    apartment.add(divano);
    divano.position.set(-5,17,1.2);

// ***** toilet *****
var toilet = loading('models/toilet/SA_LD_Toilet.obj', 'models/toilet/SA_LD_Toilet.mtl');
    toilet.scale.set(0.3, 0.3, 0.3);
    toilet.rotation.set(Math.PI/2,0,0);
    apartment.add(toilet);
    toilet.position.set(23,11.21,1.9);

// ***** Lavandino *****
loader1.load('models/washbowl/washbowl.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({color: 0xffffff, metal: false, shading: THREE.SmoothShading});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.018, 0.018, 0.018);
      apartment.add(obj);
      obj.position.set(20,11.31,0.88);
});

// ***** bidet *****
var bidet = loading('models/bidet/bidet.obj','models/bidet/bidet.mtl');
bidet.scale.set(0.02,0.02,0.02);
bidet.rotation.set(Math.PI/2,Math.PI,0);
apartment.add(bidet);
bidet.position.set(22,7.08,0.86);

// *****  microonde *****
var microonde = loading('models/Microwave/Microwave.obj','models/Microwave/Microwave.mtl');
    microonde.rotation.set(Math.PI/2,0,0);
    apartment.add(microonde);
    microonde.position.set(18.45,19.83,2.81);
var frigo;
loader1.load('models/Hitachi.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({color: 0xffffff, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.05, 0.05, 0.05);
      obj.rotation.x = Math.PI/2;
      obj.rotation.y = -Math.PI/2;
      apartment.add(obj);
      obj.position.set(19,13,0.8);
});

// ***** Libro java ***** 
var java_book = loading('models/java/livreJava.obj','models/java/livreJava.mtl');
java_book.scale.set(0.016,0.016,0.016);
java_book.rotation.set(Math.PI/2,Math.PI,0);
apartment.add(java_book);
java_book.position.set(17.9,2,2.685);

// ***** Sedia in camera *****
var chair = loading('models/office_chair/office_chair.obj','models/office_chair/office_chair.mtl');
chair.scale.set(2,1.85,2);
chair.rotation.set(Math.PI/2,0,0);
apartment.add(chair);
chair.position.set(17.9,1.7,0.86);

//Forno
var piano_cottura = loading('models/cucina/cucina.obj','models/cucina/cucina.mtl');
piano_cottura.rotation.set(Math.PI/2,0,0);
piano_cottura.scale.set(0.024,0.024,0.024);
apartment.add(piano_cottura);
piano_cottura.position.set(21.45,19.30,0.8);

var fire1 = castFire(50,0.05,0.05,0.5);
apartment.add(fire1);
fire1.position.set(20.83,19.80,1.16);
animateFire(fire1, 0.04);

var fire2 = castFire(50,0.075,0.05,0.5);
apartment.add(fire2);
fire2.position.set(20.01,19.80,1.16);
animateFire(fire2, 0.065);

var fire3 = castFire(50,0.06,0.05,0.5);
apartment.add(fire3);
fire3.position.set(20.83,20.28,1.16);
animateFire(fire3, 0.05);

var fire4 = castFire(50,0.06,0.5,0.5);
apartment.add(fire4);
fire4.position.set(20.01,20.28,1.16);
animateFire(fire4, 0.05);

var buttons = mk_buttons();
apartment.add(buttons);
buttons.position.set(21.11,19.78,2.71);

//Piano cucina doppio
var piano_doppio = loading('models/doppio/doppio.obj','models/doppio/doppio.mtl');
piano_doppio.rotation.set(Math.PI/2,0,0);
piano_doppio.scale.set(0.024,0.024,0.024);
apartment.add(piano_doppio);
piano_doppio.position.set(13.55,15.94,0.8);

//piano cucina singolo
var piano_singolo = loading('models/singolo/singolo.obj','models/singolo/singolo.mtl');
piano_singolo.rotation.set(Math.PI/2,0,0);
piano_singolo.scale.set(0.024,0.024,0.024);
apartment.add(piano_singolo);
piano_singolo.position.set(19.278,19.3,0.8);
