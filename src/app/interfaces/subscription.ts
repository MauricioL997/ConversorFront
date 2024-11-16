import { SubscriptionType } from "./subscription-type.enum";


export interface Subscription {
  id: number;
  type: SubscriptionType;
  conversionLimit: number;
  monthlyReset: boolean;
}
