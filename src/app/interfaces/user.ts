import { EnumUser } from './enum-user.enum';
import { SubscriptionType } from "./subscription-type.enum";

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: EnumUser;
  type: SubscriptionType;
  subscriptionStartDate: Date;
  isActive: boolean;
}
