// import { Timestamp } from "firebase/firestore"

export interface Contact {
  name?: string,
  email: string,
  topic: string,
  message?: string
    // sentAt?: string | Timestamp
}

export enum Topic {
  CybersecurityAudit,
  IncidentResponse,
  CloudSecurity,
  PenetrationTesting,
  ITPolicySystem,
  CybersecurityTraining,
  ProfessionalItServices,
  Other,
}