interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job information',
    'Apply for a job',
    'Update personal information',
    'Check application status',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage jobs', 'Manage applicants'],
  getQuoteUrl: 'https://app.roq.ai/proposal/18bea46e-0dd7-4654-b96c-027daa16468c',
};
