import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z
  .object({
    resName: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name must be less than 100 characters"),
    resPhno: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be less than 15 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    resAddress: z
      .string()
      .max(255, "Address must be less than 255 characters")
      .optional(),
    resUsername: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username must be less than 50 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    resPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be less than 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.resPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resName: "",
      resPhno: "",
      resAddress: "",
      resUsername: "",
      resPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // Prepare data for your backend API
      const userData = {
        resName: values.resName,
        resPhno: parseInt(values.resPhno),
        resAddress: values.resAddress || "",
        resUsername: values.resUsername,
        resPassword: values.resPassword,
      };

      // TODO: Replace with your actual backend API endpoint
      const response = await fetch("YOUR_BACKEND_API_URL/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      toast({
        title: "Success!",
        description: "Your account has been created successfully.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-2xl shadow-medium p-8 border border-border">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-muted-foreground mt-2">
            Join MyHostel management system
          </p>
        </div>

        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField label="Hoster Name">
            <Input
              placeholder="1234567890"
    
              className="transition-all focus:shadow-soft"
            />
          </FormField>
          <Form
            control={form.control}
            name="resPhno"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234567890"
                    {...field}
                    className="transition-all focus:shadow-soft"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="123 Main Street, City, Country"
                    {...field}
                    className="transition-all focus:shadow-soft resize-none"
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe123"
                    {...field}
                    className="transition-all focus:shadow-soft"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="transition-all focus:shadow-soft"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password *</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="transition-all focus:shadow-soft"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;