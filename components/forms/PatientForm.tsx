"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFieldType{
    INPUT = 'input'
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const PatientForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1>Hi there 🖐</h1>
                    <p className="text-dark-700">Get Started with your first Appointments.</p>
                </section>
                <CustomFormField 
                fieldType={FormFieldType.INPUT}
                control={form.control} 
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default PatientForm