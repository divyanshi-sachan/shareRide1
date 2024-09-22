import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
      <SignIn 
        path="/sign-in" 
        routing="path" 
        signUpUrl="/signup" 
        afterSignInUrl="/home"
      />
  );
};
export default SignInPage;


