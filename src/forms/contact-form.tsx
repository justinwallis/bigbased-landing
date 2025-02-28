"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/Button";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const onSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      setSubmitting(true);

      // Simulate an API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Message sent successfully!");

      resetForm();
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              // required
              className="h-14 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 outline-none placeholder:text-gray-600 focus:ring-1"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-400">
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              // required
              className="h-14 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 outline-none placeholder:text-gray-600 focus:ring-1"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-400">
              How can we help?
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Enter your message"
              // required
              rows={6}
              className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 outline-none placeholder:text-gray-600 focus:ring-1"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit">
              <Button title="Send Message" />
            </button>
            {/* <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto inline-flex h-[50px] w-full min-w-[180px] items-center justify-center gap-2 rounded-full bg-gray-200 px-8 py-4 font-medium text-black transition-all duration-300 ease-in-out hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200 sm:w-auto"
            >
              {isSubmitting ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="h-6 w-6" />
                </>
              )}
            </button> */}
          </div>
        </Form>
      )}
    </Formik>
  );
}
