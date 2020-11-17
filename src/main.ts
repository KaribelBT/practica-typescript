console.log("Hello world in TypeScript");

//NUMBER
let phone: number; //Explícito
phone = 5491121685966; // phone = 'hola'; ERROR por tipo de dato
let phoneNumber = 5491121685966; //Inferido
let hex: number = 0xf; //valor hexadecimal entre 0 y 9
let binary: number = 0b1010; // valor binario 1 o 0
let octal: number = 0o744; //valor octal entre 0 y 7

//BOOLEAN
let isPro: boolean; //Explícito
isPro = true; //isPro = 12; ERROR por tipo de dato
let isUSerPRo = false; // Inferido

//STRING
let username: string = "karibelbt"; //explícito agregando valor //username = true; ERROR por tipo de dato

//TEMPLATE STRING con back-tick `
let userInfo: string;
userInfo = `User Info: username: ${username}, phone: ${phone}, isPro: ${isPro}`;
console.log(userInfo);

//ANY cuando no sabemos que tipo de dato vamos a recibir de una api externa x ej
let idUser: any; //Explícito
idUser = 1; //number
idUser = "1"; //string
console.log("idUser", idUser);
let otherId; //Inferido
otherId = 1; //number
otherId = "1"; //string
console.log("otherId", otherId);
let surprise: any = "hello typescript"; //si cambia el tipo de dato, el resto del código da error, hay que evitar usar ANY
const res = surprise.substring(6);
console.log("res", res);

//VOID se utiliza cuando las funciones no retornan valores o con variables con null o undefined
function showInfo(user: any): void {
  //Explícito
  console.log("User Info", user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "karibelbt", firstName: "Karibel" });
function showFormattedInfo(user: any) {
  //Inferido
  console.log(
    "User Info",
    `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `
  );
}
showFormattedInfo({ id: 1, username: "karibelbt", firstName: "Karibel" });
let unusuable: void; //Explícito
unusuable = undefined;

//NEVER nunca devuelve un valor
function handleError(code: number, message: string): never {
  //Process your code here
  //Generate a message
  throw new Error(`${message}. Code: ${code}`);
}
//handleError(404, "Not Found");
function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}
//sumNumbers(10); ciclo infinito

//NULL
let nullVariable: null; // Explícito
nullVariable = null;
let otherVariable = null; // Inferido pero toma any, es decir siempre tiene que ser explícita la declaración
otherVariable = "test"; //permite string porque es any no null
console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

//UNDEFINED
let undefinedVariable: undefined; //Explícito
undefinedVariable = undefined;
let otherUndefined = undefined; // Inferido pero toma any, es decir siempre tiene que ser explícita la declaración
otherUndefined = 1;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);

//NULL & UNDEFINED COMO SUBTIPOS
let albumName: string; // albumName = null; albumName = undefined da error por configuación strict en el tsconfig
// --strictNullChecks flag para chequear en la terminal o en el tsconfig

//OBJECT si no es ninguno de los anteriores, entonces es object
let user: object;
user = {};
user = {
  id: 1,
  username: "karibelbt",
  firstname: "karibel",
  isPro: true,
};
console.log("user object", user); //no se puede acceder a user.username porque no es la clase Object de js

//object vs Object
const myObj = {
  //ts considera al tipo como una instancia de la clase Object
  id: 1,
  username: "karibelbt",
  firstname: "karibel",
  isPro: true,
};
const isInstance = myObj instanceof Object; //clase Object de js
console.log("isInstance", isInstance);
console.log("user.username", myObj.username);

//ARRAY con corchetes []
let users: string[]; //explícito y solo permite strings
users = ["karibelbt", "fitogt", "myeyesreflectthis"];
let otherUsers = ["karibelbt", "fitogt", "myeyesreflectthis"]; //inferido, solo permite strings
console.log("first user", users[0]); //accediendo a los valores de un array
console.log("users.length", users.length); //propiedades en array
users.push("newuser"); //funciones en arrays
users.sort();
console.log("users", users);

//ARRAY <TIPO>
let pictureTitles: Array<string>;
pictureTitles = ["Favorite Sunset", "Vacation Time", "Landscape"];
console.log("first picture title", pictureTitles[0]);

//TUPLAS permiten expresas un array con un número fijo de elementos , dónde el tipo de dato es conocido
let userTuple: [number, string];
userTuple = [1, "karibelbt"];
console.log("userTuple", userTuple);
console.log("id", userTuple[0]);
console.log("username", userTuple[1]);
console.log("username.length", userTuple[1].length);
let userInfoTuple: [number, string, boolean];
userInfoTuple = [2, "fitogt", true];
console.log("userInfoTuple", userInfoTuple);
let tupleArr: [number, string][] = []; //conjunto de tuplas
tupleArr.push([1, "username1"]); //index 0
tupleArr.push([2, "username2"]); //index 1
tupleArr.push([3, "username3"]); //index 2
console.log("tupleArr", tupleArr);
tupleArr[2][1] = tupleArr[2][1].concat("changed");
console.log("tupleArr", tupleArr);

//ENUM, periten definir un conjunto de const con el mismo nombre adaptándose al contexto de la app
enum PhotoOriantation {
  Landscape, // 0
  Portrait, // 1
  Square, // 2
  Panorama, // 3
}
const landscape: PhotoOriantation = PhotoOriantation.Landscape;
const portrait: PhotoOriantation = PhotoOriantation.Portrait;
const square: PhotoOriantation = PhotoOriantation.Square;
const panorama: PhotoOriantation = PhotoOriantation.Panorama;
console.log("landscape =", landscape);
console.log("landscape =", PhotoOriantation[landscape]);
enum PictureOriantation {
  Landscape = 10, // se puede personalizar el valor de inicio
  Portrait,
  Square,
  Panorama,
}
console.log("portrait=", PictureOriantation.Portrait);
enum Country {
  Bolivia = "bol", //además de valores, se pueden tomar strings
  Colombia = "col",
  Mexico = "mex",
  Argentina = "arg",
  Espana = "esp",
}
const country: Country = Country.Argentina;
console.log("country=", country);

//UNION DE TIPOS DE DATOS
let id: number | string; // se declara la variable con 2 tipos de datos
id = 10;
id = "10";
function getUsernameById(id: number | string) {
  //lógica de la función
  return "karibelbt";
}
getUsernameById(20);
getUsernameById("20");

//ALIAS DE TIPOS
type idPhoto = number | string;
let idPhoto: idPhoto;
id = 20;
id = "20";
function getPhotoById(id: idPhoto) {
  //lógica de la función
  return "karibelbt";
}
getPhotoById(20);
getPhotoById("20");

//TIPOS LITERALES
type SquareSize = "100x100" | "500x500" | "1000x1000";
let smallPicture: SquareSize = "100x100"; //solo se pueden asignar los valores de la línea 202
let mediumPicture: SquareSize = "500x500";
let largePicture: SquareSize = "1000x1000";
console.log("square size", smallPicture, mediumPicture, largePicture);

//ASERSIONES DE TIPO <angle bracket> (más utilizada) o AS, por buena práctica no se deben combinar
let userName: any;
userName = "karibelbt";
let message: string =
  (<string>userName).length > 5 //fuerzo el tipo a string para poder usar el método length
    ? `Welcome ${userName}`
    : `Username is too short`;
console.log("message", message);
let usernameWithId: any = "karibelbt 1"; //pero solo necesitamos el username
userName = (<string>usernameWithId).substring(0, 9);
console.log("Username only", username);
message =
  (userName as string).length > 5 //fuerzo el tipo a string con AS
    ? `Welcome ${userName}`
    : `Username is too short`;
console.log("message", message);

//FUNCIONES EN TYPESCRIPT
function createPicture(title: string, date: string, size: SquareSize) {
  //se deben definir los tipos de los parámetros
  console.log("create Picture using", title, date, size);
}
createPicture("My Birthday", "27/01/2020", "100x100"); //debemos completar todos los parámetros con el tipo declarado
function createPicture2(size: SquareSize, title?: string, date?: string) {
  //parametros opcionales
  console.log("create Picture using", title, date, size);
}
createPicture2("500x500", "10/03/2020");
let createPic = (title: string, date: string, size: SquareSize): Object => {
  //definir el tipo de return
  return { title, date, size };
};
console.log(createPic("New Picture", "11/11/2020", "1000x1000"));
let handleErr = (code: number, message: string): never | string => {
  //se pueden definir 2 tipos de return
  if (message === "error") {
    throw new Error(`${message}. Code Error: ${code}`); //retorna never
  } else {
    return "An error has ocurred"; //retorna un string
  }
};
try {
  console.log(handleErr(200, "OK"));
} catch (error) {
  console.log(handleErr(400, "error"));
}

//INTERFACES forma de definir contratos para el código más limpia
interface Picture {
  title: string;
  date: string;
  orientation: PictureOriantation;
}
let showPicture = (picture: Picture) => {
  console.log(`[title: ${picture.title}], 
              [date: ${picture.date}], 
              [orientation: ${picture.orientation}],`);
};
let myPic = {
  title: "Test Title",
  date: "2020/03",
  orientation: PictureOriantation.Landscape,
};
showPicture(myPic);
showPicture({
  title: "Title",
  date: "2020/11",
  orientation: PictureOriantation.Panorama,
});
interface PictureConfig {
  // ? para hacer los atributos opcionales
  title?: string;
  date?: string;
  orientation?: PictureOriantation;
}
let generatePicture = (config: PictureConfig) => {
  const picture = { title: "Default", date: "2020/03" };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date;
  }
  return picture;
};
let picture = generatePicture({});
console.log(picture);
interface Entity {
  //interfaz generica para no repetir atributos
  id: number;
  title: string;
}
interface Album extends Entity {
  //copia de atributos de Entity
  description?: string;
}
interface Pic extends Entity {
  //copia de atributos de Entity
  orientation: PhotoOriantation;
}
const album: Album = {
  id: 1, //viene de Entity
  title: "Meetups", //viene de Entity
  description: "Community events around the world", //viene de Album
};
const pics: Pic = {
  id: 1, //viene de Entity
  title: "Meetups", //viene de Entity
  orientation: PhotoOriantation.Portrait, //viene de Pic
};
let newPicture = <Pic>{};
newPicture.id = 2;
newPicture.title = "luna";
console.log("album", album);
console.log("picture", pics);
console.log("new picture", newPicture);

//CLASES
abstract class Item { //SUPER CLASE, no permite crear objetos a partir de la clase al poner abstract
  protected readonly id: number; //los miembros protegidos pueden ser accedidos desde la clase y sus extends
  protected readonly title: string; //los miembros readonly solo permiten ser accedidos sin modificarse
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
//const item = new Item(1, 'test title'); da error porque Item es abstract
class Pictures extends Item{
  static photoOrientation = PhotoOriantation // setea un miembro estático y público
  orientation: PhotoOriantation; //define como público el acceso, sino se agrega nada, por default es public
  constructor(id: number, title: string, orientation: PhotoOriantation) {
    super(id, title); //viene desde la clase Item como herencia
    this.orientation = orientation;
  }
  toString() {
    return `[id: ${this.id}], [title: ${this.title}], [orientation: ${this.orientation}]`;
  }
}
class Albums {
  private id: number; //define como privado el acceso
  #title: string; //con ecmascript se puede definir con #
  #pictures: Pictures[];
  constructor(id: number, title: string) {
    this.id = id;
    this.#title = title;
    this.#pictures = [];
  }
  get albumId() {
    //permite acceder a un miembro privado
    return this.id;
  }
  set albumId(id: number) {
    //permite modificar el miembro privado
    this.id = id;
  }
  get albumTitle() {
    //permite acceder a un miembro privado
    return this.#title;
  }
  get albumPictures() {
    //permite acceder a un miembro privado
    return this.#pictures;
  }
  addPicture(picture: Pictures) {
    this.#pictures.push(picture);
  }
}
const newAlbum: Albums = new Albums(1, "Personal Pictures");
const newPictures: Pictures = new Pictures(
  1,
  "Platzi session",
  PhotoOriantation.Square
);
newAlbum.addPicture(newPictures);
console.log("album desde clase", newAlbum);

//MIEMBROS PÚBLICOS DE CLASES
newPictures.orientation = PhotoOriantation.Square; //public
console.log('Photo orientation', Pictures.photoOrientation.Landscape);
//MIEMBROS PRIVADOS DE CLASES
//newAlbum.title = "Personal activities"; private no se puede acceder fuera de la clase
console.log("album", newAlbum); //no muestra los miembros privados
console.log(
  `[album id:${newAlbum.albumId}] 
   [album title:${newAlbum.albumTitle}] 
   [album pictures:${newAlbum.albumPictures}]`
); 

//MODULOS
/*se utitiliza export e import*/