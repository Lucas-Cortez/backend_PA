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
