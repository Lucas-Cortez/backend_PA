import { Bus, PrismaClient, Stop, User } from "@prisma/client";

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
    weight: 13.0,
    model: "starvation",
    active: false,
  },
  {
    id: 2,
    capacity: 40,
    height: 3.3,
    width: 2.75,
    length: 16.0,
    weight: 14.0,
    model: "starvation",
    active: false,
  },
  {
    id: 3,
    capacity: 30,
    height: 3.2,
    width: 2.5,
    length: 13.5,
    weight: 11.0,
    model: "starvation",
    active: false,
  },
];

const STOPS: Stop[] = [
  {
    id: 1,
    name: "Rua Recife",
    longitude: -22.34863698382014,
    latitude: -47.40499198268001,
  },
  {
    id: 2,
    name: "Avenida Senador César Lacerda de Vergueiro",
    longitude: -22.354749395576064,
    latitude: -47.39743888278855,
  },
  {
    id: 3,
    name: "Avenida Padre Alarico Zacarias",
    longitude: -22.3592565655256,
    latitude: -47.38880860960194,
  },
  {
    id: 4,
    name: "Avenida Padre Alarico Zacarias",
    longitude: -22.363225391956494,
    latitude: -47.39043939276758,
  },
  {
    id: 5,
    name: "Rua América",
    longitude: -22.344173993867724,
    latitude: -47.3800538789232,
  },
  {
    id: 6,
    name: "Rua Ribeirão Preto",
    longitude: -22.344015221273537,
    latitude: -47.378423095757555,
  },
  {
    id: 7,
    name: "Rua Ribeirão Preto",
    longitude: -22.343141968772976,
    latitude: -47.376277328434334,
  },
  {
    id: 8,
    name: "Rua Ribeirão Preto",
    longitude: -22.342530932046333,
    latitude: -47.37590955222946,
  },
  {
    id: 9,
    name: "Rua Ribeirão Preto",
    longitude: -22.341404233152485,
    latitude: -47.37454809815939,
  },
  {
    id: 10,
    name: "Avenida São Pedro",
    longitude: -22.341978530208685,
    latitude: -47.37038231678214,
  },
  {
    id: 11,
    name: "Av. Pres Costa e Silva",
    longitude: -22.37910833341576,
    latitude: -47.393212003275565,
  },
  {
    id: 12,
    name: "Rua José Antônio Cressoni",
    longitude: -22.37910833341576,
    latitude: -47.37943544790373,
  },
  {
    id: 13,
    name: "Avenida Goffredo Teixeira da Silva Telles",
    longitude: -22.366083551029156,
    latitude: -47.370593778038234,
  },
  {
    id: 14,
    name: "Rua Luís Golineli",
    longitude: -22.36427709812684,
    latitude: -47.36195772840216,
  },
  {
    id: 15,
    name: "Rua da Tecelã",
    longitude: -22.351863211711517,
    latitude: -47.338873357397695,
  },
  {
    id: 16,
    name: "Avenida Augusta Viola da Costa",
    longitude: -22.354482788866946,
    latitude: -47.33792921977548,
  },
  {
    id: 17,
    name: "Avenida Presidente Vargas",
    longitude: -22.352815790920932,
    latitude: -47.33629843660984,
  },
  {
    id: 18,
    name: "Rua Jarbas Leme de Godoy",
    longitude: -22.353609601954073,
    latitude: -47.333895177207836,
  },
  {
    id: 19,
    name: "Rua Florianópolis",
    longitude: -22.350031153278046,
    latitude: -47.40412831125258,
  },
  {
    id: 20,
    name: "Rua Ciro Lagazi",
    longitude: -22.35042806729176,
    latitude: -47.40215420531521,
  },
  {
    id: 21,
    name: "Rua Afonso Bueno",
    longitude: -22.347967182183428,
    latitude: -47.398377654826355,
  },
  {
    id: 22,
    name: "Rua Orquídeas",
    longitude: -22.358127975431053,
    latitude: -47.397261855818286,
  },
  {
    id: 23,
    name: "Avenida Flamboiant",
    longitude: -22.36979609713661,
    latitude: -47.404986618181866,
  },
  {
    id: 24,
    name: "Avenida Dona Renata",
    longitude: -22.358683622441553,
    latitude: -47.39065289246278,
  },
  {
    id: 25,
    name: "Avenida Padre Atílio",
    longitude: -22.361223694834393,
    latitude: -47.38756298751735,
  },
  {
    id: 26,
    name: "Av Pe Alarico Zacarias",
    longitude: -22.367414927212536,
    latitude: -47.39228367562843,
  },
  {
    id: 27,
    name: "Rua Paraíba",
    longitude: -22.373843992538358,
    latitude: -47.389794585533494,
  },
  {
    id: 28,
    name: "Rua Nunes Machado",
    longitude: -22.356619779515782,
    latitude: -47.38284229940627,
  },
  {
    id: 29,
    name: "Avenida Presidente Dutra",
    longitude: -22.381383876121962,
    latitude: -47.38653302009253,
  },
  {
    id: 30,
    name: "Avenida Presidente Costa e Silva",
    longitude: -22.38225688886656,
    latitude: -47.388592956722825,
  },
  {
    id: 31,
    name: "Rua Antônio Pereira da Silva",
    longitude: -22.385113983221466,
    latitude: -47.37743496682905,
  },
  {
    id: 32,
    name: "Rua José Antônio Cressoni",
    longitude: -22.380907685080174,
    latitude: -47.37691998267148,
  },
  {
    id: 33,
    name: "Avenida José Ometto",
    longitude: -22.373367775840862,
    latitude: -47.37331509356847,
  },
  {
    id: 34,
    name: "Rua América",
    longitude: -22.346697031094966,
    latitude: -47.380009887999755,
  },
  {
    id: 35,
    name: "Rua Piracicaba",
    longitude: -22.34280712088566,
    latitude: -47.37374424741595,
  },
  {
    id: 36,
    name: "Avenida Augusta Viola da Costa",
    longitude: -22.35280952784119,
    latitude: -47.3346912838118,
  },
  {
    id: 37,
    name: "Avenida Presidente Vargas",
    longitude: -22.355111567480954,
    latitude: -47.334519622425944,
  },
  {
    id: 38,
    name: "Rua Fernado Guerreiro L Franco",
    longitude: -22.360191796220175,
    latitude: -47.33735203529258,
  },
  {
    id: 39,
    name: "Rua França",
    longitude: -22.34419142506611,
    latitude: -47.38167822181573,
  },
  {
    id: 40,
    name: "Rua Silvia Teles",
    longitude: -22.35562257509879,
    latitude: -47.38287985151676,
  },
];

async function main() {
  await prisma.user.createMany({ data: USERS });
  await prisma.stop.createMany({ data: STOPS });
  await prisma.bus.createMany({ data: BUS });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
