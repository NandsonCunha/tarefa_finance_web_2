import { Router } from "express";
import * as BankController from '../controllers/BankController'
const router = Router()


router.get('/findAllBanks',BankController.findAllDataBankController)

router.post('/bank',BankController.findOneDataBankController)

router.post('/financing-simulation',BankController.financingSimulationController)

export default router