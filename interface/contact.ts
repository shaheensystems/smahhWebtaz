// import { Timestamp } from "firebase/firestore"

export interface Contact {
  name?: string | undefined,
  email: string,
  category: string,
  message?: string | undefined
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