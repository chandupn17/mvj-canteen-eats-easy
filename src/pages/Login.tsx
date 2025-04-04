
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import MVJLogo from '@/components/MVJLogo';
import { toast } from 'sonner';

// Define the form validation schema
const studentSchema = z.object({
  usn: z.string().min(1, "USN is required").toUpperCase(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const staffSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Student form
  const studentForm = useForm<z.infer<typeof studentSchema>>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      usn: "",
      password: "",
    },
  });

  // Staff form
  const staffForm = useForm<z.infer<typeof staffSchema>>({
    resolver: zodResolver(staffSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle student login
  const onStudentSubmit = (values: z.infer<typeof studentSchema>) => {
    setIsSubmitting(true);
    
    // Mock login - in real app, this would be an API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // For demo, we'll just check if USN starts with "MVJ"
      if (values.usn.startsWith("MVJ")) {
        // Set user type and redirect
        localStorage.setItem('userType', 'student');
        localStorage.setItem('userInfo', JSON.stringify({ usn: values.usn }));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid USN or password");
      }
    }, 1000);
  };

  // Handle staff login
  const onStaffSubmit = (values: z.infer<typeof staffSchema>) => {
    setIsSubmitting(true);
    
    // Mock login - in real app, this would be an API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // For demo, we'll just check if email ends with "@mvjce.edu.in"
      if (values.email.endsWith("@mvjce.edu.in")) {
        // Set user type and redirect
        localStorage.setItem('userType', 'staff');
        localStorage.setItem('userInfo', JSON.stringify({ email: values.email }));
        toast.success("Login successful!");
        navigate("/manage");
      } else {
        toast.error("Invalid email or password");
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <MVJLogo className="mb-4" />
          <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to MVJ Canteen Eats Easy</h1>
          <p className="text-center text-gray-600">Sign in to your account</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="staff">Staff/Management</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <Form {...studentForm}>
                <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-6">
                  <FormField
                    control={studentForm.control}
                    name="usn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>USN</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your USN" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={studentForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-mvj-red hover:bg-mvj-red/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="staff">
              <Form {...staffForm}>
                <form onSubmit={staffForm.handleSubmit(onStaffSubmit)} className="space-y-6">
                  <FormField
                    control={staffForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={staffForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-mvj-orange hover:bg-mvj-orange/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
