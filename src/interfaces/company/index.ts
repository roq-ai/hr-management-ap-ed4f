import { HrManagerInterface } from 'interfaces/hr-manager';
import { JobInterface } from 'interfaces/job';
import { OwnerInterface } from 'interfaces/owner';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_at?: any;
  industry?: string;
  location?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  hr_manager?: HrManagerInterface[];
  job?: JobInterface[];
  owner?: OwnerInterface[];

  _count?: {
    hr_manager?: number;
    job?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  industry?: string;
  location?: string;
  name?: string;
  tenant_id?: string;
}
