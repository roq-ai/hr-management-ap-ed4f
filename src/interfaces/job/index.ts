import { ApplicantInterface } from 'interfaces/applicant';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  location?: string;
  type?: string;
  salary?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  company?: CompanyInterface;
  _count?: {
    applicant?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  type?: string;
  company_id?: string;
}
