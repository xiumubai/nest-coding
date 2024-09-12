import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard } from "./entity/IdCard"

AppDataSource.initialize().then(async () => {

    const user = new User();
    user.firstName = 'xiumubai';
    user.lastName = 'xiumubai';
    user.age = 18;
    
    const idCard = new IdCard();
    idCard.cardName = '1111111';
    idCard.user = user;
    
    await AppDataSource.manager.save(user);
    await AppDataSource.manager.save(idCard);

}).catch(error => console.log(error))
