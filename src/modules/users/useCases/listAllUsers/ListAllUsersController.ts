import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let user_id = String(request.headers.user_id);
    
            try {
                const allUser = this.listAllUsersUseCase.execute({ user_id });
                return response.status(201).json(allUser);
            } catch (error) {
                return response.status(400).json(error.message);
            }
    
    }
    
}

export { ListAllUsersController };
