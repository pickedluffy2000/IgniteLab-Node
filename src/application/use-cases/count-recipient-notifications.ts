/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { NotificationRepository } from "../repository/notification-repository";

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse  {
  count: number;
};

@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationRepository) {}

    async execute(
    request: CountRecipientNotificationsRequest): 
    Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

   const count = await this.notificationsRepository.countManyByRecipientId(recipientId,);

   return {
    count,
   }
  }
} 