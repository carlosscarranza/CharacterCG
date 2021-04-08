var camera, scene, renderer;
var geometry, material, mesh;
var cabezaGeometria, cabezaMaterial, cabezaMesh;
var ojoGeometria, ojoMaterial, ojoMesh;
var bigoteGeometria, bigoteMaterial, bigoteMesh;
var hombrosGeometria, hombrosMaterial, hombrosMesh;
var brazoGeometria, brazoMaterial, legsMesh;
var stats, controls;

let luigi = new THREE.Object3D();
init();

animate();


function createStats() {
  stats = new Stats();
  stats.setMode(1); // 0: fps, 1: ms, 2memory
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "100px";
  stats.domElement.style.top = "10px";
  document.getElementById("myStats").appendChild(stats.domElement);
  return stats;
}

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 4;
  camera.position.y = 1;
  scene = new THREE.Scene();

  //gorra
  cabezaGeometria = new THREE.BoxGeometry(0.8, 0.4, 0.15);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 2.45;
  //cabeza
  cabezaGeometria = new THREE.BoxGeometry(0.6, 0.6, 0.35);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0xffdbc4 });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 2;
  //ojo derecho
  ojoGeometria = new THREE.BoxGeometry(0.07, 0.15, 0.35);
  ojoMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  ojoMesh = new THREE.Mesh(ojoGeometria, ojoMaterial);
  scene.add(ojoMesh);
  ojoMesh.position.y = 2.1;
  ojoMesh.position.x = 0.1;
  //ojo izquierdo
  ojoGeometria = new THREE.BoxGeometry(0.07, 0.15, 0.35);
  ojoMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  ojoMesh = new THREE.Mesh(ojoGeometria, ojoMaterial);
  scene.add(ojoMesh);
  ojoMesh.position.y = 2.1;
  ojoMesh.position.x = -0.1;
  //Bigote de luigi
  cabezaGeometria = new THREE.BoxGeometry(0.3, 0.06, 0.35);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0x804000 });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 1.87;
  cabezaMesh.position.x = 0.01;
  //gorra detalle
  cabezaGeometria = new THREE.BoxGeometry(0.4, 0.1, 0.2);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 2.46;
  //L de luigi
  cabezaGeometria = new THREE.BoxGeometry(0.03, 0.08, 0.2);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 2.46;
  cabezaMesh.position.x = -0.03;
  //L de luigi
  cabezaGeometria = new THREE.BoxGeometry(0.09, 0.03, 0.2);
  cabezaMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  cabezaMesh = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
  scene.add(cabezaMesh);
  cabezaMesh.position.y = 2.43;
  cabezaMesh.position.x = 0.01;
  //brazo derecho
  brazoGeometria = new THREE.BoxGeometry(0.4, 1, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.2;
  legsMesh.position.x = 0.6;
  //brazo izquierdo
  brazoGeometria = new THREE.BoxGeometry(0.4, 1, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.2;
  legsMesh.position.x = -0.6;
  //guante derecho
  brazoGeometria = new THREE.BoxGeometry(0.3, 0.2, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 0.6;
  legsMesh.position.x = 0.66;
  //brazalete2
  brazoGeometria = new THREE.BoxGeometry(0.3, 0.2, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 0.6;
  legsMesh.position.x = -0.66;
  //busto
  brazoGeometria = new THREE.BoxGeometry(1, 1, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0x3b5bf2 });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.2;
  //cuello camiseta
  brazoGeometria = new THREE.BoxGeometry(0.6, 0.2, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0x45b245 });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.6;
  //punto izquierda
  brazoGeometria = new THREE.SphereGeometry(0.13, 0.1, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0xd8dd0b});
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.4;
  legsMesh.position.x = -0.35;
  //punto derecha
  brazoGeometria = new THREE.SphereGeometry(0.13, 0.1, 0.2);
  brazoMaterial = new THREE.MeshBasicMaterial({ color: 0xd8dd0b });
  legsMesh = new THREE.Mesh(brazoGeometria, brazoMaterial);
  scene.add(legsMesh);
  legsMesh.position.y = 1.4;
  legsMesh.position.x = 0.35;
  luigi.add(build_legs());
  scene.add(luigi);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  let loader = new THREE.TextureLoader();
  loader.load("./luigi.jpg", function (texture) {
    scene.background = texture;
  });

  //Stats
  createStats();
}
function build_legs() {
  let legs = new THREE.Object3D();
  //pierna derecha
  legGeometria = new THREE.BoxGeometry(0.45, 0.8, 0.15);
  legMaterial = new THREE.MeshBasicMaterial({ color: 0x3b5bf2 });
  legsMesh = new THREE.Mesh(legGeometria, legMaterial);
  legsMesh.position.y = 0.29;
  legsMesh.position.x = 0.28;
  legs.add(legsMesh);
  //zapato derecho
  shoeGeometria = new THREE.BoxGeometry(0.45, 0.25, 0.15);
  shoeMaterial = new THREE.MeshBasicMaterial({ color: 0x804000 });
  shoesMesh = new THREE.Mesh(shoeGeometria, shoeMaterial);
  shoesMesh.position.y = -0.26;
  shoesMesh.position.x = 0.28;
  legs.add(shoesMesh);
  //pierna izquierda
  legGeometria = new THREE.BoxGeometry(0.45, 0.8, 0.15);
  legMaterial = new THREE.MeshBasicMaterial({ color: 0x3b5bf2 });
  legsMesh = new THREE.Mesh(legGeometria, legMaterial);
  legsMesh.position.y = 0.29;
  legsMesh.position.x = -0.28;
  legs.add(legsMesh);
  //zapato izquierdo
  shoeGeometria = new THREE.BoxGeometry(0.45, 0.25, 0.15);
  shoeMaterial = new THREE.MeshBasicMaterial({ color: 0x804000 });
  shoesMesh = new THREE.Mesh(shoeGeometria, shoeMaterial);
  shoesMesh.position.y = -0.26;
  shoesMesh.position.x = -0.28;
  legs.add(shoesMesh);
  return legs;
}

function animate() {
  controls.update();
  stats.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
