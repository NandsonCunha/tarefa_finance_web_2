import { Router } from "express";
import * as BankController from '../controllers/BankController'
const router = Router()


router.get('/findAllBanks',BankController.findAllDataBankController)

router.get('/bank/:id',BankController.findOneDataBankController)

router.post('/financing-simulation',BankController.financingSimulationController)

export default router