
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  
  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const registerForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleLogin = (data: { email: string; password: string }) => {
    toast({
      title: "Login Attempted",
      description: `You tried to log in with email: ${data.email}`,
    });
    // Here you would normally authenticate the user
    onClose();
  };

  const handleRegister = (data: { name: string; email: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Attempted",
      description: `You tried to register with name: ${data.name} and email: ${data.email}`,
    });
    // Here you would normally register the user
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-lg border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to Founder Workspace
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="w-full">
          <TabsList className="grid grid-cols-2 mb-8 w-full bg-white/5">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Register</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="animate-in fade-in-50 zoom-in-95 duration-300">
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white"
                  {...loginForm.register("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-white/20 text-white"
                  {...loginForm.register("password", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Login
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="animate-in fade-in-50 zoom-in-95 duration-300">
            <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white"
                  {...registerForm.register("name", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white"
                  {...registerForm.register("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-white/20 text-white"
                  {...registerForm.register("password", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-white/20 text-white"
                  {...registerForm.register("confirmPassword", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Create Account
              </Button>
              <p className="text-xs text-center text-gray-400">
                By registering, you agree to our<br />
                <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
