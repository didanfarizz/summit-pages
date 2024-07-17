import LoginForm from "@/components/login";
import React from "react";

export const metadata = {
    title: 'Summit Pages',
    description: 'Summit Pages',
    icons: {
      icon: '/logo.png',
    },
  };

export default function loginPage() {
    return(
        <LoginForm/>
    )
}