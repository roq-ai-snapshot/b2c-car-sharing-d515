import { DashboardInterface } from 'interfaces/dashboard';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  dashboard_id: string;
  action: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  dashboard?: DashboardInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  dashboard_id?: string;
  action?: string;
  status?: string;
}
