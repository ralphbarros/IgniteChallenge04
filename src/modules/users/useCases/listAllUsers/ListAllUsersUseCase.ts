import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        console.log("usuari recebido ", user_id);
        const user = this.usersRepository.findById(user_id);
        
        if(!user){
            throw new Error (" User does not exists!!" );
            
            }else {
            if(user.admin === false){
                throw new Error (" User does not have access !!");
            }
            const users = this.usersRepository.list();
            return users
        }
  }
}
export { ListAllUsersUseCase };
