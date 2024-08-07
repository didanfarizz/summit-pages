'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schemas';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
// import { login } from '../../actions/login';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push('/');
    } else {
      console.error(result?.error);
    }
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    // startTransition(() => {
    //   login(values)
    //   .then((data) => {
    //     setError(data.error);
    //     setSuccess(data.success);
    //   })
    // });
  };

  return (
    <div className="w-full h-screen bg-[#558ED5]">
      <div className="flex justify-center items-center py-20">
        <div className="w-1/3 bg-[#353535] rounded-3xl">
          <Link href={'/'} className="flex justify-center items-center py-16">
            <Image src={'/logo-summit.png'} alt="logo-summit" width={200} height={100} />
          </Link>
          <div className="">
            <div className="flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Welcome!</p>
            </div>
            <Form {...form}>
              <form action="" onSubmit={handleSubmit} className="space-y-4 py-5 px-10">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input {...field} disabled={isPending} placeholder="saipul@gmail.com" type="email" className="bg-[#D9D9D9] rounded-2xl"></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="text-white">Password</FormLabel>
                        <FormControl>
                          <Input {...field} disabled={isPending} placeholder="1234567" type="password" className="bg-[#D9D9D9] rounded-2xl"></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </div>
                <FormError message={error}></FormError>
                <FormSuccess message={success}></FormSuccess>
                <Button disabled={isPending} type="submit" className="w-full bg-[#558ED5] hover:bg-[#87bdfe]">
                  Login
                </Button>
              </form>
            </Form>
            {/* <form action="#" method="post" className="flex flex-col justify-center items-center">
              <input type="email" id="email" name="email" placeholder="Email" className="bg-[#d9d9d9] w-96 h-16 px-5 rounded-2xl" />
              <input type="password" id="password" name="password" placeholder="Password" className="bg-[#d9d9d9] w-96 h-16 px-5 rounded-2xl my-3" />
              <Link href={'/main'} className="flex justify-center items-center w-64 h-12 bg-[#558ED5] my-4 text-white text-2xl font-bold rounded-[15px] hover:bg-[#9fc0e9] hover:text-black">
                Log In
              </Link>
            </form> */}
            <div className="flex justify-center items-center opacity-60">
              <div className="bg-white w-1/3 h-0.5"></div>
              <p className="text-white px-8">OR</p>
              <div className="bg-white w-1/3 h-0.5"></div>
            </div>
            <Link href={'/auth/register'} className="text-white font-bold text-xl flex justify-center items-center py-7 hover:text-gray-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
