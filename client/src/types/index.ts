export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Business {
  id: string;
  name: string;
  industry: string;
  businessType: string;
  employees: string;
  phone: string;
  website?: string;
  userId: string;
}

export interface Industry {
  title: string;
  desc: string;
  icon: any;
  href: string;
  category: 'crm' | 'erp' | 'billing';
}

export interface AuthContextType {
  user: User | null;
  business: Business | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  completeBusinessSetup: (businessData: Omit<Business, 'id' | 'userId'>) => Promise<void>;
  isLoading: boolean;
}