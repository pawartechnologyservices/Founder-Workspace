// src/hooks/useAuth.ts
import { useState, useContext, createContext, ReactNode, useCallback } from "react";

// ================== Types ==================
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

interface AuthContextType {
  user: User | null;
  business: Business | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  completeBusinessSetup: (
    businessData: Omit<Business, "id" | "userId">
  ) => Promise<void>;
  isLoading: boolean;
}

// ================== Context ==================
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ================== Provider ==================
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to simulate API calls
  const mockApiCall = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  // ---- login ----
  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await mockApiCall();
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email,
      };
      setUser(mockUser);
      setBusiness(null);
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ---- signup ----
  const signup = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      await mockApiCall();
      const mockUser: User = {
        id: "1",
        name,
        email,
      };
      setUser(mockUser);
      setBusiness(null);
    } catch (error) {
      console.error("Signup failed:", error);
      throw new Error("Could not create account");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ---- Google login ----
  const loginWithGoogle = useCallback(async () => {
    setIsLoading(true);
    try {
      await mockApiCall();
      const mockUser: User = {
        id: "1",
        name: "Google User",
        email: "user@example.com",
      };
      setUser(mockUser);
      setBusiness(null);
    } catch (error) {
      console.error("Google login failed:", error);
      throw new Error("Google authentication failed");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ---- logout ----
  const logout = useCallback(() => {
    setUser(null);
    setBusiness(null);
  }, []);

  // ---- complete business setup ----
  const completeBusinessSetup = useCallback(async (
    businessData: Omit<Business, "id" | "userId">
  ) => {
    setIsLoading(true);
    try {
      await mockApiCall();
      if (!user) {
        throw new Error("User not logged in");
      }
      const mockBusiness: Business = {
        id: "1",
        userId: user.id,
        ...businessData,
      };
      setBusiness(mockBusiness);
    } catch (error) {
      console.error("Business setup failed:", error);
      throw new Error("Could not save business information");
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // ---- Provider Value ----
  const value: AuthContextType = {
    user,
    business,
    login,
    signup,
    loginWithGoogle,
    logout,
    completeBusinessSetup,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ================== Hook ==================
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
