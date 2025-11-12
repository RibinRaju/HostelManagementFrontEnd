import React from "react";

export const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {children}
  </form>
);

export const FormField = ({ label, children }) => (
  <div className="flex flex-col">
    <label className="font-semibold mb-1">{label}</label>
    {children}
  </div>
);

export const FormLabel = ({ children }) => (
  <label className="font-semibold mb-1">{children}</label>
);

export const FormMessage = ({ children }) => (
  <p className="text-sm text-red-600">{children}</p>
);

export const FormItem = ({ children }) => <div className="space-y-1">{children}</div>;

export const FormControl = ({ children }) => <>{children}</>;
