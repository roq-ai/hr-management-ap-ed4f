import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  user_id: string;
  job_id: string;
  status?: string;
  applied_at?: any;
  cv?: string;
  cover_letter?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_id?: string;
  status?: string;
  cv?: string;
  cover_letter?: string;
}
