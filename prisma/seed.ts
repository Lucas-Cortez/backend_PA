import { Bus, Line, PrismaClient, Stop, Stop_Line, User } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const USERS: User[] = [
  {
    id: 1,
    name: "Heduardo",
    email: "hedu@gmail.com",
    hash: "duzao123",
  },
  {
    id: 2,
    name: "Gustavo",
    email: "gustvao@outlook.com",
    hash: "starvation12",
  },
  {
    id: 3,
    name: "Brandao",
    email: "matheus@hotmail.com",
    hash: "skyrimbr",
  },
];

const BUS: Bus[] = [
  {
    id: 1,
    capacity: 36,
    height: 3.18,
    width: 2.5,
    length: 15.0,
    weight: 30000,
    model: "starvation",
    active: false,
  },
  {
    id: 2,
    capacity: 40,
    height: 3.3,
    width: 2.75,
    length: 16.0,
    weight: 20000,
    model: "starvation",
    active: false,
  },
  {
    id: 3,
    capacity: 30,
    height: 3.2,
    width: 2.5,
    length: 13.5,
    weight: 15000,
    model: "starvation",
    active: false,
  },
];

const STOPS: Stop[] = [
  {
    id: 1,
    name: "Rua Recife",
    latitude: -22.34863698382014,
    longitude: -47.40499198268001,
  },
  {
    id: 2,
    name: "Avenida Senador César Lacerda de Vergueiro",
    latitude: -22.354749395576064,
    longitude: -47.39743888278855,
  },
  {
    id: 3,
    name: "Avenida Padre Alarico Zacarias",
    latitude: -22.3592565655256,
    longitude: -47.38880860960194,
  },
  {
    id: 4,
    name: "Avenida Padre Alarico Zacarias",
    latitude: -22.363225391956494,
    longitude: -47.39043939276758,
  },
  {
    id: 5,
    name: "Rua América",
    latitude: -22.344173993867724,
    longitude: -47.3800538789232,
  },
  {
    id: 6,
    name: "Rua Ribeirão Preto",
    latitude: -22.344015221273537,
    longitude: -47.378423095757555,
  },
  {
    id: 7,
    name: "Rua Ribeirão Preto",
    latitude: -22.343141968772976,
    longitude: -47.376277328434334,
  },
  {
    id: 8,
    name: "Rua Ribeirão Preto",
    latitude: -22.342530932046333,
    longitude: -47.37590955222946,
  },
  {
    id: 9,
    name: "Rua Ribeirão Preto",
    latitude: -22.341404233152485,
    longitude: -47.37454809815939,
  },
  {
    id: 10,
    name: "Avenida São Pedro",
    latitude: -22.341978530208685,
    longitude: -47.37038231678214,
  },
  {
    id: 11,
    name: "Av. Pres Costa e Silva",
    latitude: -22.37910833341576,
    longitude: -47.393212003275565,
  },
  {
    id: 12,
    name: "Rua José Antônio Cressoni",
    latitude: -22.37910833341576,
    longitude: -47.37943544790373,
  },
  {
    id: 13,
    name: "Avenida Goffredo Teixeira da Silva Telles",
    latitude: -22.366083551029156,
    longitude: -47.370593778038234,
  },
  {
    id: 14,
    name: "Rua Luís Golineli",
    latitude: -22.36427709812684,
    longitude: -47.36195772840216,
  },
  {
    id: 15,
    name: "Rua da Tecelã",
    latitude: -22.351863211711517,
    longitude: -47.338873357397695,
  },
  {
    id: 16,
    name: "Avenida Augusta Viola da Costa",
    latitude: -22.354482788866946,
    longitude: -47.33792921977548,
  },
  {
    id: 17,
    name: "Avenida Presidente Vargas",
    latitude: -22.352815790920932,
    longitude: -47.33629843660984,
  },
  {
    id: 18,
    name: "Rua Jarbas Leme de Godoy",
    latitude: -22.353609601954073,
    longitude: -47.333895177207836,
  },
  {
    id: 19,
    name: "Rua Florianópolis",
    latitude: -22.350031153278046,
    longitude: -47.40412831125258,
  },
  {
    id: 20,
    name: "Rua Ciro Lagazi",
    latitude: -22.35042806729176,
    longitude: -47.40215420531521,
  },
  {
    id: 21,
    name: "Rua Afonso Bueno",
    latitude: -22.347967182183428,
    longitude: -47.398377654826355,
  },
  {
    id: 22,
    name: "Rua Orquídeas",
    latitude: -22.358127975431053,
    longitude: -47.397261855818286,
  },
  {
    id: 23,
    name: "Avenida Flamboiant",
    latitude: -22.36979609713661,
    longitude: -47.404986618181866,
  },
  {
    id: 24,
    name: "Avenida Dona Renata",
    latitude: -22.358683622441553,
    longitude: -47.39065289246278,
  },
  {
    id: 25,
    name: "Avenida Padre Atílio",
    latitude: -22.361223694834393,
    longitude: -47.38756298751735,
  },
  {
    id: 26,
    name: "Av Pe Alarico Zacarias",
    latitude: -22.367414927212536,
    longitude: -47.39228367562843,
  },
  {
    id: 27,
    name: "Rua Paraíba",
    latitude: -22.373843992538358,
    longitude: -47.389794585533494,
  },
  {
    id: 28,
    name: "Rua Nunes Machado",
    latitude: -22.356619779515782,
    longitude: -47.38284229940627,
  },
  {
    id: 29,
    name: "Avenida Presidente Dutra",
    latitude: -22.381383876121962,
    longitude: -47.38653302009253,
  },
  {
    id: 30,
    name: "Avenida Presidente Costa e Silva",
    latitude: -22.38225688886656,
    longitude: -47.388592956722825,
  },
  {
    id: 31,
    name: "Rua Antônio Pereira da Silva",
    latitude: -22.385113983221466,
    longitude: -47.37743496682905,
  },
  {
    id: 32,
    name: "Rua José Antônio Cressoni",
    latitude: -22.380907685080174,
    longitude: -47.37691998267148,
  },
  {
    id: 33,
    name: "Avenida José Ometto",
    latitude: -22.373367775840862,
    longitude: -47.37331509356847,
  },
  {
    id: 34,
    name: "Rua América",
    latitude: -22.346697031094966,
    longitude: -47.380009887999755,
  },
  {
    id: 35,
    name: "Rua Piracicaba",
    latitude: -22.34280712088566,
    longitude: -47.37374424741595,
  },
  {
    id: 36,
    name: "Avenida Augusta Viola da Costa",
    latitude: -22.35280952784119,
    longitude: -47.3346912838118,
  },
  {
    id: 37,
    name: "Avenida Presidente Vargas",
    latitude: -22.355111567480954,
    longitude: -47.334519622425944,
  },
  {
    id: 38,
    name: "Rua Fernado Guerreiro L Franco",
    latitude: -22.360191796220175,
    longitude: -47.33735203529258,
  },
  {
    id: 39,
    name: "Rua França",
    latitude: -22.34419142506611,
    longitude: -47.38167822181573,
  },
  {
    id: 40,
    name: "Rua Silvia Teles",
    latitude: -22.35562257509879,
    longitude: -47.38287985151676,
  },
];

const LINES: Line[] = [
  {
    id: 1,
    name: "Linha Terminal-Centro",
    description: "Rota partindo do terminal e rodando todo o centro e alguns bairros adjacentes",
  },
  {
    id: 2,
    name: "Linha Terminal-Zona Leste",
    description: "Rota partindo do terminal e passando por bairros que rondam a Zona Sul e Zona Leste",
  },
  {
    id: 3,
    name: "Linha Terminal-Sudeste",
    description: "Rota que atende as redondezas do terminal e o Sudeste da cidade",
  },
  {
    id: 4,
    name: "Rota Geral",
    description: "Rota partindo do Terminal e circulando as principais avenidas Cidade",
  },
  {
    id: 5,
    name: "Linha Zona Leste-Zona Norte",
    description: "Rota que cobre pontos do terminal Ã  Zona Leste e Zona Norte da cidade",
  },
];

const STOPS_LINE: Stop_Line[] = [
  { id: 1, order: 1, id_stop: STOPS[25 - 1].id, id_line: LINES[0].id },
  { id: 2, order: 2, id_stop: STOPS[26 - 1].id, id_line: LINES[0].id },
  { id: 3, order: 3, id_stop: STOPS[24 - 1].id, id_line: LINES[0].id },
  { id: 4, order: 4, id_stop: STOPS[21 - 1].id, id_line: LINES[0].id },
  { id: 5, order: 5, id_stop: STOPS[28 - 1].id, id_line: LINES[0].id },
  { id: 6, order: 6, id_stop: STOPS[2 - 1].id, id_line: LINES[0].id },
  { id: 7, order: 7, id_stop: STOPS[5 - 1].id, id_line: LINES[0].id },
  { id: 8, order: 8, id_stop: STOPS[6 - 1].id, id_line: LINES[0].id },
  { id: 9, order: 9, id_stop: STOPS[39 - 1].id, id_line: LINES[0].id },
  { id: 10, order: 10, id_stop: STOPS[10 - 1].id, id_line: LINES[0].id },
  { id: 11, order: 11, id_stop: STOPS[17 - 1].id, id_line: LINES[0].id },
  { id: 12, order: 12, id_stop: STOPS[18 - 1].id, id_line: LINES[0].id },
  { id: 13, order: 13, id_stop: STOPS[38 - 1].id, id_line: LINES[0].id },
  { id: 14, order: 14, id_stop: STOPS[36 - 1].id, id_line: LINES[0].id },
  { id: 15, order: 15, id_stop: STOPS[14 - 1].id, id_line: LINES[0].id },
  { id: 16, order: 16, id_stop: STOPS[33 - 1].id, id_line: LINES[0].id },
  { id: 17, order: 1, id_stop: STOPS[25 - 1].id, id_line: LINES[1].id },
  { id: 18, order: 2, id_stop: STOPS[26 - 1].id, id_line: LINES[1].id },
  { id: 19, order: 3, id_stop: STOPS[24 - 1].id, id_line: LINES[1].id },
  { id: 20, order: 4, id_stop: STOPS[22 - 1].id, id_line: LINES[1].id },
  { id: 21, order: 5, id_stop: STOPS[23 - 1].id, id_line: LINES[1].id },
  { id: 22, order: 6, id_stop: STOPS[27 - 1].id, id_line: LINES[1].id },
  { id: 23, order: 7, id_stop: STOPS[30 - 1].id, id_line: LINES[1].id },
  { id: 24, order: 8, id_stop: STOPS[29 - 1].id, id_line: LINES[1].id },
  { id: 25, order: 9, id_stop: STOPS[32 - 1].id, id_line: LINES[1].id },
  { id: 26, order: 10, id_stop: STOPS[12 - 1].id, id_line: LINES[1].id },
  { id: 27, order: 11, id_stop: STOPS[33 - 1].id, id_line: LINES[1].id },
  { id: 28, order: 12, id_stop: STOPS[13 - 1].id, id_line: LINES[1].id },
  { id: 29, order: 13, id_stop: STOPS[14 - 1].id, id_line: LINES[1].id },
  { id: 30, order: 14, id_stop: STOPS[16 - 1].id, id_line: LINES[1].id },
  { id: 31, order: 1, id_stop: STOPS[25 - 1].id, id_line: LINES[2].id },
  { id: 32, order: 2, id_stop: STOPS[26 - 1].id, id_line: LINES[2].id },
  { id: 33, order: 3, id_stop: STOPS[24 - 1].id, id_line: LINES[2].id },
  { id: 34, order: 4, id_stop: STOPS[40 - 1].id, id_line: LINES[2].id },
  { id: 35, order: 5, id_stop: STOPS[28 - 1].id, id_line: LINES[2].id },
  { id: 36, order: 6, id_stop: STOPS[22 - 1].id, id_line: LINES[2].id },
  { id: 37, order: 7, id_stop: STOPS[23 - 1].id, id_line: LINES[2].id },
  { id: 38, order: 8, id_stop: STOPS[20 - 1].id, id_line: LINES[2].id },
  { id: 39, order: 9, id_stop: STOPS[19 - 1].id, id_line: LINES[2].id },
  { id: 40, order: 10, id_stop: STOPS[1 - 1].id, id_line: LINES[2].id },
  { id: 41, order: 11, id_stop: STOPS[21 - 1].id, id_line: LINES[2].id },
  { id: 42, order: 12, id_stop: STOPS[2 - 1].id, id_line: LINES[2].id },
  { id: 43, order: 13, id_stop: STOPS[27 - 1].id, id_line: LINES[2].id },
  { id: 44, order: 14, id_stop: STOPS[29 - 1].id, id_line: LINES[2].id },
  { id: 45, order: 15, id_stop: STOPS[30 - 1].id, id_line: LINES[2].id },
  { id: 46, order: 16, id_stop: STOPS[32 - 1].id, id_line: LINES[2].id },
  { id: 47, order: 17, id_stop: STOPS[31 - 1].id, id_line: LINES[2].id },
  { id: 48, order: 1, id_stop: STOPS[25 - 1].id, id_line: LINES[3].id },
  { id: 49, order: 2, id_stop: STOPS[26 - 1].id, id_line: LINES[3].id },
  { id: 50, order: 3, id_stop: STOPS[24 - 1].id, id_line: LINES[3].id },
  { id: 51, order: 4, id_stop: STOPS[33 - 1].id, id_line: LINES[3].id },
  { id: 52, order: 5, id_stop: STOPS[13 - 1].id, id_line: LINES[3].id },
  { id: 53, order: 6, id_stop: STOPS[17 - 1].id, id_line: LINES[3].id },
  { id: 54, order: 7, id_stop: STOPS[36 - 1].id, id_line: LINES[3].id },
  { id: 55, order: 8, id_stop: STOPS[34 - 1].id, id_line: LINES[3].id },
  { id: 56, order: 9, id_stop: STOPS[2 - 1].id, id_line: LINES[3].id },
  { id: 57, order: 10, id_stop: STOPS[19 - 1].id, id_line: LINES[3].id },
  { id: 58, order: 11, id_stop: STOPS[23 - 1].id, id_line: LINES[3].id },
  { id: 59, order: 12, id_stop: STOPS[30 - 1].id, id_line: LINES[3].id },
  { id: 60, order: 13, id_stop: STOPS[29 - 1].id, id_line: LINES[3].id },
  { id: 61, order: 1, id_stop: STOPS[25 - 1].id, id_line: LINES[4].id },
  { id: 62, order: 2, id_stop: STOPS[26 - 1].id, id_line: LINES[4].id },
  { id: 63, order: 3, id_stop: STOPS[24 - 1].id, id_line: LINES[4].id },
  { id: 64, order: 4, id_stop: STOPS[33 - 1].id, id_line: LINES[4].id },
  { id: 65, order: 5, id_stop: STOPS[13 - 1].id, id_line: LINES[4].id },
  { id: 66, order: 6, id_stop: STOPS[14 - 1].id, id_line: LINES[4].id },
  { id: 67, order: 7, id_stop: STOPS[38 - 1].id, id_line: LINES[4].id },
  { id: 68, order: 8, id_stop: STOPS[37 - 1].id, id_line: LINES[4].id },
  { id: 69, order: 9, id_stop: STOPS[15 - 1].id, id_line: LINES[4].id },
  { id: 70, order: 10, id_stop: STOPS[16 - 1].id, id_line: LINES[4].id },
  { id: 71, order: 11, id_stop: STOPS[24 - 1].id, id_line: LINES[4].id },
  { id: 72, order: 12, id_stop: STOPS[28 - 1].id, id_line: LINES[4].id },
  { id: 73, order: 13, id_stop: STOPS[34 - 1].id, id_line: LINES[4].id },
  { id: 74, order: 14, id_stop: STOPS[9 - 1].id, id_line: LINES[4].id },
  { id: 75, order: 15, id_stop: STOPS[8 - 1].id, id_line: LINES[4].id },
  { id: 76, order: 16, id_stop: STOPS[7 - 1].id, id_line: LINES[4].id },
  { id: 77, order: 18, id_stop: STOPS[39 - 1].id, id_line: LINES[4].id },
  { id: 78, order: 19, id_stop: STOPS[35 - 1].id, id_line: LINES[4].id },
  { id: 79, order: 20, id_stop: STOPS[24 - 1].id, id_line: LINES[4].id },
];

async function main() {
  await prisma.user.createMany({ data: USERS });
  await prisma.stop.createMany({ data: STOPS });
  await prisma.bus.createMany({ data: BUS });
  await prisma.line.createMany({ data: LINES });
  await prisma.stop_Line.createMany({ data: STOPS_LINE });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
