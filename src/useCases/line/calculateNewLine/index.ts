import { credentials } from "../../../infra/awsCognitoCredentials";
import { prisma } from "../../../infra/database";
import { AmazonRouteCalculatorProvider } from "../../../providers/implementations/aws/AmazonRouteCalculatorProvider";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { CalculateNewLineController } from "./CalculateNewLineController";
import { CalculateNewLineUseCase } from "./CalculateNewLineUseCase";

const amazonRouteCalculatorProvider = new AmazonRouteCalculatorProvider(credentials);

const prismaLineRepository = new PrismaLineRepository(prisma);

const calculateNewLineUseCase = new CalculateNewLineUseCase(
  prismaLineRepository,
  amazonRouteCalculatorProvider
);

const calculateNewLineController = new CalculateNewLineController(calculateNewLineUseCase);

export { calculateNewLineController, calculateNewLineUseCase };
