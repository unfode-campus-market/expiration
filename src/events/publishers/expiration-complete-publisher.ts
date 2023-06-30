import {ExpirationCompleteEvent, Publisher, Subjects} from "@campus-market/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}