
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

type ProductType = "lead-management" | "erp-system" | "billing-system" | undefined;

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId?: ProductType;
}

const products = {
  "lead-management": "Customer Relationship Management",
  "erp-system": "ERP System",
  "billing-system": "Billing System",
};

const RequestDemoModal = ({ isOpen, onClose, productId }: RequestDemoModalProps) => {
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      product: productId || "",
      companySize: "",
      message: "",
    },
  });

  const selectedProduct = watch("product");

  // Set the product based on the productId prop
  useState(() => {
    if (productId) {
      setValue("product", productId);
    }
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Demo Request Submitted",
      description: "We've received your request and will contact you soon.",
    });
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] bg-black/90 backdrop-blur-lg border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Request a Demo
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {selectedProduct ? (
              <>Let us show you how <span className="text-white">{products[selectedProduct as keyof typeof products]}</span> can help your business.</>
            ) : (
              <>Fill out the form below and our team will reach out to schedule your personalized demo.</>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name*</Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="bg-white/10 border-white/20 text-white"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-white"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  } 
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message as string}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company*</Label>
              <Input
                id="company"
                placeholder="Your Company"
                className="bg-white/10 border-white/20 text-white"
                {...register("company", { required: "Company name is required" })}
              />
              {errors.company && (
                <p className="text-xs text-red-500">{errors.company.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="+1 (555) 123-4567"
                className="bg-white/10 border-white/20 text-white"
                {...register("phone")}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product">Product Interested In*</Label>
              <Select 
                onValueChange={(value) => setValue("product", value)}
                defaultValue={productId}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead-management">Customer Relationship Management</SelectItem>
                  <SelectItem value="erp-system">ERP System</SelectItem>
                  <SelectItem value="billing-system">Billing System</SelectItem>
                </SelectContent>
              </Select>
              {errors.product && (
                <p className="text-xs text-red-500">{errors.product.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select onValueChange={(value) => setValue("companySize", value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501+">501+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific needs..."
              className="bg-white/10 border-white/20 text-white min-h-[100px]"
              {...register("message")}
            />
          </div>
          
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Request Demo
          </Button>
          <p className="text-xs text-center text-gray-400">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoModal;
