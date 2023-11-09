'use client'
import Image from 'next/image'
import CustomInput from "@/app/components/TodoApp";
import CustomTodo from "@/app/components/CustomTodo"
import CustomToggle from "@/app/components/CustomToggle";
export default function Home() {
    return (
        <div>
            <CustomInput/>
            <CustomTodo />
            <CustomToggle />
        </div>
    )
}
